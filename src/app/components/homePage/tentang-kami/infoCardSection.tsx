// components/section/CardGrid.tsx
import { Container } from "@/app/components/Container";
import { CardItem } from "@/app/components/homePage/tentang-kami/cardInfo";

export function CardGrid() {
  const data = [
    {
      title: "Sejarah",
      text: "Program Magang Vokasi SMK (MAVOKA) lahir dari kebutuhan akan sistem pemagangan yang....",
      variant: "blue",
      anchor: "sejarah",
    },
    {
      title: "VISI & MISI",
      text: "Menjadi platform pemagangan vokasi terintegrasi bagi siswa SMK di Indonesia untuk...",
      variant: "white",
      anchor: "visimisi",
    }
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
