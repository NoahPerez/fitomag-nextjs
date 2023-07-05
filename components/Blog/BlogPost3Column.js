import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const BlogPost3Column = () => {
  const [blogs, setBlogs] = React.useState();
  React.useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get(`${baseApiUrl}/api/blogs?populate=*`);
      setBlogs(response.data);
      // console.log(response.data);
    };
    getBlogs();
  }, []);
  return (
    <>
      <div className="blog-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Read Our Latest Articles</span>
            <h2>Latest From Our Blog Post For Business Technology </h2>
          </div>

          {blogs && (
            <div className="row justify-content-center">
              {blogs.data.map((blog) => (
                <div className="col-lg-4 col-md-6" key={blog.id}>
                  <div className="single-blog-card">
                    <div className="blog-image">
                      <Link href={`/blogs/${blog.attributes.slug}`}>
                        <a>
                          <img
                            src={blog.attributes.image.data.attributes.url}
                            alt={
                              blog.attributes.image.data.attributes
                                .alternativeText
                            }
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="blog-content">
                      <span>
                        By{" "}
                        <Link href="#">
                          <a>{blog.attributes.author}</a>
                        </Link>
                      </span>
                      <h3>
                        <Link href={`/blogs/${blog.attributes.slug}`}>
                          <a>{blog.attributes.title}</a>
                        </Link>
                      </h3>
                      <ul className="entry-meta">
                        <li>
                          <i className="ri-calendar-line"></i>{" "}
                          {blog.attributes.date}
                        </li>
                        <li>
                          <i className="ri-price-tag-3-line"></i>{" "}
                          <Link href="#">
                            <a>{blog.attributes.category}</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPost3Column;
