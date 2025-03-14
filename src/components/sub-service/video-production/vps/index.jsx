import "swiper/css/bundle";
import SocialMediaService from "./SocialMediaService";
import SocialServiceDetails from "./SocialServiceDetails";

const VideoProductionService = () => {
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
              Lights, Camera, Leads{" "}
            </h4>
            <p
              className="mb-25 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              We’re living in the golden age of video. As of 2023, 91% of
              businesses use video as a marketing tool, compared to just 61% in
              2016*. And it’s no wonder — from TikTok, to YouTube, to Instagram
              Reels, video is having a Big Moment.
            </p>

            <p
              className="mb-25 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              At Vital, we’ve long known that video marketing can be an
              important part of your digital marketing strategy. Not only do
              videos give a face and voice to your business, they provide high
              SEO value for your website — not to mention, marketing campaigns
              that include video see a 54% higher conversion rate!**! Google is
              also getting better at recognizing and reading video content,
              bumping pages with video that much higher up the search engine
              results page (SERP).
            </p>

            <p
              className="mb-30 ml-25 "
              style={{ textAlign: "justify", width: "93%" }}
            >
              If you’re new to video, or don’t know where to begin, or don’t
              have the time to create fresh content — don’t worry. Our video
              production services department is here to help.
            </p>
          </div>

       
        </section>
        <SocialServiceDetails />
      </main>
    </>
  );
};

export default VideoProductionService;
