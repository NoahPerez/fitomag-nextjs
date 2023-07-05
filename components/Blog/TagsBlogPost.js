import React from "react";
import Link from "next/link";
import BlogSidebar from './BlogSidebar';
 
const TagsBlogPost = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-card">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <a>
                          <img src="/images/blog/blog-4.jpg" alt="image" />
                        </a>
                      </Link>
                    </div>
                    <div className="blog-content with-padding">
                      <span>
                        By{" "}
                        <Link href="/author">
                          <a>Admin</a>
                        </Link>
                      </span>
                      <h3>
                        <Link href="/blog-details">
                          <a>
                            How Developers Are Taking The Guesswork Out Of
                            Animation
                          </a>
                        </Link>
                      </h3>
                      <ul className="entry-meta">
                        <li>
                          <i className="ri-calendar-line"></i> October 14, 2022
                        </li>
                        <li>
                          <i className="ri-price-tag-3-line"></i>{" "}
                          <Link href="/tags">
                            <a>Commercial</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-card">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <a>
                          <img src="/images/blog/blog-5.jpg" alt="image" />
                        </a>
                      </Link>
                    </div>
                    <div className="blog-content with-padding">
                      <span>
                        By{" "}
                        <Link href="/author">
                          <a>Admin</a>
                        </Link>
                      </span>
                      <h3>
                        <Link href="/blog-details">
                          <a>Tech Designer John Doe Latest Design Of 2022</a>
                        </Link>
                      </h3>
                      <ul className="entry-meta">
                        <li>
                          <i className="ri-calendar-line"></i> October 15, 2022
                        </li>
                        <li>
                          <i className="ri-price-tag-3-line"></i>{" "}
                          <Link href="/tags">
                            <a>Agency</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-card">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <a>
                          <img src="/images/blog/blog-6.jpg" alt="image" />
                        </a>
                      </Link>
                    </div>
                    <div className="blog-content with-padding">
                      <span>
                        By{" "}
                        <Link href="/author">
                          <a>Admin</a>
                        </Link>
                      </span>
                      <h3>
                        <Link href="/blog-details">
                          <a>
                            Listen To The Entire Library Of Design Better Books
                          </a>
                        </Link>
                      </h3>
                      <ul className="entry-meta">
                        <li>
                          <i className="ri-calendar-line"></i> October 16, 2022
                        </li>
                        <li>
                          <i className="ri-price-tag-3-line"></i>{" "}
                          <Link href="/tags">
                            <a>Business</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-card">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <a>
                          <img src="/images/blog/blog-7.jpg" alt="image" />
                        </a>
                      </Link>
                    </div>
                    <div className="blog-content with-padding">
                      <span>
                        By{" "}
                        <Link href="/author">
                          <a>Admin</a>
                        </Link>
                      </span>
                      <h3>
                        <Link href="/blog-details">
                          <a>15 Unheard Ways To Achieve Greater Walker</a>
                        </Link>
                      </h3>
                      <ul className="entry-meta">
                        <li>
                          <i className="ri-calendar-line"></i> October 16, 2022
                        </li>
                        <li>
                          <i className="ri-price-tag-3-line"></i>{" "}
                          <Link href="/tags">
                            <a>Consulting</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-card">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <a>
                          <img src="/images/blog/blog-8.jpg" alt="image" />
                        </a>
                      </Link>
                    </div>
                    <div className="blog-content with-padding">
                      <span>
                        By{" "}
                        <Link href="/author">
                          <a>Admin</a>
                        </Link>
                      </span>
                      <h3>
                        <Link href="/blog-details">
                          <a>Facts About Business That Will Help You Success</a>
                        </Link>
                      </h3>
                      <ul className="entry-meta">
                        <li>
                          <i className="ri-calendar-line"></i> October 16, 2022
                        </li>
                        <li>
                          <i className="ri-price-tag-3-line"></i>{" "}
                          <Link href="/tags">
                            <a>Design</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-card">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <a>
                          <img src="/images/blog/blog-9.jpg" alt="image" />
                        </a>
                      </Link>
                    </div>
                    <div className="blog-content with-padding">
                      <span>
                        By{" "}
                        <Link href="/author">
                          <a>Admin</a>
                        </Link>
                      </span>
                      <h3>
                        <Link href="/blog-details">
                          <a>An Incredibly Easy Method That Works For All</a>
                        </Link>
                      </h3>
                      <ul className="entry-meta">
                        <li>
                          <i className="ri-calendar-line"></i> October 16, 2022
                        </li>
                        <li>
                          <i className="ri-price-tag-3-line"></i>{" "}
                          <Link href="/tags">
                            <a>Marketing</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="ri-arrow-left-s-line"></i>
                </a>
                <span className="page-numbers current" aria-current="page">
                  1
                </span>
                <a href="#" className="page-numbers">
                  2
                </a>
                <a href="#" className="page-numbers">
                  3
                </a>
                <a href="#" className="next page-numbers">
                  <i className="ri-arrow-right-s-line"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TagsBlogPost;
