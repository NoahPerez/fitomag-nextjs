import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Pricing = () => {
  const [pricing, setPricing] = React.useState();
  React.useEffect(() => {
    const getPricing = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/our-pricing?populate=priceCard.priceList`
      );
      setPricing(response.data);
      // console.log(response.data);
    };
    getPricing();
  }, []);
  return (
    <>
      {pricing && (
        <div className="pricing-area pt-100 pb-75">
          <div className="container">
            <div className="section-title">
              <span>{pricing.data.attributes.subTitle}</span>
              <h2>{pricing.data.attributes.title}</h2>
            </div>
            <div className="row justify-content-center">
              {pricing.data.attributes.priceCard.map((price) => (
                <div className="col-lg-4 col-md-6" key={price.id}>
                  <div className="single-pricing-table">
                    <div className="pricing-header">
                      <h3>
                        <i className={price.icon}></i> {price.BasicPlan}
                      </h3>
                    </div>

                    <div className="price">
                      {price.price} <span>{price.duration}</span>
                    </div>

                    <div className="pricing-btn">
                      <Link href={price.btnLink}>
                        <a className="default-btn">{price.btnText}</a>
                      </Link>
                      <span>{price.helptext}</span>
                    </div>

                    <ul className="features-list">
                      {price.priceList.map((list) => (
                        <li key={list.id}>
                          <i className={list.icon}></i> {list.text}
                        </li>
                      ))}
                    </ul>
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

export default Pricing;
