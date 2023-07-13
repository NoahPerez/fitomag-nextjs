import React from "react";
import Link from "next/link";
import axios from "pages/api/api.js"
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const AboutOurCompany = () => {
  const [aboutCompany, setAboutCompany] = React.useState();
  React.useEffect(() => {
    const getAboutCompany = async () => {
      const response = await axios.get(
        `${baseApiUrl}about-our-company-style-2?populate=*`
      );
      setAboutCompany(response.data);
      // console.log(response.data);
    };
    getAboutCompany();
  }, []);
  return (
    <>
      {aboutCompany && (
        <div className="about-area ptb-100">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-image-wrap">
                  <img
                    src={aboutCompany.data.attributes.image1.data.attributes.url}
                    alt={aboutCompany.data.attributes.image1.data.attributes.alternativeText}
                    data-aos="fade-down"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="true"
                  />
                  <img
                    src={aboutCompany.data.attributes.image2.data.attributes.url}
                    alt={aboutCompany.data.attributes.image2.data.attributes.alternativeText}
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="true"
                  />
                  <div
                    className="about-shape-3"
                  >
                    <img src="/images/about/shape-1.png" alt="Shape" />
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 col-md-12"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="about-content">
                  <span>{aboutCompany.data.attributes.subTitle}</span>
                  <h3>
                    {aboutCompany.data.attributes.title}
                  </h3>

                  <ReactMarkdown>
                    {aboutCompany.data.attributes.shortDescription}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutOurCompany;
