import { data } from "@data/services/content-creation-content-designing/campaign-content-creation";
import "swiper/css/bundle";
import SocialMediaService from "./SocialMediaService";
import SocialServiceDetails from "./SocialServiceDetails";
const {
  default: Breadcrumb,
} = require("@components/common/breadcrumb/breadcrumb");
const { default: FooterOne } = require("@layout/footers/footer-one");
const { Header } = require("@layout/index");

const Seo = () => {
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
              Professional SEO Services{" "}
            </h4>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              Make your online presence with our powerful SEO strategies. At
              Victory Cineworld, we help you improve your online presence with
              our professional search engine optimization services tailored to
              your enterprise goals. Whether you're trying to find SEO services
              near me or looking for effective and affordable SEO services, our
              professional team gives solutions designed to force visitors, grow
              visibility, and improve scores. Our on page SEO services increase
              awareness on optimizing your website’s content, design, and
              personal reveal to ensure it meets search engine necessities.
            </p>

            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              We also offer SEO consulting services to guide your strategy and
              ensure your enterprise stays ahead of the competition. With a
              custom-designed search engine optimization technique, we deliver
              measurable results that foster growth and sustainability in the
              digital world.
            </p>

            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              Partner with Victory Cineworld to use search engine marketing
              expertise to make your business stand out. Visit Victory Cineworld
              to learn more about how our search engine optimization solutions
              allow you to prevail!
            </p>
          </div>

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
              Distinctive Local SEO Services Near You:{" "}
            </h4>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              Catch the wave of successful SEO strategies with us. Promote your
              small company with SEO services for smaller businesses from
              Victory Cineworld. We offer cheap SEO services for small
              businesses, ensuring effective development with sequential
              strategies. Our SEO service package is designed to increase
              visibility, attract targeted traffic, and help your business
              flourish in a digital space.
            </p>
          </div>
        </section>
        <SocialServiceDetails />
      </main>
    </>
  );
};

export default Seo;
