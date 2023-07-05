import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import BlogPost3Column from "@/components/Blog/BlogPost3Column";
import Footer from "@/components/Layout/Footer/Footer";

export default function Blog() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Blog" homeText="Home" homeUrl="/" />

      <BlogPost3Column />

      <Footer />
    </>
  );
}
