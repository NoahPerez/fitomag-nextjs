import React from "react";
import NavbarStyle1 from "@/components/Layout/Navbar/NavbarStyle1";
import MainBanner from "@/components/HomePageDemo1/MainBanner";
import TopServices from "@/components/HomePageDemo1/TopServices";
import AboutOurCompany from "@/components/HomePageDemo1/AboutOurCompany";
import FunFactStyle1 from "@/components/Common/FunFactStyle1";
import OurServices from "@/components/HomePageDemo1/OurServices";
import CaseStudy from "@/components/Common/CaseStudy";
import WhyChooseUsStyle1 from "@/components/Common/WhyChooseUsStyle1";
import TestimonialStyle1 from "@/components/Common/TestimonialStyle1";
import OurExpertise from "@/components/HomePageDemo1/OurExpertise";
import Pricing from '@/components/PricingPlan/Pricing';
import TeamMemberStyle1 from "@/components/Common/TeamMemberStyle1";
import LatestArticles from "@/components/Common/LatestArticles";
import Cta from "@/components/Common/Cta";
import Footer from "@/components/Layout/Footer/Footer";

export default function Index() {
  return (
    <>
      <NavbarStyle1 />

      <MainBanner />

      <TopServices />

      <AboutOurCompany />

      <FunFactStyle1 />

      <OurServices />
 
      <CaseStudy />

      <WhyChooseUsStyle1 />

      <TestimonialStyle1 />

      <OurExpertise />

      <Pricing />

      <TeamMemberStyle1 />

      <div className="ptb-100">
        <LatestArticles />
      </div>
 
      <Cta />
 
      <Footer />
    </>
  );
}
