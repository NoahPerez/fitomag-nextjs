import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import FaqContent from "@/components/FaqContent/FaqContent";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/Layout/Footer/Footer";

export default function Faq() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Faq" homeText="Home" homeUrl="/" />

      <FaqContent />

      <Partner />

      <Footer />
    </>
  );
}
