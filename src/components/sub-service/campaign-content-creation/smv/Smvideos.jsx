import { data } from "@data/services/content-creation-content-designing/social-media-videos";
import "swiper/css/bundle";
import SocialMediaService from "./SocialMediaService";
import SocialServiceDetails from "./SocialServiceDetails";
const {
  default: Breadcrumb,
} = require("@components/common/breadcrumb/breadcrumb");
const { default: FooterOne } = require("@layout/footers/footer-one");
const { Header } = require("@layout/index");

const Smvideos = () => {
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
              Social Media Video Services: Elevating Your Brand’s Digital
              Presence
            </h4>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              At Victory Cineworld, we specialize in creating high-quality
              social media videos that help brands connect with their audiences.
              Our services range from short-form video creation for platforms
              like Instagram Reels and TikTok to full-scale YouTube video
              production. Whether it's motion graphics, video editing, or live
              streaming, our team ensures that every frame delivers impact. We
              tailor each video to match your brand’s identity and marketing
              goals, helping you increase engagement and reach new audiences.
              Let’s work together to enhance your digital presence with
              compelling social media content.
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
              Social Media Video Services: Creating Content That Resonates
            </h4>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              In today's digital world, social media videos play a crucial role
              in capturing audience attention and driving engagement. At Victory
              Cineworld, we craft high-impact video content tailored for
              platforms like Instagram, TikTok, LinkedIn, and YouTube. From
              short-form, creator-led videos to professionally edited motion
              graphics and live-streaming services, we ensure every frame aligns
              with your brand’s identity. Our expertise extends to both organic
              and paid content, helping businesses maximize reach, build trust,
              and convert viewers into loyal customers. Let’s bring your brand
              to life with compelling, platform-specific social media video
              content.
            </p>
          </div>
        </section>
        <SocialServiceDetails/>
      </main>
    </>
  );
};

export default Smvideos;
