import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const ServiceDetailsContent = ({ attributes: { serviceDetailsText } }) => {
  return (
    <>
      <div className="services-details-area pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="services-details-content">
                <Link href="/services">
                  <a className="back-to-services">
                    <i className="ri-arrow-left-line"></i> Beck to Services
                  </a>
                </Link>

                <ReactMarkdown>
                  {serviceDetailsText}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
