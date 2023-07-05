import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const TestimonialStyle2 = () => {
  const [testimonials, setTestimonials] = React.useState();
  React.useEffect(() => {
    const getTestimonials = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/testimonial?populate=testimonialItems.image`
      );
      setTestimonials(response.data);
      // console.log(response.data);
    };
    getTestimonials();
  }, []);
  return (
    <>
      {testimonials && (
        <div className="testimonials-area ptb-100">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-4 col-md-12">
                <div className="testimonials-box-content">
                  <span>{testimonials.data.attributes.subTitle}</span>
                  <h3>{testimonials.data.attributes.title}</h3>
                  <p>
                    {testimonials.data.attributes.shortText}
                  </p>
                  <Link href="/testimonials">
                    <a className="default-btn">View More</a>
                  </Link>
                </div>
              </div>

              <div className="col-lg-8 col-md-12">
                <Swiper
                  pagination={{
                    clickable: true,
                  }}
                  spaceBetween={30}
                  breakpoints={{
                    640: {
                      slidesPerView: 1
                    },
                    768: {
                      slidesPerView: 2
                    }
                  }}
                  modules={[Pagination]}
                  className="mySwiper testimonials-slides-two"
                >
                  {testimonials.data.attributes.testimonialItems.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="single-testimonials-card">
                        <div className="box-content">
                          <div className="icon">
                            <i className="flaticon-straight-quotes"></i>
                          </div>
                          <p>
                            {item.feedbackText}
                          </p>
                        </div>
                        <div className="info">
                          <div className="d-flex align-items-center justify-content-start">
                            <img
                              src={item.image.data.attributes.url}
                              className="rounded-circle"
                              alt={item.image.data.attributes.alternativeText}
                            />
                            <div className="title">
                              <h3>{item.name}</h3>
                              <span>{item.designation}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="testimonials-shape-1">
            <img src="/images/testimonials/shape-1.png" alt="Teza" />
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialStyle2;
