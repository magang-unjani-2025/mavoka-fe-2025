"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { HiUser } from "react-icons/hi";
import { Container } from "@/app/components/Container"; // ✅ pakai Container

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setBreakpoint("mobile");
      else if (width < 1024) setBreakpoint("tablet");
      else setBreakpoint("desktop");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}

export default function TrainingCarousel() {
  const trainingCenters = [
    { logo: "", name: "Vayond"},
    { logo: "", name: "Indobot Academy" },
    { logo: "", name: "Koding Next" },
    { logo: "", name: "Adirim" },
    { logo: "", name: "Gamelab Indonesia" },
    { logo: "", name: "Genius Learning" },
    { logo: "", name: "Rumah Mesin" },
    { logo: "", name: "BDM School" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const breakpoint = useBreakpoint();

  const getVisibleLogos = () => {
    let range = 4; //dekstop
    if (breakpoint === "tablet") range = 2;
    if (breakpoint === "mobile") range = 1;

    const visible = [];
    for (let i = -range; i <= range; i++) {
      const index =
        (currentIndex + i + trainingCenters.length) % trainingCenters.length;
      visible.push({
        ...trainingCenters[index],
        isCenter: i === 0,
      });
    }
    return visible;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trainingCenters.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50)
      setCurrentIndex((prev) => (prev + 1) % trainingCenters.length);
    else if (distance < -50)
      setCurrentIndex(
        (prev) => (prev - 1 + trainingCenters.length) % trainingCenters.length
      );

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-8">
      <Container className="text-center">
        <h2 className="text-xl font-semibold mb-2">Lembaga Pelatihan</h2>

        <div className="flex justify-center my-3">
          <svg
            width="59"
            height="9"
            viewBox="0 0 59 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.44043"
              width="58"
              height="9"
              rx="4.5"
              fill="url(#paint0_linear_1456_3879)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1456_3879"
                x1="-21.5568"
                y1="-5.6056"
                x2="-21.1726"
                y2="7.15909"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B2EBF2" />
                <stop offset="1" stopColor="#D1C4E9" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <p className="text-sm text-gray-600 mb-8">
          MAVOKA bekerja sama dengan berbagai lembaga pelatihan
        </p>

        <div
          className="flex gap-8 justify-center overflow-visible select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            padding: "20px 0",
            minHeight: "140px",
          }}
        >
          {getVisibleLogos().map((center, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center transition-transform duration-500 ${
                center.isCenter ? "scale-125" : "scale-100"
              }`}
            >
              <div
                className="rounded-full border-2 border-blue-400 flex items-center justify-center bg-white"
                style={{ width: "90px", height: "90px" }}
              >
                {center.logo ? (
                  <Image
                    src={center.logo}
                    alt={center.name}
                    width={60}
                    height={60}
                  />
                ) : (
                  <HiUser className="w-12 h-12 text-black" />
                )}
              </div>
              {center.isCenter && (
                <p className="mt-2 text-sm font-medium">{center.name}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
