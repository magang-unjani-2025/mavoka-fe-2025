"use client";
import React from "react";

type Props = {
  page: number;
  totalPages: number;
  onPageChange: (p: number) => void;

  perPage: number;
  onPerPageChange: (n: number) => void;
  perPageOptions?: number[];
};

export default function TablePager({
  page,
  totalPages,
  onPageChange,
  perPage,
  onPerPageChange,
  perPageOptions = [5, 10, 20, 50],
}: Props) {
  // windowed pages: 1 ... p-1 p p+1 ... last
  const pages: (number | "...")[] = [];
  const win = 1;
  const start = Math.max(2, page - win);
  const end = Math.min(totalPages - 1, page + win);

  if (totalPages >= 1) pages.push(1);
  if (start > 2) pages.push("...");
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < totalPages - 1) pages.push("...");
  if (totalPages > 1) pages.push(totalPages);

  return (
    <div className="mt-4 flex items-center justify-end gap-4">
      {/* Rows per page (compact) */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-gray-600">Rows per page:</span>
        <select
          className="h-9 rounded-md border border-gray-300 px-3 outline-none"
          value={perPage}
          onChange={(e) => onPerPageChange(Number(e.target.value))}
        >
          {perPageOptions.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      {/* Pagination (muncul hanya jika >1 halaman) */}
      {totalPages > 1 && (
        <div className="flex items-center gap-2">
          <button
            className="rounded-md border px-3 py-2 text-sm disabled:opacity-50"
            disabled={page === 1}
            onClick={() => onPageChange(Math.max(1, page - 1))}
            aria-label="Sebelumnya"
          >
            ‹
          </button>

          {pages.map((p, i) =>
            p === "..." ? (
              <span key={`e${i}`} className="px-2 text-gray-400">
                …
              </span>
            ) : (
              <button
                key={p}
                className={`rounded-md px-3 py-2 text-sm ${
                  p === page ? "bg-blue-600 text-white" : "border"
                }`}
                onClick={() => onPageChange(p)}
              >
                {p}
              </button>
            )
          )}

          <button
            className="rounded-md border px-3 py-2 text-sm disabled:opacity-50"
            disabled={page === totalPages}
            onClick={() => onPageChange(Math.min(totalPages, page + 1))}
            aria-label="Berikutnya"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
