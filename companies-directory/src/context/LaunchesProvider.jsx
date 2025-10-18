
import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchLaunches } from "@/api/spacex"; 

const LaunchesContext = createContext();

export const LaunchesProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [filteredLaunches, setFilteredLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    search: "",
    industry: "",
    location: "",
    favoritesOnly: false,
  });

  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedCompany, setSelectedCompany] = useState(null);

 
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchLaunches();
        setCompanies(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to load companies", error);
        setCompanies([]);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

 
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch {
      
    }
  }, [favorites]);


  const updateFilters = (newFilters) => {
    if (typeof newFilters === "function") {
      setFilters((prev) => newFilters(prev));
    } else {
      setFilters((prev) => ({ ...prev, ...newFilters }));
    }
  };

 
  useEffect(() => {
    if (!companies.length) return;

    const prioritize = (company) => {
      let score = 0;

     
      if (
        filters.search &&
        company.name?.toLowerCase().includes(filters.search.trim().toLowerCase())
      ) {
        score += 3;
      }

      
      if (
        filters.industry &&
        company.industry?.toLowerCase().includes(filters.industry.trim().toLowerCase())
      ) {
        score += 2;
      }

    
      if (
        filters.location &&
        company.location?.toLowerCase().includes(filters.location.trim().toLowerCase())
      ) {
        score += 1;
      }

     
      if (filters.favoritesOnly && favorites.includes(company.id)) {
        score += 4;
      }

      return score;
    };

    
    const sorted = [...companies]
      .map((c) => ({ ...c, _score: prioritize(c) }))
      .sort((a, b) => b._score - a._score);

    setFilteredLaunches(sorted);
  }, [companies, filters, favorites]);

 
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((fid) => fid !== id)
        : [...prev, id]
    );
  };

  return (
    <LaunchesContext.Provider
      value={{
        companies,
        filteredLaunches,
        filters,
        updateFilters,
        loading,
        favorites,
        toggleFavorite,
        selectedCompany,
        setSelectedCompany,
        clearSelectedCompany: () => setSelectedCompany(null),
      }}
    >
      {children}
    </LaunchesContext.Provider>
  );
};

export const useLaunchesContext = () => useContext(LaunchesContext);
