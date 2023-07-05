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
  const res = await fetch(`${baseApiUrl}/api/blogs`);
  const { data } = await res.json();
  // console.log(data);
  const paths = data.map((blogs) => ({
    params: { slug: blogs.attributes.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/blogs?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const blogs = await res.json();
  // By returning { props: { blogs } }, the Blog component
  // will receive `blogs` as a prop at build time
  return {
    props: {
        blogs,
    },
  };
}

export default BlogDetails;