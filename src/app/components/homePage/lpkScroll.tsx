"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function TrainingCarousel() {
  const trainingCenters = [
    { logo: "/logos/vayond.png", name: "Vayond" },
    { logo: "/logos/indobot.png", name: "Indobot Academy" },
    { logo: "/logos/kodingnext.png", name: "Koding Next" },
    { logo: "/logos/adirim.png", name: "Adirim" },
    { logo: "/logos/gamelab.png", name: "Gamelab Indonesia" },
    { logo: "/logos/genius.png", name: "Genius Learning" },
    { logo: "/logos/rumahmesin.png", name: "Rumah Mesin" },
    { logo: "/logos/bdm.png", name: "BDM School" },
    // ... tambah logo lain
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Ambil 9 logo (4 kiri, 1 tengah, 4 kanan)
  const getVisibleLogos = () => {
    const visible = [];
    for (let i = -4; i <= 4; i++) {
      const index =
        (currentIndex + i + trainingCenters.length) % trainingCenters.length;
      visible.push({
        ...trainingCenters[index],
        isCenter: i === 0,
      });
    }
    return visible;
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trainingCenters.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      // geser kiri
      setCurrentIndex((prev) => (prev + 1) % trainingCenters.length);
    } else if (distance < -50) {
      // geser kanan
      setCurrentIndex(
        (prev) => (prev - 1 + trainingCenters.length) % trainingCenters.length
      );
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-10">
      <div className="max-w-[1154px] mx-auto px-6 text-center">
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
          className="flex gap-6 justify-center overflow-visible select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ padding: "20px 0", minHeight: "140px", transform: `translateX(-${currentIndex * 2}px)` }} 
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
                <Image
                  src={center.logo}
                  alt={center.name}
                  width={60}
                  height={60}
                />
              </div>

              {center.isCenter && (
                <p className="mt-2 text-sm font-medium">{center.name}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
