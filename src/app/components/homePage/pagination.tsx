"use client";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const visiblePages = generatePageNumbers(currentPage, totalPages);

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="text-lg shadow-none"
      >
        «
      </button>

      {visiblePages.map((page, idx) =>
        page === "..." ? (
          <span
            key={idx}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 font-semibold text-black text-sm"
          >
            ...
          </span>
        ) : (
          <button
            key={idx}
            onClick={() => onPageChange(Number(page))}
            className={`w-8 h-8 rounded-full text-sm font-semibold flex items-center justify-center
              ${
                Number(page) === currentPage
                  ? "bg-gradient-to-br from-cyan-400 to-blue-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="text-lg shadow-none"
      >
        »
      </button>
    </div>
  );
}

function generatePageNumbers(currentPage: number, totalPages: number): (number | "...")[] {
  const range: (number | "...")[] = [];

  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) range.push(i);
  } else {
    if (currentPage <= 3) {
      range.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      range.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      range.push(1, "...", currentPage, "...", totalPages);
    }
  }

  return range;
}
