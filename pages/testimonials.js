import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import TestimonialsCard from "@/components/Testimonials/TestimonialsCard";
import Cta from "@/components/Common/Cta";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/Layout/Footer/Footer";

export default function Testimonials() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Testimonials" homeText="Home" homeUrl="/" />

      <TestimonialsCard />

      <div className="pb-100">
        <Cta />
      </div>

      <Partner />
      
      <Footer />
    </>
  );
}
