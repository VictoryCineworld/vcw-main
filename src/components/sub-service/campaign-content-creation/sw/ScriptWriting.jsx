import { data } from "@data/services/content-creation-content-designing/campaign-content-creation";
import "swiper/css/bundle";
import SocialMediaService from "./SocialMediaService";
import SocialServiceDetails from "./SocialServiceDetails";
const {
  default: Breadcrumb,
} = require("@components/common/breadcrumb/breadcrumb");
const { default: FooterOne } = require("@layout/footers/footer-one");
const { Header } = require("@layout/index");

const ScriptWriting = () => {
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
              Master Engagement with Script Writing{" "}
            </h4>
            <p
              className="mb-25 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              Content consumption behavior has seen a significant shift. People
              now crave engaging and easily digestible content. That's where
              script writing comes into play. Podcasts and videos are booming!
              They allow businesses to humanize their brand and establish
              thought leadership. But don't forget chatbots and WhatsApp
              messages – they're the future of personalized customer
              interactions!
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
              Why VictoryCineworld for Multimedia Script Writing{" "}
            </h4>
            <p
              className="mb-25 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              Script writing plays a key role in customer service applications.
              Well-crafted scripts ensure consistent and accurate communication,
              enhancing the overall customer experience. They provide a
              structured framework for customer interactions, enabling agents to
              deliver prompt and effective responses.
            </p>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              We embrace AI tools to bring scale, speed, and creativity to our
              content, ensuring you get the best results in no time! Ready to
              take your business to new heights with compelling scripts? Let's
              chat and bring your ideas to life!
            </p>
          </div>
        </section>
        <SocialServiceDetails />
      </main>
    </>
  );
};

export default ScriptWriting;
