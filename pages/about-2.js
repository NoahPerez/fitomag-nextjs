import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import AboutOurCompany from "@/components/About2/AboutOurCompany";
import FunFactStyle1 from "@/components/Common/FunFactStyle1";
import Pricing from "@/components/PricingPlan/Pricing";
import TeamMemberStyle3 from "@/components/Common/TeamMemberStyle3";
import WhyChooseUsStyle1 from "@/components/Common/WhyChooseUsStyle1";
import TestimonialStyle1 from "@/components/Common/TestimonialStyle1";
import OurExpertise from "@/components/About2/OurExpertise";
import Faq from "@/components/Common/Faq";
import Footer from "@/components/Layout/Footer/Footer";

export default function About2() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="About Two" homeText="Home" homeUrl="/" />

      <AboutOurCompany />

      <FunFactStyle1 />

      <Pricing />

      <TeamMemberStyle3 />

      <div className="pt-100">
        <WhyChooseUsStyle1 />
      </div>

      <TestimonialStyle1 />

      <OurExpertise />

      <Faq />

      <Footer />
    </>
  );
}
