// components/section/CardGrid.tsx
import { Container } from "@/app/components/Container";
import { CardItem } from "@/app/components/homePage/tentang-kami/cardInfo";

export function CardGrid() {
  const data = [
    {
      title: "VISI",
      text: "Menjadi platform pemagangan vokasi terintegrasi bagi siswa SMK di Indonesia untuk mencetak...",
      variant: "blue",
      anchor: "visimisi",
    },
    {
      title: "MISI",
      text: "1. Menghubungkan siswa SMK dengan perusahaan dan industri melalui sistem pemagangan....",
      variant: "white",
      anchor: "visimisi",
    },
    {
      title: "Cara Mendaftar",
      text: "1. Masuk ke landing page klik daftar\n2. Isi form pendaftaran lalu klik daftar...",
      variant: "white",
      anchor: "caradaftar",
    },
    {
      title: "FAQ",
      text: "1. Lupa kata sandi bagaimana cara meresetnya?\n2. Apakah saya dapat melamar lebih dari satu...",
      variant: "blue",
      anchor: "faq",
    },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
  <section className="py-12">
    <Container>
  <div className="grid grid-cols-1 tablet:grid-cols-2 gap-y-6 gap-x-[1px] justify-items-center">
    {data.map((card) => (
      <CardItem
        key={card.title}
        title={card.title}
        text={card.text}
        variant={card.variant as "blue" | "white"}
        onClick={() => scrollTo(card.anchor)}
      />
    ))}
  </div>
</Container>
  </section>
);

}
