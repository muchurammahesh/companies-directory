
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLaunchesContext } from "@/context/LaunchesProvider";

export default function LaunchDetails({ companyProp = null }) {
  const { selectedCompany, clearSelectedCompany, loading } = useLaunchesContext();
  const company = companyProp || selectedCompany;

  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const check = () => setIsSmall(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") clearSelectedCompany();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [clearSelectedCompany]);

  if (loading)
    return (
      <aside className="w-full lg:w-[420px] bg-card p-6 rounded-2xl border border-border">
        <p className="text-sm text-muted-foreground">Loading...</p>
      </aside>
    );

  if (!company)
    return (
      <aside className="w-full lg:w-[420px] bg-card p-6 rounded-2xl border border-border">
        <p className="text-sm text-muted-foreground">Select a company to view details</p>
      </aside>
    );

  const content = (
    <div className="text-center space-y-4">
      {company.links?.patch?.small && (
        <img
          src={company.links.patch.small}
          alt={`${company.name} logo`}
          className="w-28 h-28 mx-auto object-contain"
        />
      )}
      <h2 className="text-xl font-bold text-primary">{company.name}</h2>
      <p className="text-sm text-muted-foreground">{company.industry}</p>
      <p className="text-sm text-muted-foreground">📍 {company.location}</p>
      <p className="text-sm text-muted-foreground">Founded: {company.founded}</p>

      {company.details && (
        <p className="text-sm text-card-foreground">{company.details}</p>
      )}

      <div className="flex flex-wrap justify-center gap-3 mt-3">
        {company.links?.wikipedia && (
          <a
            href={company.links.wikipedia}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-sm"
          >
            Wikipedia
          </a>
        )}
        {company.links?.webcast && (
          <a
            href={company.links.webcast}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-sm"
          >
            Website
          </a>
        )}
      </div>
    </div>
  );

  if (isSmall)
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <aside className="w-[90%] max-h-[80vh] bg-card p-6 rounded-2xl border border-border relative overflow-y-auto">
          <button
            onClick={clearSelectedCompany}
            aria-label="Close details"
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800"
          >
            <X className="w-4 h-4" />
          </button>
          {content}
        </aside>
      </div>
    );

  return (
    <aside className="w-full lg:w-[420px] bg-card p-6 rounded-2xl border border-border relative overflow-y-auto max-h-[75vh]">
      <button
        onClick={clearSelectedCompany}
        aria-label="Close details"
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <X className="w-4 h-4" />
      </button>
      {content}
    </aside>
  );
}
