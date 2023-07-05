import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <>
      <aside className="widget-area">
        <div className="widget widget_search">
          <form className="search-form">
            <input
              type="search"
              className="search-field"
              placeholder="Search..."
            />
            <button type="submit">
              <i className="ri-search-line"></i>
            </button>
          </form>
        </div>

        <div className="widget widget_posts_thumb">
          <h3 className="widget-title">Popular Posts</h3>

          <article className="item">
            <Link href="/blog-details">
              <a className="thumb">
                <span className="fullimage cover bg1" role="img"></span>
              </a>
            </Link>
            <div className="info">
              <h4 className="title usmall">
                <Link href="/blog-details">
                  <a>
                    Contactless Payments’ Time Has Come
                  </a>
                </Link>
              </h4>
              <span>October 14, 2022</span>
            </div>
          </article>

          <article className="item">
            <Link href="/blog-details">
              <a className="thumb">
                <span className="fullimage cover bg2" role="img"></span>
              </a>
            </Link>
            <div className="info">
              <h4 className="title usmall">
                <Link href="/blog-details">
                  <a>
                    An Incredibly Easy Method That Works For All
                  </a>
                </Link>
              </h4>
              <span>October 14, 2022</span>
            </div>
          </article>

          <article className="item">
            <Link href="/blog-details">
              <a className="thumb">
                <span className="fullimage cover bg3" role="img"></span>
              </a>
            </Link>
            <div className="info">
              <h4 className="title usmall">
                <Link href="/blog-details">
                  <a>
                    Ways To Immediately Start Selling Products
                  </a>
                </Link>
              </h4>
              <span>October 14, 2022</span>
            </div>
          </article>
        </div>

        <div className="widget widget_explore_topics">
          <h3 className="widget-title">Explore Topics</h3>

          <ul className="topics-list">
            <li>
              <div className="d-flex justify-content-between align-items-center">
                <Link href="/categories">
                  <a>
                    <i className="ri-arrow-right-s-line"></i> Agency
                  </a>
                </Link>
                <span>
                  <a href="#">(08)</a>
                </span>
              </div>
            </li>
            <li>
              <div className="d-flex justify-content-between align-items-center">
                <Link href="/categories">
                  <a>
                    <i className="ri-arrow-right-s-line"></i> Business
                  </a>
                </Link>
                <span>
                  <a href="#">(12)</a>
                </span>
              </div>
            </li>
            <li>
              <div className="d-flex justify-content-between align-items-center">
                <Link href="/categories">
                  <a>
                    <i className="ri-arrow-right-s-line"></i> Consulting
                  </a>
                </Link>
                <span>
                  <a href="#">(03)</a>
                </span>
              </div>
            </li>
            <li>
              <div className="d-flex justify-content-between align-items-center">
                <Link href="/categories">
                  <a>
                    <i className="ri-arrow-right-s-line"></i> Creative Agency
                  </a>
                </Link>
                <span>
                  <a href="#">(26)</a>
                </span>
              </div>
            </li>
            <li>
              <div className="d-flex justify-content-between align-items-center">
                <Link href="/categories">
                  <a>
                    <i className="ri-arrow-right-s-line"></i> UI/UX Design
                  </a>
                </Link>
                <span>
                  <a href="#">(02)</a>
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div className="widget widget_tag">
          <h3 className="widget-title">Tag Clouds</h3>

          <ul className="tag-list">
            <li>
              <Link href="/tags">
                <a>Commercial</a>
              </Link>
            </li>
            <li>
              <Link href="/tags">
                <a>Creative Agency</a>
              </Link>
            </li>
            <li>
              <Link href="/tags">
                <a>Marketing</a>
              </Link>
            </li>
            <li>
              <Link href="/tags">
                <a>Business</a>
              </Link>
            </li>
            <li>
              <Link href="/tags">
                <a>Design</a>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default BlogSidebar;
