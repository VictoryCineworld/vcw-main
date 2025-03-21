import ContactForm from "@components/forms/contact-form";
import Link from "next/link";
import React from "react";

const ContactArea = () => {
  return (
    <div className="fm-contact-area section-spacing">
      <div className="container">
        <div
          className="row justify-content-center wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="col-xxl-10">
            <div className="fm-contact-content-wrapper ">
              <div className="row g-5">
                <div className="col-xl-4 col-lg-4">
                  <div className="fm-contact-info-wrapper">
                    <div className="fm-contact-info-single mb-40">
                      <span className="fm-contact-info-icon">
                        <i className="fa-thin fa-phone"></i>
                      </span>
                      <div className="fm-contact-info-text">
                        <h5 className="fm-contact-info-text-label">Phone</h5>
                        <p>
                          <span>Inquiry : </span>
                          <Link href="tel:+91 968 989 6355">
                            (+91) 968 989 6355
                          </Link>
                        </p>
                        {/* <p><span>Hotline : </span><Link href="fax:5879-6985">5879 - 6985</Link></p> */}
                      </div>
                    </div>

                    <div className="fm-contact-info-single mb-40">
                      <span className="fm-contact-info-icon">
                        <i className="fa-thin fa-envelope-open-text"></i>
                      </span>
                      <div className="fm-contact-info-text">
                        <h5 className="fm-contact-info-text-label">Email</h5>
                        <p>
                          <Link href="mailto:hello@victorycineworld.com">
                            hello@victorycineworld.com
                          </Link>
                        </p>
                        {/* <p><Link href="mailto:career@example.fm">abc@gmail.cpm</Link></p> */}
                      </div>
                    </div>

                    <div className="fm-contact-info-single  mb-40">
                      <span className="fm-contact-info-icon">
                        <i className="fa-thin fa-map-location-dot"></i>
                      </span>
                      <div className="fm-contact-info-text">
                        <h5 className="fm-contact-info-text-label">Location</h5>
                        <p>
                          Victory Cineworld, Tapdia Terrace, Adalat Rd, opposite
                          District Court Road, Chh, Kotla Colony, Chhatrapati
                          Sambhaji Nagar, Maharashtra 431001
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8">
                  <div className="fm-contact-info-form ml-50">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
