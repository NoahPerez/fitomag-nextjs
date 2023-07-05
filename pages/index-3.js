import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import MainBanner from "@/components/HomePageDemo3/MainBanner";
import OurExpertise from "@/components/HomePageDemo3/OurExpertise";
import FunFactStyle3 from "@/components/Common/FunFactStyle3";
import OurServices from "@/components/HomePageDemo3/OurServices";
import WhyChooseUsStyle2 from "@/components/Common/WhyChooseUsStyle2";
import Pricing from "@/components/PricingPlan/Pricing";
import CaseStudy from "@/components/Common/CaseStudy";
import AboutOurCompany from "@/components/HomePageDemo3/AboutOurCompany";
import TestimonialStyle2 from "@/components/Common/TestimonialStyle2";
import TeamMemberStyle2 from "@/components/Common/TeamMemberStyle2";
import Faq from "@/components/Common/Faq";
import Cta from "@/components/Common/Cta";
import Footer from "@/components/Layout/Footer/Footer";

export default function Index3() {
  return (
    <>
      <NavbarStyle2 />

      <MainBanner />

      <OurExpertise />

      <FunFactStyle3 />

      <OurServices />

      <WhyChooseUsStyle2 />

      <Pricing />

      <CaseStudy />

      <AboutOurCompany />

      <TestimonialStyle2 />

      <TeamMemberStyle2 />

      <Faq />

      <div className="pt-100">
        <Cta />
      </div>

      <Footer />
    </>
  );
}
