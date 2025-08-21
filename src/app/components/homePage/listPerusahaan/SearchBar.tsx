"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}

export default function SearchBar({
  placeholder = "Cari Perusahaan...",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full max-w-2xl mx-auto bg-white border rounded-lg overflow-hidden shadow-sm"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-4 py-2 text-sm outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-[#0F67B1] text-white hover:bg-opacity-80 transition"
      >
        <IoSearch size={20} />
      </button>
    </form>
  );
}
