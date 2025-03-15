import { data } from "@data/services/content-creation-content-designing/campaign-content-creation";
import "swiper/css/bundle";
import SocialMediaService from "./SocialMediaService";
import SocialServiceDetails from "./SocialServiceDetails";
const {
  default: Breadcrumb,
} = require("@components/common/breadcrumb/breadcrumb");
const { default: FooterOne } = require("@layout/footers/footer-one");
const { Header } = require("@layout/index");

const InfluencerMarketing = () => {
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
              Best Influencer Marketing Agency Crafting Authentic Connections
              for Your Brand.
            </h4>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              Victory Cineworld is the Best Influencer Marketing Agency,
              delivering influencer marketing services exclusively to B2B
              brands. Our platform effectively reaches target audiences through
              well-built educational and engaging campaigns based on our network
              of over 200,000 verified influencers, content generators, and
              celebrities. The Instagram influencer marketing focus at Victory
              Cineworld enables your brand access to various audiences through
              individualized creative campaigns across YouTube, Facebook,
              TikTok, and Instagram platforms.
            </p>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              Victory Cineworld offers the best influencer marketing services to
              shape effective relationship-building strategies that pair brands
              with appropriate influencers for better market exposure and sales
              requirements. We deliver measurable business outcomes to our
              clients through expert insights into modern market trends.
              Strategic influencer marketing at Victory Cineworld will enhance
              your business development and raise brand visibility. Your brand
              needs advancement now. Visit Victory Cineworld today!
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
              Victory Cineworld: Where B2B Brands Meet Trusted Influencers.
            </h4>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              As an expert in influencer marketing services, Victory Cineworld
              focuses specifically on B2B brand needs. Our work at Victory
              Cineworld through an influencer advantage agency capitalizes on
              our vast pool of verified influencers and professionals to create
              influential marketing efforts that fuel business expansion and
              establish brand trust. Your brand can reach suitable influencers
              because our influencer marketing experts maintain strong
              relationships with influencers specializing in your business
              direction and target audience.
            </p>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              Our influencer outreach activities assist companies in finding
              suitable influencers who develop meaningful content that will
              capture their audience's attention. Through our strategic methods,
              we deliver your brand message to specific audiences who will help
              you reach your marketing objectives, which include brand
              visibility, lead generation, or establishing thought leadership.
              The partnership between Victory Cineworld helps B2B brands unite
              with influencers who generate authentic results that lead to
              business achievement. We will lead your brand into the highest
              possible growth opportunities.
            </p>
          </div>
        </section>
        <SocialServiceDetails />
      </main>
      {/* <FooterOne /> */}
    </>
  );
};

export default InfluencerMarketing;
