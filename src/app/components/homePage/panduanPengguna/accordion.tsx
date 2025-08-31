"use client";
import { useState } from "react";

export type AccordionItem = { id: string; title: string; content: React.ReactNode };

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIds, setOpenIds] = useState<string[]>([]);
  const toggle = (id: string) =>
    setOpenIds((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  return (
    <div className="space-y-3">
      {items.map((it) => {
        const open = openIds.includes(it.id);
        return (
          <div key={it.id} className={`rounded-lg border transition ${open ? "bg-white border-black/10 shadow-sm" : "bg-gray-100 border-transparent"}`}>
            <button onClick={() => toggle(it.id)} className="w-full flex items-center justify-between px-4 py-3 text-left">
              <span className="font-medium">{it.title}</span>
              <span className={`transition ${open ? "rotate-90" : ""}`}>›</span>
            </button>
            {open && <div className="px-4 pb-4">{it.content}</div>}
          </div>
        );
      })}
    </div>
  );
}
