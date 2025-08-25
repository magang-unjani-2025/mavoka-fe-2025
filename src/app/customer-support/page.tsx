"use client";
import ContactInfoCard from "@/app/components/customer-support/ContactInfoCard";
import GoogleMapEmbed from "@/app/components/customer-support/GoogleMapEmbed";
import FeedbackForm from "@/app/components/customer-support/FeedbackForm";
import HeaderHome from "@/app/components/homePage/headerHomepage";
import Footer from "@/app/components/homePage/footer";
export default function CustomerSupportPage() {
  return (
    <>
      <HeaderHome />

      <section className="text-center py-5 ">
        <h1 className=" text-[#0F67B1]">
          Dukungan Pengguna
        </h1>
        <p className="mt-2 text-[#717171] font-medium">
          Ada pertanyaan atau komentar? Tulis pesan saja!
        </p>
      </section>

      <div className="px-6 lg:px-20 py-10">
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <ContactInfoCard />
          <GoogleMapEmbed />
        </div>

        <FeedbackForm />
      </div>
      <Footer />
    </>
  );
}
