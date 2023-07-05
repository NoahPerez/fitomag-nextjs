import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Layout/Footer/Footer";

export default function Contact() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Contact Us" homeText="Home" homeUrl="/" />

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
}
