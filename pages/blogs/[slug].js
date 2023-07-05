import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import Footer from "@/components/Layout/Footer/Footer";
import baseApiUrl from "@/utils/baseApiUrl";

const BlogDetails = ({ blogs: { data } }) => {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title={data[0].attributes.title} homeText="Home" homeUrl="/" />

      <BlogDetailsContent {...data[0]} />

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  try {
    const res = await fetch(`${baseApiUrl}/api/blogs`);
    const { data } = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("Invalid data format");
    }

    const paths = data.map((blog) => ({
      params: { slug: blog.attributes.slug },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error("Error fetching blog paths:", error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `${baseApiUrl}/api/blogs?filters[slug][$eq]=${params.slug}&populate=*`
    );
    const blogs = await res.json();

    return {
      props: {
        blogs,
      },
    };
  } catch (error) {
    console.error("Error fetching blog details:", error);
    return { props: { blogs: null } };
  }
}

export default BlogDetails;
