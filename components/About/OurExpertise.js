import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const OurExpertise = () => {
  const [expertise, setExpertise] = React.useState();
  React.useEffect(() => {
    const getExpertise = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/our-expertise-style-3?populate=*`
      );
      setExpertise(response.data);
      // console.log(response.data);
    };
    getExpertise();
  }, []);
  return (
    <>
      {expertise && (
        <div className="why-choose-us-area ptb-100">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div
                  className="why-choose-us-content"
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <span>{expertise.data.attributes.subTitle}</span>
                  <h3>
                    {expertise.data.attributes.title}
                  </h3>
                  <p>
                    {expertise.data.attributes.shortDec}
                  </p>

                  <div className="row justify-content-center">
                    {expertise.data.attributes.item.map((expert) => (
                      <div className="col-lg-6 col-sm-6" key={expert.id}>
                        <div className="inner-box-content">
                          <div className="icon">
                            <i className={expert.icon}></i>
                          </div>
                          <h4>{expert.title}</h4>
                          <p>
                            {expert.shortText}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div
                  className="why-choose-us-image"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <img
                    src={expertise.data.attributes.image.data.attributes.url}
                    alt={
                      expertise.data.attributes.image.data.attributes
                        .alternativeText
                    }
                  />
            
                  <div className="why-choose-us-shape-1">
                    <img src="/images/why-choose-us/shape-1.png" alt="Teza" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurExpertise;
