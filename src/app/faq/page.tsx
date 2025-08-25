import HeaderHome from "../components/homePage/headerHomepage";
import { HeroFaq } from "@/app/components/homePage/faq/faqHero";
import { UserGuidesGrid } from "@/app/components/homePage/panduanPengguna/userGuideGrid";
import { FAQ } from "@/app/components/homePage/tentang-kami/faq";
import Footer from "@/app/components/homePage/footer";

export default function FAQPage() {
  return (
    <>
      <HeaderHome />
       <HeroFaq
        title="FAQ"
        imageSrc="/img/GAMBAR-PERUSAHAAN.png" // pastikan ada gambar ini di public/images
      />
      <UserGuidesGrid />

      <FAQ />
      <Footer />
    </>
  );
}
