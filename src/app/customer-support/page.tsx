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
