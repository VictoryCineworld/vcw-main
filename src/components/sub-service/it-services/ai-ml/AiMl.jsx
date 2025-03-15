import { data } from "@data/services/content-creation-content-designing/campaign-content-creation";
import "swiper/css/bundle";
import SocialMediaService from "./SocialMediaService";
import SocialServiceDetails from "./SocialServiceDetails";
const {
  default: Breadcrumb,
} = require("@components/common/breadcrumb/breadcrumb");
const { default: FooterOne } = require("@layout/footers/footer-one");
const { Header } = require("@layout/index");

const AiMl = () => {
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
     
      <main>
        <section className="case-details-area">
          <SocialMediaService />

          <div className="col-xxl-12 pl-55 pr-40 w-100">
            <h4 className="case-subtitle mb-25 ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.23197 8L0 9.90086L2.38215 14.0991L5.616 12.2016L5.61782 16H10.3822L10.384 12.2016L13.6178 14.0991L16 9.90086L12.768 8L16 6.09914L13.6178 1.90086L10.384 3.79843L10.3822 0H5.61782L5.616 3.79843L2.38215 1.90086L0 6.09914L3.23197 8Z"
                    fill="#BCA045"
                  />
                </svg>
              </span>
              Machine Learning Development Services
            </h4>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              At Victory Cineworld, we offer cutting-edge AI and ML solutions
              that empower businesses to unlock exceptional growth. As a
              reliable company for machine learning services, we offer extensive
              Artificial Intelligence and Machine Learning development services
              that fit your specific requirements. Our team leverages advanced
              technologies to deliver scalable and effective solutions that
              boost productivity, reduce costs, and drive growth for your
              business. We specialize in designing customized AI and machine
              learning solutions that improve decisions, streamline operations,
              and promote business results. Need AI/ML development services or
              innovative solutions? Victory Cineworld can help you leverage the
              power of AI and machine learning to succeed in today's market.
              Contact us for intelligent solutions that drive innovation.
            </p>
          </div>
        </section>
        <SocialServiceDetails />
      </main>
    
    </>
  );
};

export default AiMl;
