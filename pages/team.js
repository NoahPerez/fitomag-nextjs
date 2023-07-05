import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import TeamMember from "@/components/Team/TeamMember";
import Cta from "@/components/Common/Cta";
import Footer from "@/components/Layout/Footer/Footer";

export default function Team() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Our Team" homeText="Home" homeUrl="/" />

      <TeamMember />

      <Cta />

      <Footer />
    </>
  );
}
