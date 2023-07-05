import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const FunFactStyle1 = () => {
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
        <div className="fun-fact-area pt-100 pb-75">
          <div className="container">
            <div className="row justify-content-center">
              {funFacts.data.attributes.FunFactItem.map((item) => (
                <div className="col-lg-3 col-sm-6 col-6" key={item.id}>
                  <div className="single-funfact-card">
                    <h3>
                      {item.number} <span className="small-text">+</span>
                    </h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fun-fact-shape-1">
            <img src="/images/features/shape-1.png" alt="image" />
          </div>
        </div>
      )}
    </>
  );
};

export default FunFactStyle1;
