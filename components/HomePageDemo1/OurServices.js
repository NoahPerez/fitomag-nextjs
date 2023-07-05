import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const OurServices = () => {
  const [services, setServices] = React.useState();
  React.useEffect(() => {
    const getServices = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/services?populate=*`
      );
      setServices(response.data);
      // console.log(response.data);
    };
    getServices();
  }, []);
  return (
    <>
      <div className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Our Services</span>
            <h2>Get Benefit And More With Our Excelent Services</h2>
          </div>

          {services && (
            <div className="row justify-content-center">
              {services.data.slice(0, 3).map((service) => (
                <div className="col-lg-4 col-md-6" key={service.id}>
                  <div className="single-services-card">
                    <div className="icon">
                      <i className={service.attributes.icon}></i>
                    </div>
                    <h3>
                      <Link href={`/services/${service.attributes.slug}`}>
                        <a>{service.attributes.title}</a>
                      </Link>
                    </h3>
                    <p>
                      {service.attributes.shortText}
                    </p>
                    <Link href={`/services/${service.attributes.slug}`}>
                      <a className="services-btn">
                        {service.attributes.btnText}
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="view-more-btn">
            <Link href="/services">
              <a className="default-btn">View More</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
