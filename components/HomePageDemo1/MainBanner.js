import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const MainBanner = () => {
  const [banner, setBanner] = React.useState();
  React.useEffect(() => {
    const getBanner = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/home-banner1?populate=slideImage.img`
      );
      setBanner(response.data);
      // console.log(response.data);
    };
    getBanner();
  }, []);
  return (
    <>
      {banner && (
        <div className="main-banner-area">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-lg-5 col-md-12"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="main-banner-content">
                  <span>{banner.data.attributes.subTitle}</span>
                  <h1>{banner.data.attributes.title}</h1>
                  <p>{banner.data.attributes.shortText}</p>
                  <div className="banner-btn">
                    <Link href={banner.data.attributes.btnLink}>
                      <a className="default-btn">
                        {banner.data.attributes.btnText}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-7 col-md-12"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="mySwiper main-banner-image-slides"
                >
                  {banner.data.attributes.slideImage.map((slideImg) => (
                    <SwiperSlide key={slideImg.id}>
                      <div className="slides-image-item">
                        <img
                          src={slideImg.img.data.attributes.url}
                          alt={slideImg.img.data.attributes.alternativeText}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="main-banner-shape-1">
            <img src="/images/main-banner/shape-1.png" alt="Shape 1" />
          </div>
          <div className="main-banner-shape-2">
            <img src="/images/main-banner/shape-2.png" alt="Shape 2" />
          </div>
          <div className="main-banner-bg-text">
            {banner.data.attributes.bannerBgText}
          </div>
        </div>
      )}
    </>
  );
};

export default MainBanner;
