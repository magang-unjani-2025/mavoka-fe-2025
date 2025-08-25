import HeaderHome from "@/app/components/homePage/headerHomepage";
import Footer from "@/app/components/homePage/footer";
// SESUAI permintaanmu, pakai komponen hero yang ini:
import { HeroFaq } from "@/app/components/homePage/faq/faqHero";
import { Container } from "@/app/components/Container";

export default function PanduanPerusahaanPage() {
  return (
    <>
      <HeaderHome />

      {/* Hero (pakai komponenmu persis dengan pemanggilan yang diminta) */}
      <HeroFaq
        title="FAQ"
        imageSrc="/img/GAMBAR-PERUSAHAAN.png"
      />

      <Footer />
    </>
  );
}
