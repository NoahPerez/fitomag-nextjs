import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const TeamMemberStyle2 = () => {
  const [team, setTeam] = React.useState();
  React.useEffect(() => {
    const getTeam = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/our-expert-team?populate=teamMember.image`
      );
      setTeam(response.data);
      // console.log(response.data);
    };
    getTeam();
  }, []);
  return (
    <>
      {team && (
        <div className="team-area pt-100 pb-75">
          <div className="container">
            <div className="section-title">
              <span>{team.data.attributes.subTitle}</span>
              <h2>{team.data.attributes.title}</h2> 
            </div>

            <Swiper
              navigation={true}
              spaceBetween={20}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
              }}
              modules={[Navigation]}
              className="mySwiper team-slides-two"
            >
              {team.data.attributes.teamMember
                .slice(0, 8)
                .map((teamInfo) => (
                  <SwiperSlide key={teamInfo.id}>
                    <div className="single-team-item">
                      <div className="team-image">
                        <img
                          src={teamInfo.image.data.attributes.url}
                          alt={
                            teamInfo.image.data.attributes.alternativeText
                          }
                        />
                        <ul className="social">
                          <li>
                            <a
                              href={teamInfo.facebookLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className={teamInfo.facebookIcon}></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={teamInfo.twitterLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className={teamInfo.twitterIcon}></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={teamInfo.instagramLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className={teamInfo.instagramIcon}></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href={teamInfo.linkedinLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className={teamInfo.linkedinIcon}></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="team-content">
                        <h3>{teamInfo.name}</h3>
                        <span>{teamInfo.designation}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div className="team-shape-1">
            <img src="/images/team/shape-1.png" alt="Teza" />
          </div>
        </div>
      )}
    </>
  );
};

export default TeamMemberStyle2;
