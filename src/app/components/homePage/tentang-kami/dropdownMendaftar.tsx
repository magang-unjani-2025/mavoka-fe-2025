import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  content?: React.ReactNode;
  className?: string; // ✅ Tambahkan ini
}

export default function AccordionItem({
  title,
  content,
  className = "",
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm transition-all duration-300 ${className}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-4 py-3 text-left font-medium text-gray-800 min-h-[72px] shadow-none"
      >
        {title}
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>

      {isOpen && (
        <div className="px-4 py-3 ">
          <div className="bg-[#D9D9D9] p-4 rounded-md">{content}</div>
        </div>
      )}
    </div>
  );
}
