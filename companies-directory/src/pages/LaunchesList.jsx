
import React from "react";
import { useLaunchesContext } from "@/context/LaunchesProvider";
import Navbar from "@/components/Navbar";
import LaunchCard from "@/components/LaunchCard";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import EmptyState from "@/components/EmptyState";
import Pagination from "@/components/Pagination";
import LaunchDetails from "@/pages/LaunchDetails";

export default function LaunchesList() {
  const { filteredLaunches, loading, filters } = useLaunchesContext();


  const [page, setPage] = React.useState(1);
  const perPage = 12;
  const totalPages = Math.max(1, Math.ceil(filteredLaunches.length / perPage));
  const paginated = filteredLaunches.slice((page - 1) * perPage, page * perPage);

  
  React.useEffect(() => {
    setPage(1);
  }, [
    filters.search,
    filters.industry,
    filters.location,
    filters.favoritesOnly,
    filteredLaunches.length,
  ]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
      <Navbar />

      <main className="flex-1 w-full px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <section className="flex-1 min-h-[50vh] flex flex-col items-stretch">
            {loading ? (
              <LoadingSkeleton count={12} />
            ) : filteredLaunches.length === 0 ? (
              <div className="flex items-center justify-center min-h-[300px] w-full">
                <EmptyState message="No companies found. Try adjusting filters." />
              </div>
            ) : (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 w-full min-h-[300px]">
                {paginated.map((launch) => (
                  <LaunchCard key={launch.id} launch={launch} />
                ))}
              </div>
            )}

            {!loading && filteredLaunches.length > 0 && (
              <div className="mt-6 flex justify-center">
                <Pagination
                  page={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                />
              </div>
            )}
          </section>
        
          <aside className="w-full lg:w-[420px] lg:flex-none overflow-auto">
            <LaunchDetails />
          </aside>
        </div>
      </main>
    </div>
  );
}
