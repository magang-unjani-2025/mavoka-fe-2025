import Image from "next/image";
import { Step } from "@/types/panduan";

export default function StepDisplay({
  activeId,
  stepList,
}: {
  activeId: string | null;
  stepList: Step[];
}) {
  const step = stepList.find((s) => s.id === activeId);
  if (!step) return null;

  return (
    <div className="bg-[#E5E7EB] rounded-[10px] p-3 w-full space-y-3">
      {step.images.map((src, idx) => (
        <Image
          key={idx}
          src={src}
          alt={`${step.title} ${idx + 1}`}
          width={900}
          height={540}
          className="rounded-[6px] w-full h-auto object-contain"
        />
      ))}
    </div>
  );
}
