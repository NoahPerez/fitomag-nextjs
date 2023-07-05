import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const TestimonialsCard = () => {
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
        <div className="testimonials-area-without-color pt-100 pb-75">
          <div className="container">
            <div className="section-title">
              <span>{testimonials.data.attributes.subTitle}</span>
              <h2>{testimonials.data.attributes.title}</h2>
            </div>

            <div className="row justify-content-center">
              {testimonials.data.attributes.testimonialItems.map((item) => (
                <div className="col-lg-4 col-md-6" key={item.id}>
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
                </div>
              ))}
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

export default TestimonialsCard;
