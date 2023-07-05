import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const FunFactStyle3 = () => {
  const [funFacts, setFunFacts] = React.useState();
  React.useEffect(() => {
    const getFunFacts = async () => {
      const response = await axios.get(`${baseApiUrl}/api/fun-fact?populate=*`);
      setFunFacts(response.data);
      // console.log(response.data);
    };
    getFunFacts();
  }, []);
  return (
    <>
      {funFacts && (
        <div className="fun-fact-area bg-three pt-100 pb-75">
          <div className="container">
            <div className="section-title">
              <span>{funFacts.data.attributes.subTitle}</span>
              <h2>{funFacts.data.attributes.title}</h2>
            </div>
            <div className="row justify-content-center">
              {funFacts.data.attributes.FunFactItem.map((item) => (
                <div className="col-lg-3 col-sm-6" key={item.id}>
                  <div className="single-funfact-box">
                    <div className="icon">
                      <i className={item.icon}></i>
                    </div>
                    <h3>
                      {item.number} <span className="small-text">+</span>
                    </h3>
                    <p>{item.text}</p>
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

export default FunFactStyle3;
