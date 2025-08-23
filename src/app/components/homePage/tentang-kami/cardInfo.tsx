// components/card/CardItem.tsx
import { Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils"; // atau pakai clsx

type CardItemProps = {
  title: string;
  text: string;
  variant?: "blue" | "white";
  onClick?: () => void;
};

export function CardItem({
  title,
  text,
  variant = "blue",
  onClick,
}: CardItemProps) {
  const isBlue = variant === "blue";

  return (
    <div
      className={cn(
        "shadow-md flex flex-col justify-between text-center",
        "max-w-[272px] h-[234px] relative overflow-hidden",
        isBlue ? "bg-[#0061AF] text-white" : "bg-white text-[#003E75] border"
      )}
    >
      {/* garis atas */}
      <div
        className={cn(
          "w-[217px] h-[6px] mx-auto",
          isBlue ? "bg-white" : "bg-[#0061AF]"
        )}
      />

      {/* isi */}
      <div className="flex flex-col items-center justify-center px-4 pt-4 pb-6 gap-2">
        <Lightbulb className="text-2xl" />
        <h3 className="font-bold text-base">{title}</h3>
        <p className="text-sm leading-snug">{text}</p>

        <button
          onClick={onClick}
          className={cn(
            "mt-3 px-4 py-1 text-sm font-medium rounded-full transition",
            isBlue
              ? "bg-white text-[#0061AF] hover:bg-gray-100"
              : "bg-[#0061AF] text-white hover:bg-[#005699]"
          )}
        >
          Lihat selengkapnya
        </button>
      </div>

      {/* garis bawah */}
      <div
        className={cn(
          "w-[217px] h-[6px] mx-auto",
          isBlue ? "bg-white" : "bg-[#0061AF]"
        )}
      />
    </div>
  );
}
