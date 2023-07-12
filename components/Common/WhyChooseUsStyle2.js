import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const WhyChooseUsStyle2 = () => {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false);

  // API
  const [chooseUs, setChooseUs] = React.useState();
  React.useEffect(() => {
    const getChooseUs = async () => {
      const response = await axios.get(
        `${baseApiUrl}why-choose-us-style-2?populate=*`
      );
      setChooseUs(response.data);
      // console.log(response.data);
    };
    getChooseUs();
  }, []);

  return (
    <>
      {chooseUs && (
        <>
          <FsLightbox
            toggler={toggler}
            sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
          />
          <div 
            className="why-choose-us-area-with-video ptb-100" 
            style={{ backgroundImage: `url(${chooseUs.data.attributes.bgImage.data.attributes.url})` }}
          >
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-12">
                  <div className="why-choose-us-video-view">
                    <div className="video-btn" onClick={() => setToggler(!toggler)}>
                      <i className="flaticon-play-button"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div
                    className="why-choose-us-content wrap-color"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    <span>{chooseUs.data.attributes.subTitle}</span>
                    <h3>{chooseUs.data.attributes.title}</h3>
                    <p>
                      {chooseUs.data.attributes.shortText}
                    </p>
                    {chooseUs.data.attributes.chooseItem.map((choose) => (
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
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WhyChooseUsStyle2;
