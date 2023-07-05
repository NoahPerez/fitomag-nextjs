import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import RegisterForm from "@/components/authentication/RegisterForm";
import Footer from "@/components/Layout/Footer/Footer";

export default function Register() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Register" homeText="Home" homeUrl="/" />

      <RegisterForm />

      <Footer />
    </>
  );
}
