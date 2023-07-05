import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import Footer from "@/components/Layout/Footer/Footer";
import baseApiUrl from "@/utils/baseApiUrl";

const BlogDetails = ({ blog }) => {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title={blog.attributes.title} homeText="Home" homeUrl="/" />

      <BlogDetailsContent {...blog} />

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
    const { data } = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Invalid blog data format");
    }

    const blog = data[0];

    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    console.error("Error fetching blog details:", error);
    return { props: { blog: null } };
  }
}

export default BlogDetails;
