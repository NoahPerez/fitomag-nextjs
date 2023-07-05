import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import Link from 'next/link';
import Footer from "@/components/Layout/Footer/Footer";

export default function Custom404() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="404 Error" homeText="Home" homeUrl="/" />

      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <img src="/images/error.png" alt="Teza" />
            <h3>Error 404 : Page Not Found</h3>
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <Link href="/">
              <a className="default-btn">Back to Homepage</a>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
