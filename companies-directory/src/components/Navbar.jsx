
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import { useLaunchesContext } from "@/context/LaunchesProvider";


const letterVariant = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.03 },
  }),
};

export default function Navbar() {
  const { filters, updateFilters } = useLaunchesContext();

  const onSearch = (e) => updateFilters({ search: e.target.value });
  const onIndustry = (e) => updateFilters({ industry: e.target.value });
  const onLocation = (e) => updateFilters({ location: e.target.value });
  const toggleFavorites = () =>
    updateFilters((prev) => ({ ...prev, favoritesOnly: !prev.favoritesOnly }));

  const subtitle = "Explore\u00A0\u00A0companies\u00A0\u00A0by\u00A0\u00A0industry,\u00A0\u00A0location,\u00A0\u00A0or\u00A0\u00A0your\u00A0\u00A0favorites.";

return (
  <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3 relative">
      
      <div className="flex items-center gap-1">
        <motion.h1
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-extrabold text-lg sm:text-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent"
        >
          Companies Directory 
        </motion.h1>

        <span className="text-xs font-semibold px-1 py-[2px] bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-md tracking-wide">
          - Frontlines Media Assignment
        </span>
      </div>

      <motion.p
        className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex flex-wrap"
        initial="hidden"
        animate="visible"
        key={subtitle}
      >
        {subtitle.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariant}
            custom={i}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3"
        >
          <input
            type="text"
            placeholder="Search by company name..."
            value={filters.search || ""}
            onChange={onSearch}
            className="px-4 py-2 border rounded-lg text-sm bg-gray-50 dark:bg-gray-800 w-full lg:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex flex-wrap gap-3 items-center">
            <select
              value={filters.industry || ""}
              onChange={onIndustry}
              className="px-4 py-2 border rounded-lg text-sm bg-gray-50 dark:bg-gray-800 min-w-[180px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Industries</option>
              <option value="Automotive">Automotive</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Consulting">Consulting</option>
              <option value="E-commerce">E-commerce</option>
              <option value="EdTech">EdTech</option>
              <option value="Electronics">Electronics</option>
              <option value="Energy">Energy</option>
              <option value="Engineering">Engineering</option>
              <option value="Finance">Finance</option>
              <option value="Fintech">Fintech</option>
              <option value="Gaming">Gaming</option>
              <option value="Healthcare">Healthcare</option>
              <option value="IT Services">IT Services</option>
              <option value="IT / Marketing Tech">IT / Marketing Tech</option>
              <option value="Pharmaceutical">Pharmaceutical</option>
              <option value="Semiconductors">Semiconductors</option>
              <option value="Software">Software</option>
              <option value="Sportswear">Sportswear</option>
              <option value="Tech Consulting">Tech Consulting</option>
              <option value="Technology">Technology</option>
              <option value="Telecom">Telecom</option>
            </select>

            <select
              value={filters.location || ""}
              onChange={onLocation}
              className="px-4 py-2 border rounded-lg text-sm bg-gray-50 dark:bg-gray-800 min-w-[130px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Locations</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
            </select>

            <label className="flex items-center gap-2 cursor-pointer text-sm select-none">
              <input
                type="checkbox"
                checked={!!filters.favoritesOnly}
                onChange={toggleFavorites}
                className="sr-only"
              />
              <span
                className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors ${
                  filters.favoritesOnly ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    filters.favoritesOnly ? "translate-x-5" : ""
                  }`}
                />
              </span>
              Favorites
            </label>
          </div>
        </motion.div>

        <div className="absolute top-3 right-5">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
