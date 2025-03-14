import ProductShoot from "@components/sub-service/video-production/ps";
import { data } from "@data/services/video-production/vfx-data";
import "swiper/css/bundle";

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
            <ProductShoot />
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
        </section>
      </main>
      <FooterOne />
    </>
  );
};

export default Index;
