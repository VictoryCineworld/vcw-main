import { data } from "@data/services/content-creation-content-designing/campaign-content-creation";
import "swiper/css/bundle";
import SocialMediaService from "./SocialMediaService";
import SocialServiceDetails from "./SocialServiceDetails";
const {
  default: Breadcrumb,
} = require("@components/common/breadcrumb/breadcrumb");
const { default: FooterOne } = require("@layout/footers/footer-one");
const { Header } = require("@layout/index");

const SocialMediaManagement = () => {
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
              Social Media Management Services Near Me:
            </h4>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              Social media has become necessary for companies to build customer
              relationships, increase brand awareness, and drive growth.
              However, managing many platforms, creating attractive materials,
              and maintaining continuous activity can be difficult. We at
              Victory Cineworld offer the best social media material management
              services, making your life easier and letting you focus on what
              matters most in your business.
            </p>

            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              As a large social media company, we specialize in advanced
              strategies that match your professional purposes and help your
              brand resonate on different social platforms. Our social media
              management packages involve forming material for community
              engagement and ensuring your social appearance is consistent and
              impressive.
            </p>

            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              We offer social media engagement services to promote connections
              with the public, forming a loyal society around your brand. We
              deliver the best results, whether organic content creation or
              running paid ads on Facebook, Instagram, Twitter, YouTube, or
              LinkedIn.
            </p>

            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              At Victory Cineworld, our expert team is dedicated to boosting
              your brand’s growth through effective social media marketing.
              Let's handle the complications of our online appearance so you can
              focus on running your business.
            </p>
          </div>
        </section>
        <SocialServiceDetails />
      </main>
    </>
  );
};

export default SocialMediaManagement;
