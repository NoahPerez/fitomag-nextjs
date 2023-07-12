import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Footer = () => {
  // Logo API
  const [logo, setLogo] = React.useState();
  React.useEffect(() => {
    const getLogo = async () => {
      const response = await axios.get(
        `${baseApiUrl}site-logo?populate=*`
      );
      setLogo(response.data);
      // console.log(response.data);
    };
    getLogo();
  }, []);
  // End Logo API

  // Services API
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
    // End Services API

  }, []);

  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="widget-logo">
                  {logo && (
                    <Link href="/">
                      <a className="navbar-brand">
                        <img
                          src={logo.data.attributes.whiteLogo.data.attributes.url}
                          alt={
                            logo.data.attributes.whiteLogo.data.attributes
                              .alternativeText
                          }
                        />
                      </a>
                    </Link>
                  )}
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisng elit ultricies
                  lobortis odio eget gravida egestas at cursus at ipsum.
                </p>
                <ul className="widget-social">
                  <li>
                    <a
                      href="https://www.facebook.com/EnvyTheme"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/?lang=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/signup"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-linkedin-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-5">
                <h3>Useful Link</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/team">
                      <a>Team</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-study">
                      <a>Case Study</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-5">
                <h3>Our Services</h3>

                {services && (
                  <ul className="quick-links">
                    {services.data.slice(0, 5).map((service) => (
                      <li key={service.id}>
                        <Link href={`/services/${service.attributes.slug}`}>
                          <a>{service.attributes.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-3">
                <h3>Contact Info</h3>

                <ul className="footer-information">
                  <li>
                    <i className="ri-map-pin-line"></i>
                    Manual 3B, Jason Block, New Jersey, Australia
                  </li>
                  <li>
                    <i className="ri-phone-fill"></i>
                    <a href="tel:91298765436543">+912 9876 5436 543</a>
                  </li>
                  <li>
                    <i className="ri-mail-line"></i>
                    <a href="mailto:hello@teza.com">hello@teza.com</a>
                  </li>
                  <li>
                    <i className="ri-mail-line"></i>
                    <a href="mailto:contact@teza.com">contact@teza.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>
                Copyright {currentYear} Teza All Rights Reserved by {' '}
                <a
                  href="https://envytheme.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  EnvyTheme
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
