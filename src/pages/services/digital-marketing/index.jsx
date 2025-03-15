import { faqs, steps } from "@data/services/digital-marketing";
import Link from "next/link";
import { newServiceData } from "@data/service-data";

const {
  default: Breadcrumb,
} = require("@components/common/breadcrumb/breadcrumb");
const { default: FooterOne } = require("@layout/footers/footer-one");
const { Header } = require("@layout/index");
const digitalMarketingService = newServiceData.find(
  (service) => service.category === "Digital Marketing"
);

const filteredSubcategories = digitalMarketingService
  ? digitalMarketingService.subcategories
  : [];

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title="Digital Marketing" subTitle="Services" />

        <section className="fm-services-area fm-services-spc bg-common-black section-spacing">
          <div className="container pt-20">
            <div className="row g-5 gy-50">
              <div
                className="col-xl-4 col-lg-12 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="services-sec-wrapper">
                  <div className="section-title section-title-spacing">
                    <span className="section-subtitle title-anim">Our</span>
                    <h2 className="section-main-title text-white title-anim">
                      Digital Marketing Services
                    </h2>
                  </div>

                  {/* <div className="fm-services-btn btn_wrapper">
                                        <Link
                                            href="/service-details"
                                            className="blog-rotate-btn is-white btn-item btn__item-move"
                                        >
                                            <span>
                                                <i className="flaticon-right-arrow-1"></i>
                                            </span>
                                        </Link>
                                    </div> */}
                </div>
              </div>

              <div className="col-xl-8 col-lg-12">
                <div className="fm-services-content-2 fade_bottom">
                  {filteredSubcategories.map((item) => (
                    <div
                      className="fm-single-services-content mb-20 wow fadeInUp"
                      data-wow-delay={item.delay}
                      key={item.id}
                    >
                      <span className="services-num">{item.serviceNum}</span>
                      <h4 className="fm-service-title">
                        <Link
                          className="fm-content-title"
                          href={`/service-details/${item.id}`}
                        >
                          {item.title}
                        </Link>
                      </h4>
                      <p className="fm-services-text-2">{item.description}</p>
                      <div className="fm-btn services-btn-2">
                        <Link href={item.link} className="border-btn is-white">
                          {item.serviceBtn}
                          <span>
                            <i className="fa-regular fa-arrow-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection title="Frequently Asked Questions" faqs={faqs} />
      </main>
      <FooterOne />
    </>
  );
};

export default index;
