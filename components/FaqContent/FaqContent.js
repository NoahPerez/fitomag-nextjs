import React from "react";
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

const FaqContent = () => {
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
      {faqs && (
        <div className="faq-area-without-color ptb-100">
          <div className="container">
            <div className="section-title">
              <span>{faqs.data.attributes.subTitle}</span>
              <h2>{faqs.data.attributes.title}</h2>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-12">
                <div className="faq-accordion">
                  <Accordion preExpanded={["a"]}>
                    {faqs.data.attributes.item.map((faq) => (
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FaqContent;
