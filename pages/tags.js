import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import TagsBlogPost from "@/components/Blog/TagsBlogPost";
import Footer from "@/components/Layout/Footer/Footer";

const Tags = () => {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Tags" homeText="Home" homeUrl="/" />

      <TagsBlogPost />

      <Footer />
    </>
  );
};

export default Tags;
