import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const WhyChooseUsStyle1 = () => {
  const [whyChooseUs, setwhyChooseUs] = React.useState();
  React.useEffect(() => {
    const getwhyChooseUs = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/why-choose-us?populate=*`
      );
      setwhyChooseUs(response.data);
      // console.log(response.data);
    };
    getwhyChooseUs();
  }, []);
  return (
    <>
      {whyChooseUs && (
        <div className="why-choose-us-area pb-100">
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
                  <span>{whyChooseUs.data.attributes.subTitle}</span>
                  <h3>{whyChooseUs.data.attributes.title}</h3>
                  <p>{whyChooseUs.data.attributes.shortText}</p>

                  {whyChooseUs.data.attributes.chooseReason.map((choose) => (
                    <div className="choose-us-inner-box" key={choose.id}>
                      <div className="icon">
                        <i className={choose.icon}></i>
                      </div>
                      <h4>{choose.title}</h4>
                      <p>{choose.shortText}</p>
                    </div>
                  ))}
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
                    src={whyChooseUs.data.attributes.image.data.attributes.url}
                    alt={
                      whyChooseUs.data.attributes.image.data.attributes
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

export default WhyChooseUsStyle1;
