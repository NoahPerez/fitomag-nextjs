import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const OurExpertise = () => {
  const [expertise, setExpertise] = React.useState();
  React.useEffect(() => {
    const getExpertise = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/our-expertise-style-2?populate=*`
      );
      setExpertise(response.data);
      // console.log(response.data);
    };
    getExpertise();
  }, []);
  return (
    <>
      {expertise && (
        <div className="expertise-area-with-white-color ptb-100">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div
                  className="expertise-image-wrap"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <img 
                    src={expertise.data.attributes.image.data.attributes.url} 
                    alt={expertise.data.attributes.image.data.attributes.alternativeText} 
                  />
                  <div className="expertise-shape-2">
                    <img
                      src="/images/expertise/shape-2.png"
                      alt="image"
                      data-aos="fade-left"
                      data-aos-delay="50"
                      data-aos-duration="500"
                      data-aos-once="true"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div
                  className="expertise-content black-color"
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
                    {expertise.data.attributes.shortText}
                  </p>
                  <div className="row justify-content-center">
                    {expertise.data.attributes.expertiseItem.map((item) => (
                      <div className="col-lg-6 col-sm-6" key={item.id}>
                        <div className="expertise-inner-box">
                          <div className="icon">
                            <i className={item.icon}></i>
                          </div>
                          <h4>{item.title}</h4>
                          <p>{item.shortText}</p>
                        </div>
                      </div>
                    ))}
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
