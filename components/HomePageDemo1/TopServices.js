import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const TopServices = () => {
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
      {services && (
        <div className="features-area pt-100 pb-75">
          <div className="container">
            <div className="row justify-content-center">
              {services.data.slice(0, 3).map((service) => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={service.id}>
                  <div className="single-features-card">
                    <div className="number"></div>
                    <h3>
                      <Link href={`/services/${service.attributes.slug}`}>
                        <a>{service.attributes.title}</a>
                      </Link>
                    </h3>
                    <p>
                      {service.attributes.shortText}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="features-shape-1">
            <img src="/images/features/shape-1.png" alt="image" />
          </div>
        </div>
      )}
    </>
  );
};

export default TopServices;
