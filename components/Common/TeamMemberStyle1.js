import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const TeamMemberStyle1 = () => {
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
        <div className="team-area-with-color ptb-100">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-4 col-md-12">
                <div className="team-box-content">
                  <span>{team.data.attributes.subTitle}</span>
                  <h3>{team.data.attributes.title}</h3>
                  <p>{team.data.attributes.shortText}</p>
                  <div className="team-btn">
                    <Link href="/team">
                      <a className="default-btn">View More</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-9 col-lg-8 col-md-12">
                <Swiper
                  spaceBetween={30}
                  navigation={true}
                  breakpoints={{
                    400: {
                      slidesPerView: 1,
                    },
                    576: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                  modules={[Navigation]}
                  className="mySwiper team-slides"
                >
                  {team.data.attributes.teamMember
                    .slice(0, 6)
                    .map((teamInfo) => (
                      <SwiperSlide key={teamInfo.id}>
                        <div className="single-team-card">
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
            </div>
          </div>

          <div className="team-shape-1">
            <img src="/images/team/shape-1.png" alt="Team Image" />
          </div>
        </div>
      )}
    </>
  );
};

export default TeamMemberStyle1;
