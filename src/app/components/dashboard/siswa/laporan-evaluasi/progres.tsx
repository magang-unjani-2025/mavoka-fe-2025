"use client";

export default function ProgressDots({ filled, total }: { filled: number; total: number }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mt-[-3px]">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={[
            "h-1.5 rounded-full basis-0 grow",
            "max-w-[52px] sm:max-w-[64px] md:max-w-[84px] lg:max-w-[100px]",
            i < filled ? "bg-[#0F67B1]" : "bg-[#D9D9D9]",
          ].join(" ")}
        />
      ))}
    </div>
  );
}
