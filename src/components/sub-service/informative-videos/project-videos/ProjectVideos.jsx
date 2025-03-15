import { data } from "@data/services/content-creation-content-designing/campaign-content-creation";
import "swiper/css/bundle";
import SocialMediaService from "./SocialMediaService";
import SocialServiceDetails from "./SocialServiceDetails";
const {
  default: Breadcrumb,
} = require("@components/common/breadcrumb/breadcrumb");
const { default: FooterOne } = require("@layout/footers/footer-one");
const { Header } = require("@layout/index");

const ProjectVideos = () => {
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
              Leading Project Video Production Company India
            </h4>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              {" "}
              Are you looking for top-notch project video services in India?
              Victory Cineworld masters the art of transforming your ideas into
              visual art with our leading video production services. Our team is
              an expert in creating compelling, high-quality projection videos
              that tell your story, impacting your audience. Our team has years
              of experience in the industry and can handle the most challenging
              video projects. We offer a variety of video production services,
              from commercial Video productions to animated video production
              services, with a perfect merging of motion graphics and animation
              Tools, audio tools, and lighting equipment. 
              </p>
              <p  className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}>
              {" "}
              We are just a call
              away from telling your story in the most engaging and creative
              ways with our impactful video projection in India. We can
              creatively and precisely bring your idea to life with our
              explainer video production services, whether you're starting a
              business, documenting an event, or developing a potent marketing
              tool.  
              
              </p>
              
              <p className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}>
              
              At Victory Cineworld, we create videos that captivate and
              connect to your audience and produce stunning results. Our team
              will be there to assist you throughout the process. Lets create
              something great together!
            </p>
          </div>
        </section>
        <SocialServiceDetails />
      </main>
     
    </>
  );
};

export default ProjectVideos;
