"use client";

import { useState } from "react";
import AccordionSub from "./AccordionSub";
import StepDisplay from "./StepDisplay";
import { GuideData } from "@/types/panduan";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

interface Props {
  data: GuideData[];
  sectionTitle: string;
}

export default function AccordionUtama({ data, sectionTitle }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeStepId, setActiveStepId] = useState<string | null>(null);
  const [stepsList, setStepsList] = useState<any[]>([]);

  const toggleAccordion = (index: number, steps: any[]) => {
    setOpenIndex((prev) => {
      const next = prev === index ? null : index;
      if (next === null) {
        setActiveStepId(null); 
        setStepsList([]); 
      } else {
        setStepsList(steps); 
      }
      return next;
    });
  };

  const isStepOpen = !!activeStepId;

  return (
    <section className="w-full pb-10">
      <div className="max-w-content mx-auto px-5 tablet:px-10 desktop:px-[144px]">
        <h2 className="text-center text-blue-700 mb-6">{sectionTitle}</h2>

        <div
          className={[
            !isStepOpen
              ? "desktop:max-w-[570px] desktop:mx-auto"
              : "desktop:grid desktop:grid-cols-12 desktop:gap-1 desktop:items-start",
            "transition-[margin,width,padding] duration-300 ease-out",
          ].join(" ")}
        >
          {/* KIRI: AccordionUtama + Sub */}
          <div
            className={[
              isStepOpen ? "desktop:col-span-7 desktop:pr-3" : "desktop:pr-0",
              "w-full desktop:max-w-[570px] space-y-4",
              "transition-[margin,width,padding] duration-300",
            ].join(" ")}
          >
            {data.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-[5px] overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(i, item.steps)}
                    className={`
    flex items-center justify-between w-full px-4 py-3 min-h-[44px] text-left text-sm font-semibold
    ${isOpen ? "bg-[#E5E7EB]" : "bg-white"}
  `}
                  >
                    <span className="flex-1 mobile:whitespace-normal tablet:whitespace-normal desktop:truncate">
                      {item.title}
                    </span>
                    {isOpen ? (
                      <HiChevronUp className="w-5 h-5 text-gray-600 ml-3 shrink-0 self-start" />
                    ) : (
                      <HiChevronDown className="w-5 h-5 text-gray-600 ml-3 shrink-0 self-start" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="bg-[#E5E7EB] p-3 rounded-b-[5px]">
                      <AccordionSub
                        steps={item.steps}
                        activeStepId={activeStepId}
                        onSelectStep={(id) => setActiveStepId(id)} // menerima null juga
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {isStepOpen && (
            <aside className="hidden desktop:block desktop:col-span-5">
              <StepDisplay activeId={activeStepId} stepList={stepsList} />
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
