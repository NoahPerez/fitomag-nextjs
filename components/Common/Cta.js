import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Cta = () => {
  const [getToWork, setGetToWork] = React.useState();
  React.useEffect(() => {
    const getGetToWork = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/get-to-work?populate=*`
      );
      setGetToWork(response.data);
      // console.log(response.data);
    };
    getGetToWork();
  }, []);
  return (
    <>
      {getToWork && (
        <div className="container">
          <div className="cta-area ptb-100">
            <div className="cta-content">
              <span>{getToWork.data.attributes.subTitle}</span>
              <h3>{getToWork.data.attributes.title}</h3>
            </div>

            <div className="cta-btn-box">
              <Link href={getToWork.data.attributes.btnLink}>
                <a className="default-btn">
                  {getToWork.data.attributes.btnText}
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cta;
