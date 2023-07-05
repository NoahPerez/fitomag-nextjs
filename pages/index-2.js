import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import MainBanner from "@/components/HomePageDemo2/MainBanner";
import AboutOurCompany from "@/components/HomePageDemo2/AboutOurCompany";
import FunFactStyle2 from "@/components/Common/FunFactStyle2";
import OurServices from "@/components/HomePageDemo2/OurServices";
import WhyChooseUsStyle2 from "@/components/Common/WhyChooseUsStyle2";
import Pricing from "@/components/PricingPlan/Pricing";
import CaseStudy from "@/components/Common/CaseStudy";
import OurExpertise from "@/components/HomePageDemo2/OurExpertise";
import TestimonialStyle2 from "@/components/Common/TestimonialStyle2";
import TeamMemberStyle2 from "@/components/Common/TeamMemberStyle2";
import LatestArticles from "@/components/Common/LatestArticles";
import Cta from "@/components/Common/Cta";
import Footer from "@/components/Layout/Footer/Footer";

export default function Index2() {
  return (
    <>
      <NavbarStyle2 />

      <MainBanner />

      <AboutOurCompany />

      <FunFactStyle2 />

      <OurServices />

      <WhyChooseUsStyle2 />

      <Pricing />

      <CaseStudy />

      <OurExpertise />

      <TestimonialStyle2 />

      <TeamMemberStyle2 />

      <div className="pb-100">
        <LatestArticles />
      </div>

      <Cta />

      <Footer />
    </>
  );
}
