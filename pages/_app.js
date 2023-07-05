import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/remixicon.css";
import "../styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
// Navbar CSS
import "../styles/navbar.css";
// Footer CSS
import "../styles/footer.css";
// Globals CSS
import "../styles/globals.css";
// Responsive CSS
import "../styles/responsive.css";

import Head from "next/head";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import Preloader from "@/components/Layout/Preloader";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);

  // Preloader
  const [loader, setLoader] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoader(false), 2000);
  }, [])

  return (
    <>
      <Head>
        <title>Teza - Creative Agency React Next.js Template</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />

      {loader ? <Preloader /> : null}

      <ScrollToTop />
    </>
  );
}

export default MyApp;