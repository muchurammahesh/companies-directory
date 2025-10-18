
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLaunchesContext } from "@/context/LaunchesProvider";

export default function LaunchCard({ launch }) {
  const { favorites, toggleFavorite, setSelectedCompany } = useLaunchesContext();
  const isFav = favorites.includes(launch.id);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.35 }}
      className="w-full bg-card text-card-foreground rounded-2xl shadow-md overflow-hidden border border-border p-4 flex flex-col justify-between"
      onClick={() => setSelectedCompany(launch)}
    >
      <div className="flex justify-between items-start">
        <div className="text-left">
          <h3 className="text-lg font-semibold text-primary">{launch.name}</h3>
          <p className="text-sm text-muted-foreground mt-1 truncate">{launch.industry}</p>
          <p className="text-sm text-muted-foreground mt-2">📍 {launch.location}</p>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(launch.id);
          }}
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
          className="p-2 rounded-full transition"
        >
          <Star
            size={20}
            className={isFav ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}
          />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center">
        {launch.links?.patch?.small ? (
          <motion.img
            src={launch.links.patch.small}
            alt={`${launch.name} logo`}
            className="w-24 h-24 object-contain"
            whileHover={{ rotate: 6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        ) : (
          <div className="w-24 h-24 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded">
            🏢
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
          Founded {launch.founded}
        </span>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setSelectedCompany(launch);
        }}
        className="mt-4 w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View Details
      </button>
    </motion.div>
  );
}
