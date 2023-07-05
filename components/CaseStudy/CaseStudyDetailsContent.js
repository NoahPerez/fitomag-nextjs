import React from "react";
import ReactMarkdown from "react-markdown";

const CaseStudyDetailsContent = ({ 
  attributes: { 
    title, 
    shortDescription, 
    client, 
    date, 
    websiteText, 
    websiteLink, 
    category,
    longDescription,
    image: {
      data: {
        attributes: { url: imageUrl },
      },
    },
  } 
}) => {
  return (
    <>
      <div className="case-study-details-area pt-100 pb-75">
        <div className="container">
          <div className="case-study-details-desc">
            <div className="case-study-details-header">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8 col-md-12">
                  <h3>{title}</h3>
                  <p>
                    {shortDescription}
                  </p>
                </div>

                <div className="col-lg-4 col-md-12">
                  <ul className="case-study-information">
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="content">
                          <h5>Client:</h5>
                          <span>
                            {client}
                          </span>
                        </div>
                        <div className="content">
                          <h5>Date:</h5>
                          <span>{date}</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="content">
                          <h5>Website:</h5>
                          <span>
                            <a href={websiteLink} target="_blank" rel="noreferrer">
                              {websiteText}
                            </a>
                          </span>
                        </div>
                        <div className="content">
                          <h5>Category:</h5>
                          <span>
                            {category}
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
 
            <div className="case-study-details-content">  
              <img 
                src={imageUrl} 
                alt="Case Studies" 
              />
              <ReactMarkdown>
                {longDescription}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyDetailsContent;
