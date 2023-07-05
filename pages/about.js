import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import AboutOurCompany from "@/components/About/AboutOurCompany";
import FunFactStyle3 from "@/components/Common/FunFactStyle3";
import OurExpertise from "@/components/About/OurExpertise";
import WorkingProcess from "@/components/About/WorkingProcess";
import WhyChooseUsStyle2 from "@/components/Common/WhyChooseUsStyle2";
import TestimonialStyle2 from "@/components/Common/TestimonialStyle2";
import TeamMemberStyle2 from "@/components/Common/TeamMemberStyle2";
import Faq from "@/components/Common/Faq";
import Footer from "@/components/Layout/Footer/Footer";

export default function About() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="About One" homeText="Home" homeUrl="/" />

      <AboutOurCompany />

      <FunFactStyle3 />

      <OurExpertise />

      <WorkingProcess />

      <WhyChooseUsStyle2 />

      <TestimonialStyle2 />

      <TeamMemberStyle2 />

      <Faq />

      <Footer />
    </>
  );
}
