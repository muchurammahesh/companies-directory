
import { Building2 } from "lucide-react";

export default function EmptyState({ message }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 w-full">
      <Building2 className="w-12 h-12 text-gray-400 mb-4" />
      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
        {message || "No companies found. Try adjusting filters."}
      </p>
    </div>
  );
}
