import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import Cta from "@/components/Common/Cta";
import Footer from "@/components/Layout/Footer/Footer";
import baseApiUrl from "@/utils/baseApiUrl";

const ServicesDetails = ({ service }) => {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title={service.attributes.title} homeText="Home" homeUrl="/" />

      <ServiceDetailsContent {...service} />

      <Cta />

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  try {
    const res = await fetch(`${baseApiUrl}/api/services`);
    const { data } = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("Invalid data format");
    }

    const paths = data.map((service) => ({
      params: { slug: service.attributes.slug },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching service paths:", error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `${baseApiUrl}/api/services?filters[slug][$eq]=${params.slug}&populate=*`
    );
    const { data } = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Invalid service data format");
    }

    const service = data[0];

    return {
      props: {
        service,
      },
    };
  } catch (error) {
    console.error("Error fetching service details:", error);
    return { props: { service: null } };
  }
}

export default ServicesDetails;
