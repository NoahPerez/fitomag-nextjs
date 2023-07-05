import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const TeamMemberStyle3 = () => {
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
          <div className="container">
            <div className="section-title">
              <span>{team.data.attributes.subTitle}</span>
              <h2>{team.data.attributes.title}</h2>
            </div>

            <div className="row justify-content-center">
              {team.data.attributes.teamMember.slice(0, 3).map((teamInfo) => (
                <div className="col-lg-4 col-md-6" key={teamInfo.id}>
                  <div className="single-team-card">
                    <div className="team-image">
                      <img
                        src={teamInfo.image.data.attributes.url}
                        alt={teamInfo.image.data.attributes.alternativeText}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamMemberStyle3;
