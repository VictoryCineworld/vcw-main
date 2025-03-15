import { data } from "@data/services/digital-marketing/ad";
import Image from "next/image";
import "swiper/css/bundle";
import Link from "next/link";
import Campaign from "@components/sub-service/campaign-content-creation/ccc/Campaign";
import AdsMarketing from "@components/sub-service/digital-marketing/adsm/AdsMarketing";
const {
  default: Breadcrumb,
} = require("@components/common/breadcrumb/breadcrumb");
const { default: FooterOne } = require("@layout/footers/footer-one");
const { Header } = require("@layout/index");

const Index = () => {
  const HeaderData = data.find((data) => data.type === "metadata");
  const portfolioData =
    data.find((item) => item.type === "Portfolio")?.data || [];

  const steps =
    data.find((item) => item.type === "steps")?.approach_steps || [];
  const services =
    data.find((item) => item.type === "services")?.categories || [];
  const faqs = data.find((item) => item.type === "faqs")?.questions || [];
  const quote = data.find((item) => item.type === "quote");

  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={HeaderData.title} subTitle={HeaderData.breadcrumb} />
        <section className="case-details-area">
          <>
            <AdsMarketing />
          </>

          <div className="fm-faq-area section-spacing-bottom container">
            <div className="bd-accordion-fix">
              <div className="container wow fadeInUp" data-wow-delay="0.3s">
                <div className="row section-title-spacing">
                  <div className="col-12">
                    <div className="section-title text-center">
                      <h2 className="section-main-title featured-sec-title featured-clr title-anim faq-sec-title">
                        Frequently Asked Questions
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="fm-faq-content-wrapper">
                  <div id="fmFaqAcc">
                    <div className="row g-5 justify-content-center">
                      {faqs.map((faq, index) => (
                        <div key={index} className="col-lg-6">
                          <div className="fm-faq-single fade_bottom_3">
                            <h4
                              className="fm-faq-single-title"
                              id={`fmFaq-${index + 1}`}
                            >
                              <button
                                className="fm-faq-single-button collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target={`#fmFaqcollapse-${index + 1}`}
                                aria-expanded="false"
                                aria-controls={`fmFaqcollapse-${index + 1}`}
                              >
                                {index + 1}. {faq.question}
                              </button>
                            </h4>
                            <div
                              id={`fmFaqcollapse-${index + 1}`}
                              className="fm-faq-single-collapse collapse"
                              aria-labelledby={`fmFaq-${index + 1}`}
                              data-bs-parent="#fmFaqAcc"
                            >
                              <div className="fm-faq-single-body">
                                <p>{faq.answer}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="case-quote-area pt-70 pb-70">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xxl-8 col-xl-12">
                  <div
                    className="blockquote-wrapper wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <blockquote>
                      <div className="case-quote-icon">
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M50.629 26.2256C50.5001 24.8321 50.5987 21.044 54.2276 15.7764C54.5021 15.3789 54.4523 14.8428 54.1114 14.502C52.6319 13.0225 51.7159 12.0889 51.0734 11.4356C50.2286 10.5742 49.8429 10.1817 49.2784 9.66992C48.9015 9.33112 48.3312 9.32522 47.9503 9.65732C41.6251 15.1612 34.5997 26.5342 35.6163 40.4678C36.212 48.6494 42.1798 54.5879 49.8058 54.5879C57.6319 54.5879 63.9991 48.2217 63.9991 40.3955C63.9991 32.8457 58.0734 26.6543 50.629 26.2256ZM49.8058 52.5879C43.2569 52.5879 38.129 47.4297 37.6105 40.3233C37.6105 40.3233 37.6105 40.3233 37.6105 40.3223C36.4669 24.6514 45.7823 14.4727 48.5968 11.7774C48.8712 12.0479 49.1847 12.3662 49.6466 12.8369C50.2032 13.4033 50.965 14.1787 52.1173 15.335C47.712 22.1221 48.5431 26.958 48.9073 27.6514C49.0802 27.9805 49.4347 28.2022 49.8058 28.2022C56.5294 28.2022 61.9991 33.6719 61.9991 40.3955C61.9991 47.1182 56.5294 52.5879 49.8058 52.5879Z"
                            fill="#A5A5A5"
                          />
                          <path
                            d="M15.113 26.2256C14.9831 24.836 15.0788 21.0508 18.7116 15.7764C18.9851 15.3789 18.9362 14.8428 18.5954 14.502C17.1188 13.0254 16.2038 12.0928 15.5622 11.4395C14.7146 10.5762 14.3278 10.1826 13.7634 9.66992C13.3864 9.33112 12.8161 9.32622 12.4353 9.65632C6.11013 15.1602 -0.916268 26.5313 0.098332 40.4678V40.4688C0.696032 48.6494 6.66473 54.5879 14.2907 54.5879C22.1169 54.5879 28.4841 48.2217 28.4841 40.3955C28.4841 32.8448 22.5583 26.6524 15.113 26.2256ZM14.2907 52.5879C7.74293 52.5879 2.61203 47.4297 2.09253 40.3223V40.3233C0.951932 24.6485 10.2673 14.4717 13.0817 11.7774C13.3571 12.0479 13.6716 12.3682 14.1345 12.8399C14.6901 13.4063 15.4509 14.1807 16.6013 15.335C12.196 22.1231 13.0271 26.958 13.3913 27.6504C13.5642 27.9795 13.9196 28.2022 14.2907 28.2022C21.0144 28.2022 26.4841 33.6719 26.4841 40.3955C26.4841 47.1182 21.0144 52.5879 14.2907 52.5879Z"
                            fill="#A5A5A5"
                          />
                        </svg>
                      </div>
                      <h3 className="case-quite-title bdFadeBottom">
                        {quote.text}
                      </h3>
                      <div className="case-quote-author">
                        <span className="name">{quote.name}</span>
                        <span className="title">{quote.title}</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="contact-top-area bg-common-black">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="fm-contact-wrapper fm-contact-pad">
                    <div
                      className="section-title title-anim wow fadeInLeft"
                      data-wow-delay="0.3s"
                    >
                      <span className="section-subtitle featured-sub-title">
                        GET IN TOUCH
                      </span>
                      <h2 className="section-main-title text-white fw-400 mb-15">
                        Ready To Get Focused?
                      </h2>
                      <h2 className="section-main-title text-white">
                        Get In Touch
                      </h2>
                    </div>

                    <div
                      className="fm-contact-btn btn_wrapper wow fadeInRight"
                      data-wow-delay="0.3s"
                    >
                      <Link
                        href="/contact"
                        className="blog-rotate-btn is-white large btn__item-move"
                      >
                        <span>
                          <i className="flaticon-right-arrow-1"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
      <FooterOne />
    </>
  );
};

export default Index;
