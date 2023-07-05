import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import ServicesCard from "@/components/Services/ServicesCard";
import TestimonialStyle2 from "@/components/Common/TestimonialStyle2";
import Cta from "@/components/Common/Cta";
import Footer from "@/components/Layout/Footer/Footer";

export default function Services() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Our Services" homeText="Home" homeUrl="/" />

      <ServicesCard />

      <TestimonialStyle2 />

      <div className="pt-100">
        <Cta />
      </div>

      <Footer />
    </>
  );
}
