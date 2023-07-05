import React from "react";
import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";

const Faq = () => {
  const [faqs, setFaqs] = React.useState();
  React.useEffect(() => {
    const getFaqs = async () => {
      const response = await axios.get(`${baseApiUrl}/api/faq?populate=*`);
      setFaqs(response.data);
      // console.log(response.data);
    };
    getFaqs();
  }, []);
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="faq-content">
                <span>Ask Any Questions</span>
                <h3>
                  Boost Business With Creative Idea & Brand Solutions With Us
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit et
                  fames maecenas amet est scelerisque lectus tortor sit lorem
                  ipsum dolor sit amet consectetur adipiscing elit et fames
                  maecenas.
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="faq-info-box">
                      <h3>Clients Satisfied</h3>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          90%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="faq-info-box">
                      <h3>Positive Reviews</h3>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "95%" }}
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          95%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-40">
                  <Link href="/contact">
                    <a className="default-btn">Contact</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              {faqs && (
                <div className="faq-accordion">
                  <Accordion preExpanded={["a"]}>
                    {faqs.data.attributes.item.slice(0, 3).map((faq) => (
                      <AccordionItem uuid={faq.uuid} key={faq.id}>
                        <AccordionItemHeading>
                          <AccordionItemButton>{faq.title}</AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <ReactMarkdown>{faq.description}</ReactMarkdown>
                        </AccordionItemPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
