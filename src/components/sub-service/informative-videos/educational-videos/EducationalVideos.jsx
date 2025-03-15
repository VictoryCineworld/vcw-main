import { data } from "@data/services/content-creation-content-designing/campaign-content-creation";
import "swiper/css/bundle";
import SocialMediaService from "./SocialMediaService";
import SocialServiceDetails from "./SocialServiceDetails";
const {
  default: Breadcrumb,
} = require("@components/common/breadcrumb/breadcrumb");
const { default: FooterOne } = require("@layout/footers/footer-one");
const { Header } = require("@layout/index");

const EducationalVideos = () => {
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
              Drive Results with Impactful Educational Videos Production
            </h4>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              Educational video production services play a key role in today’s
              learning environment, where interaction is essential. Through
              these impactful educational videos, you can create videos for
              businesses, schools, universities, and online learning platforms.
              These videos offer short and precise information that focuses on
              the importance and relevant points. Educational video production
              delivers interesting and engaging content for viewers that grabs
              quick attention, often leading to better knowledge retention.
            </p>

            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              Therefore, video production for education covers different types
              of subjects, whether school, university, corporate, or other
              business video production. These videos help create educational
              videos that make difficult learning easier and more understandable
              for the target audience.
            </p>

            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              At Victory Cineworld, an educational video production company, we
              have delivered a wide range of educational video production
              services that align with the subject goals and drive results. Our
              education video production team has a knack for creating videos
              that are entertaining, engaging, and informative, which makes
              video production easier to understand the subject matter. Let us
              help you create educational videos that make understanding and
              learning easy.
            </p>
          </div>
        </section>
        <SocialServiceDetails />
      </main>
    </>
  );
};

export default EducationalVideos;
