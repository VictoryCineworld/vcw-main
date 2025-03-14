import "swiper/css/bundle";
import SocialMediaService from "./SocialMediaService";
import SocialServiceDetails from "./SocialServiceDetails";

const PostProduction = () => {
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
              How Post Production Enhances Brand Value?
            </h4>
            <p
              className="mb-25 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              Customers are influenced by high-quality post-production in all forms of media. It is crucial to deliver visually compelling and professionally edited content to engage audiences effectively. A well-executed post-production process enhances storytelling, making content more immersive and impactful.
            </p>

            <p
              className="mb-25 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              The primary objective of post-production is to refine raw footage into a polished final product that resonates with the target audience. It involves video editing, color correction, sound design, and special effects to elevate content quality.
            </p>

            <p
              className="mb-30 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              VictoryCineworld is a one-stop solution for professional post-production services. Our team of experienced editors, sound designers, and visual effects artists ensure your content meets the highest standards. We specialize in video editing, animation, motion graphics, and more.
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
              Why Choose Professional Post Production Services?
            </h4>
            <p
              className="mb-25 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              Choosing a professional post-production agency ensures that your content stands out with high production quality. It helps businesses create visually stunning content that captivates and retains audiences, enhancing brand credibility.
            </p>
            <p
              className="mb-55 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              Post-production is crucial for refining visual and audio elements, ensuring a seamless viewing experience. At VictoryCineworld, we leverage advanced editing techniques and industry-standard tools to transform raw footage into high-quality productions that leave a lasting impact.
            </p>
          </div>
        </section>
        <SocialServiceDetails />
      </main>
    </>
  );
};

export default PostProduction;
