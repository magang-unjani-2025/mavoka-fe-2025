"use client";
import Image from "next/image";
import { HiUser } from "react-icons/hi";

export default function SmkLogoMarquee() {
  const smkLogos = [
    { logo: "", name: "SMK 1" },
    { logo: "", name: "SMK 2" },
    { logo: "", name: "SMK 3" },
    { logo: "", name: "SMK 4" },
    { logo: "", name: "SMK 5" },
    { logo: "", name: "SMK 6" },
  ];

  // Gandakan array minimal 2x untuk efek looping
  const logos = [...smkLogos, ...smkLogos, ...smkLogos];

  return (
    <section className="py-8">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">
        SMK NEGERI & SWASTA
      </h2>

      <div className="w-full bg-blue-100 py-8">
        <div className="overflow-hidden w-full">
          <div className="flex gap-8 md:gap-12 animate-marquee hover:[animation-play-state:paused]">
            {logos.map((item, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: 80, height: 80 }}
              >
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-contain w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  />
                ) : (
                  <HiUser className="text-black w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
