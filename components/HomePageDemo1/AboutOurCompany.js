import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const AboutOurCompany = () => {
  const [aboutInfo, setAboutInfo] = React.useState();
  React.useEffect(() => {
    const getAboutInfo = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/about-our-company?populate=*`
      );
      setAboutInfo(response.data);
      // console.log(response.data);
    };
    getAboutInfo();
  }, []);
  return (
    <>
      {aboutInfo && (
        <div className="about-area ptb-100">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div
                className="col-lg-6 col-md-12"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="about-image">
                  <img
                    src={aboutInfo.data.attributes.image.data.attributes.url}
                    alt={
                      aboutInfo.data.attributes.image.data.attributes
                        .alternativeText
                    }
                  />
                  <div className="about-shape-1">
                    <img src="/images/about/shape-1.png" alt="Teza" />
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
                  <span>{aboutInfo.data.attributes.subTitle}</span>
                  <h3>{aboutInfo.data.attributes.title}</h3>
                  <ReactMarkdown>
                    {aboutInfo.data.attributes.shortText}
                  </ReactMarkdown>
                  <div className="about-btn">
                    <Link href={aboutInfo.data.attributes.btnLink}>
                      <a className="default-btn">
                        {aboutInfo.data.attributes.btnText}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-shape-2">
            <img src="/images/about/shape-2.png" alt="Teza" />
          </div>
        </div>
      )}
    </>
  );
};

export default AboutOurCompany;
