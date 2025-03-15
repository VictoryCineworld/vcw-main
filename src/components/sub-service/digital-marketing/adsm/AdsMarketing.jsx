import { data } from "@data/services/content-creation-content-designing/campaign-content-creation";
import "swiper/css/bundle";
import SocialMediaService from "./SocialMediaService";
import SocialServiceDetails from "./SocialServiceDetails";
const {
  default: Breadcrumb,
} = require("@components/common/breadcrumb/breadcrumb");
const { default: FooterOne } = require("@layout/footers/footer-one");
const { Header } = require("@layout/index");

const AdsMarketing = () => {
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
          {/* <SocialMediaService /> */}

          <div className="col-xxl-12 pl-55 pr-40 w-100 mt-180">
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
              End-to-End Documentary Film Production Service
            </h4>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              Victory Cineworld is a documentary production company that offers
              the top documentary film making service, ensuring that your
              visions come to life from concept to completion. We are a
              practiced old-hand documentary film company that delivers
              informative and captivating documentaries that are educational,
              informational, and promotional purposes. We are experienced
              filmmakers and storytellers with years of expertise in documentary
              film productions. We create engaging narratives that cover a wide
              range of topics, including science, history, real-life events,
              people, etc.
            </p>

            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              As a creative documentary video production company, each
              documentary is crafted with passion and dedication that educates,
              motivates, and entertains audiences. We craft stories that not
              only grab attention but also offer audiences deep understanding.
              Our documentary film producers go through a deep research process
              to create a compelling script with high-quality production. We
              ensure that each project we deliver leaves a lasting impact on
              your audience.
            </p>
          </div>
        </section>
        <SocialServiceDetails />
      </main>
    </>
  );
};

export default AdsMarketing;
