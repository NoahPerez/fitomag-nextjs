import React from "react";
import Link from 'next/link';

const PageBanner = ({ title, homeText, homeUrl }) => {
  return (
    <>
      <div className="page-banner-area">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div
                className="page-banner-content"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <h2>{title}</h2>
                <ul>
                  <li>
                    <Link href={homeUrl}>
                      <a>{homeText}</a>
                    </Link>
                  </li>
                  <li>{title}</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div
                className="page-banner-image"
              >
                <img
                  src="/images/page-banner-image.png"
                  alt="Teza"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
