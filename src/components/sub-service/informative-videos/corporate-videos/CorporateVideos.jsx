import { data } from "@data/services/content-creation-content-designing/campaign-content-creation";
import "swiper/css/bundle";
import SocialMediaService from "./SocialMediaService";
import SocialServiceDetails from "./SocialServiceDetails";
const {
  default: Breadcrumb,
} = require("@components/common/breadcrumb/breadcrumb");
const { default: FooterOne } = require("@layout/footers/footer-one");
const { Header } = require("@layout/index");

const CorporateVideos = () => {
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
        <section className="case-details-area ">
          <SocialMediaService />

          <div className="col-xxl-12 pl-55 pr-40 w-100 ">
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
              Corporate Video Production that Connects and Engages
            </h4>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              As a corporate video company, we build corporate videos that
              enable you to step forward by showing your brand message and
              capturing your audience's attention while demonstrating your
              one-of-a-kind qualities. Our professional team produces
              high-quality videos for corporate purposes, including company
              introduction, new product promotion, or organizational value
              exposure.
            </p>

            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              The first step of our corporate film making service involves
              learning about your brand while studying your goals. Your target
              audience will get direct information from each video we develop by
              working together to create concepts that align with your vision.
              Our team leads the scriptwriting process before handling all film
              production work until we finalize the video edits.
            </p>

            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              At Victory Cineworld, we create professional corporate video
              production for business and transmit your content in a form that
              effectively and directly engages your audience. We guarantee you
              will receive creative and appealing finished video content, from
              promotional videos to customer testimonials and internal training
              material, regardless of the project type.
            </p>
          </div>
        </section>
        <SocialServiceDetails />
      </main>
    </>
  );
};

export default CorporateVideos;
