import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const CaseStudyCard = () => {
  const [caseStudies, setCaseStudies] = React.useState();
  React.useEffect(() => {
    const getCaseStudies = async () => {
      const response = await axios.get(
        `${baseApiUrl}case-studies?populate=*`
      );
      setCaseStudies(response.data);
      // console.log(response.data);
    };
    getCaseStudies();
  }, []);
  return (
    <>
      <div className="case-study-area-without-color pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Case Study</span>
            <h2>Grow And Experience Endless Possibilites To Your Business</h2>
          </div>

          {caseStudies && (
            <div className="row justify-content-center">
              {caseStudies.data.map((caseStudie) => (
                <div className="col-lg-6 col-md-6" key={caseStudie.id}>
                  <div className="single-case-study-card">
                    <Link href={`/case-studies/${caseStudie.attributes.slug}`}>
                      <a>
                        <img
                          src={caseStudie.attributes.image.data.attributes.url}
                          alt={caseStudie.attributes.image.data.attributes.alternativeText}
                        />
                      </a>
                    </Link>
                    <div className="case-study-content">
                      <h3>
                        <Link href={`/case-studies/${caseStudie.attributes.slug}`}>
                          <a>{caseStudie.attributes.title}</a>
                        </Link>
                      </h3>
                      <Link href={`/case-studies/${caseStudie.attributes.slug}`}>
                        <a className="case-btn">
                          <i className="ri-arrow-right-line"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CaseStudyCard;
