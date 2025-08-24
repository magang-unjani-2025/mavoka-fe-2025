"use client";
import PrivacyPolicy from "@/app/components/privacy-policy/PrivacyPolicy";
import HeaderHome from "@/app/components/homePage/headerHomepage";
import Footer from "@/app/components/homePage/footer";
export default function CustomerSupportPage() {
  return (
    <>
      <HeaderHome />
          <PrivacyPolicy />
      <Footer />
    </>
  );
}
