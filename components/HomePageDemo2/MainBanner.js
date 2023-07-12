import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const MainBanner = () => {
  const [banner, setBanner] = React.useState();
  React.useEffect(() => {
    const getBanner = async () => {
      const response = await axios.get(
        `${baseApiUrl}home-banner-2?populate=*`
      );
      setBanner(response.data);
      // console.log(response.data);
    };
    getBanner();
  }, []);
  return (
    <>
      {banner && (
        <div
          className="main-hero-area"
          style={{ backgroundImage: `url(${banner.data.attributes.bannerBgImg.data.attributes.url})` }}
        >
          <div className="container-fluid">
            <div className="main-hero-content">
              <span
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                {banner.data.attributes.subTitle}
              </span>
              <h1
                data-aos="fade-right"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                {banner.data.attributes.title}
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                {banner.data.attributes.shortText}
              </p>

              <ul
                className="hero-btn"
                data-aos="fade-right"
                data-aos-delay="90"
                data-aos-duration="900"
                data-aos-once="true"
              >
                <li>
                  <Link href={banner.data.attributes.btnOneLink}>
                    <a className="default-btn">
                      {banner.data.attributes.btnOneText}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={banner.data.attributes.btnTwoLink}>
                    <a className="optional-btn">
                      {banner.data.attributes.btnTwoText}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="main-hero-shape-1">
            <img src="/images/main-hero/shape-1.png" alt="Teza" />
          </div>
          <div className="main-hero-shape-2">
            <img src="/images/main-hero/shape-2.png" alt="Teza" />
          </div>
        </div>
      )}
    </>
  );
};

export default MainBanner;
