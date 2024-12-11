import React from "react";
import bgImage from "@assets/img/services/director-service-bg.jpg";
import Image from "next/image";
import Link from "next/link";
import serviceData from "@data/service-data";

const ServiceSection = () => {
  return (
    <div>
      <div className="fm-director-service-area soft-blackbg fix">
        <div
          className="fm-director-service-bg"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        ></div>
        <div className="container">
          <div className="fm-director-service-wrapper section-spacing">
            <div className="row">
              <div className="col-xl-7 col-lg-12">
                <div className="row wow fadeInUp" data-wow-delay="0.3s">
                  <div className="col-12">
                    <div className="fm-director-service-title">
                      <span className="section-subtitle title-anim">
                        SERVICES
                      </span>
                      <h2 className="section-main-title text-white title-anim mb-55">
                        My Services
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row g-5 gy-50">
                  {serviceData.slice(0, 4).map((item) => (
                    <div
                      className="col-xl-6 col-sm-6 wow fadeInUp"
                      data-wow-delay={item.delay}
                      key={item.id}
                    >
                      <div className="fm-director-service-single fade_bottom">
                        <Image
                          src={item.image}
                          style={{ width: "auto", height: "auto" }}
                          alt="img not found"
                        />
                        <h4 className="fm-director-service-title">
                          <Link href="/service">{item.title}</Link>
                        </h4>
                        <p
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        ></p>
                        <Link
                          href={`/service-details/${item.id}`}
                          className="fm-director-service-btn arrow-effect"
                        >
                          View Details{" "}
                          <span>
                            <i className="fa-light fa-arrow-right-long"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fm-director-service-area soft-blackbg fix">
        <div className="container">
          <div className="fm-director-service-wrapper section-spacing">
            <div className="row">
              {/* Image Section on the Left */}
              <div
                className="col-xl-5 col-lg-12 fm-director-service-bg"
                style={{ backgroundImage: `url(${bgImage.src})` }}
              ></div>

              {/* Cards Section on the Right */}
              <div className="col-xl-7 col-lg-12">
                <div className="row wow fadeInUp" data-wow-delay="0.3s"></div>
                <div className="row g-5 gy-50">
                  {serviceData.slice(4, 8).map((item) => (
                    <div
                      className="col-xl-6 col-sm-6 wow fadeInUp"
                      data-wow-delay={item.delay}
                      key={item.id}
                    >
                      <div className="fm-director-service-single fade_bottom">
                        <Image
                          src={item.image}
                          style={{ width: "auto", height: "auto" }}
                          alt="img not found"
                        />
                        <h4 className="fm-director-service-title">
                          <Link href="/service">{item.title}</Link>
                        </h4>
                        <p>{item.description}</p>
                        <Link
                          href={`/service-details/${item.id}`}
                          className="fm-director-service-btn arrow-effect"
                        >
                          View Details{" "}
                          <span>
                            <i className="fa-light fa-arrow-right-long"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
