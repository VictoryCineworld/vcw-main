import { data } from "@data/services/content-creation-content-designing/campaign-content-creation";
import "swiper/css/bundle";
import SocialMediaService from "./SocialMediaService";
import SocialServiceDetails from "./SocialServiceDetails";
const {
  default: Breadcrumb,
} = require("@components/common/breadcrumb/breadcrumb");
const { default: FooterOne } = require("@layout/footers/footer-one");
const { Header } = require("@layout/index");

const CampaignContentCreation = () => {
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
              Master Engagement with Content Creation{" "}
            </h4>
            <p
              className="mb-25 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              In today’s digital landscape, content creation services have
              become essential for businesses aiming to establish a strong
              online presence. Content creation encompasses a wide range of
              services tailored to meet various marketing needs. By leveraging
              various forms of content, businesses can reach their target
              audience, build credibility, and drive growth. This article will
              explore 20 examples of content creation services, providing
              insights into how each can benefit your business. From social
              media posts to in-depth articles, these services are designed to
              engage audiences and drive growth.
            </p>

            <p
              className="mb-25 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              With videos and podcasts, you can craft captivating narratives
              that resonate with your audience. It's all about delivering your
              message effectively, whether through audio, explainer videos, or
              chatbot interactions.
            </p>

            <p
              className="mb-30 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              By tailoring scripts for different platforms, you can boost user
              engagement and build strong connections. So, if you want to stand
              out and make a lasting impression, start by investing in script
              writing for your brand.
            </p>
          </div>

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
              What Are the Benefits of Content Creation Services?{" "}
            </h4>
            <p
              className="mb-25 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              Content is King” – a classic saying, but let’s amplify it! Content
              isn’t just royalty; it’s the rockstar of conversions. Imagine your
              company as a hit band on a world tour, drawing crowds six times
              larger than competitors without a content strategy. Investing in
              content marketing is like investing in a platinum record – a wise
              investment in time, money, and resources.
            </p>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              Visualize your website as a thriving downtown street. What
              attracts the crowd? Engaging blog posts! Like throwing an
              irresistible block party, frequent quality posts (over 16 per
              month) can quadruple your traffic, as confirmed by HubSpot. It’s
              time to turn up the volume on your site’s traffic.
            </p>
          </div>
        </section>
        <SocialServiceDetails />
      </main>
    </>
  );
};

export default CampaignContentCreation;
