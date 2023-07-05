import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-information-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Contact Information</span>
            <h2>Alone We Can Do So Little Together We Can Do So Much</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-map-pin-line"></i>
                </div>
                <h3>Address</h3>
                <p>Manual 3B, Jason Block, New Jersey, Australia</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-mail-line"></i>
                </div>
                <h3>Email Address</h3>
                <p>
                  <a href="mailto:info@teza.com">info@teza.com</a> <br />{" "}
                  <a href="mailto:contact@teza.com">contact@teza.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-phone-line"></i>
                </div>
                <h3>Phone Number</h3>
                <p>
                  <a href="tel:91298765436543">+912 9876 5436 543</a> <br />{" "}
                  <a href="tel:91298765436766">+912 9876 5436 766</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-time-line"></i>
                </div>
                <h3>Working Hours</h3>
                <p>
                  Open Sunday To Thursday <br /> From 10.00 AM to 07.00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
