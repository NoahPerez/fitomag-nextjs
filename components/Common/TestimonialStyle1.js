import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const TestimonialStyle1 = () => {
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
            <div className="section-title">
              <span>{testimonials.data.attributes.subTitle}</span>
              <h2>{testimonials.data.attributes.title}</h2>
            </div>

            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper testimonials-slides"
            >
              {testimonials.data.attributes.testimonialItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="single-testimonials-box">
                    <div className="icon">
                      <i className="flaticon-straight-quotes"></i>
                    </div>
                    <p>{item.feedbackText}</p>
                    <div className="info">
                      <div className="d-flex align-items-center justify-content-center">
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
      )}
    </>
  );
};

export default TestimonialStyle1;
