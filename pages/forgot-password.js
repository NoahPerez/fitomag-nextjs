import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import ForgotPasswordForm from "@/components/authentication/ForgotPasswordForm";
import Footer from "@/components/Layout/Footer/Footer";

export default function ForgotPassword() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Forgot Password" homeText="Home" homeUrl="/" />

      <ForgotPasswordForm />

      <Footer />
    </>
  );
}
