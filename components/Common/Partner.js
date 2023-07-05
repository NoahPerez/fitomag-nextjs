import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Partner = () => {
  const [partner, setPartner] = React.useState();
  React.useEffect(() => {
    const getPartner = async () => {
      const response = await axios.get(`${baseApiUrl}/api/partner?populate=item.image`);
      setPartner(response.data);
      // console.log(response.data);
    };
    getPartner();
  }, []);
  return (
    <>
      {partner && (
        <div className="partner-area ptb-65">
          <div className="container">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                500: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}
              className="mySwiper partner-slides"
            >
              {partner.data.attributes.item.map((partnerImg) => (
                <SwiperSlide key={partnerImg.id}>
                  <div className="image-box">
                    <img 
                      src={partnerImg.image.data.attributes.url} 
                      alt={partnerImg.image.data.attributes.alternativeText} 
                    />
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

export default Partner;
