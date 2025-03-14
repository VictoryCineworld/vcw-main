//banner-img
import bannerImgOne from "@assets/img/slider/award1.png";
import bannerImgTwo from "@assets/img/slider/award2.png";
import bannerImgThere from "@assets/img/slider/award3.png";
//bg-img-home-one
import bgImageOne from "@assets/img/slider/videoproduction.jpg";
import bgImageTwo from "@assets/img/slider/ContentCreation.png";
import bgImageThere from "@assets/img/slider/dm-3.webp";
import bgFour from "@assets/img/slider/ItServices.jpg";
// import bgFive from "@assets/img/slider/it-1.avif";
//bg-img-home-four
import bgImageFour from "@assets/img/slider/it-2.jpg";
import bgImageFive from "@assets/img/slider/home-5/slider-4.jpg";
import bgImageSix from "@assets/img/slider/fp-2.jpg";
import bgImageSeven from "@assets/img/slider/home-5/slider-3.jpg";

const SliderItem = [
  //home-one
  {
    id: 1,
    images: [
      { id: 1, image: bannerImgOne },
      { id: 2, image: bannerImgTwo },
      { id: 3, image: bannerImgThere },
    ],
    sliderBg: bgImageOne,
    sliderTitle: (
      <>
        VIDEO <br />
        PRODUCTION
      </>
    ),
    sliderSubtitle: "I'M FILM DIRECTOR",
    description:
      "Victory delivers stunning visuals and compelling narratives. We specialize in crafting high-quality videos and designs that captivate your audience and drive results.",
    sliderbtn: "VIDEO PRODUCTION",
    sliderbtnLink: "/services/video-production/video-production-services",
  },
  {
    id: 2,
    images: [
      { id: 1, image: bannerImgOne },
      { id: 2, image: bannerImgTwo },
      { id: 3, image: bannerImgThere },
    ],
    sliderBg: bgImageTwo,
    sliderTitle: (
      <>
        CONTENT
        <br />
        CREATION
      </>
    ),
    sliderSubtitle: "I'M VIDEO EDITOR",
    description:
      "We create compelling content that engages your audience. Our team of skilled writers and content designers can produce a wide range of carefully curated content.",
    dataDelay: ".2s",
    sliderbtn: "CONTENT CREATION",
    sliderbtnLink:
      "/services/content-creation-content-designing/campaign-content-creation",
  },
  {
    id: 3,
    images: [
      { id: 1, image: bannerImgOne },
      { id: 2, image: bannerImgTwo },
      { id: 3, image: bannerImgThere },
    ],
    sliderBg: bgImageThere,
    sliderTitle: (
      <>
        DIGITAL <br />
        MARKETING
      </>
    ),
    sliderSubtitle: "I'M SCRIPTWRITTE",
    description:
      "We help businesses grow online. Our digital marketing services help you reach your target audience, increase brand awareness and drive conversions.",
    dataDelay: ".4s",
    sliderbtn: "DIGITAL MARKETING",
    sliderbtnLink: "/services/digital-marketing/social-media-management",
  },
  //home-4
  {
    id: 4,
    images: [
      { id: 1, image: bannerImgOne },
      { id: 2, image: bannerImgTwo },
      { id: 3, image: bannerImgThere },
    ],
    sliderBg: bgImageFour,
    sliderTitle: (
      <>
        IT <br />
        SERVICES
      </>
    ),
    description:
      "Victory offers a comprehensive range of IT services designed to empower businesses. Our skilled team provides innovative solutions tailored to your specific needs. ",
    bannerBtn: "ContactUs",
    sliderbtn: "IT SERVICES",
    sliderbtnLink: "/services/it-services/web-design-development",
  },
  {
    id: 5,
    images: [
      { id: 1, image: bannerImgOne },
      { id: 2, image: bannerImgTwo },
      { id: 3, image: bannerImgThere },
    ],
    sliderBg: bgFour,
    sliderTitle: (
      <>
        POST <br />
        PRODUCTION
      </>
    ),
    bannerBtn: "ContactUs",
    sliderbtn: "Post Production",
    description:
      "Post-production refines and enhances every frame with precision, creativity, and technical expertise. From editing to sound design, we craft a seamless and captivating final product.",
    sliderbtnLink: "/services/video-production/post-production",
  },
  {
    id: 6,
    images: [
      { id: 1, image: bannerImgOne },
      { id: 2, image: bannerImgTwo },
      { id: 3, image: bannerImgThere },
    ],
    sliderBg: bgImageSix,
    sliderTitle: (
      <>
        CREATIVE FILM <br />
        PRODUCTION
      </>
    ),
    bannerBtn: "ContactUs",
    sliderbtn: "Film Production",
    description:
      "Creative film production brings ideas to life with innovation, storytelling, and cinematic excellence. We transform visions into visually captivating and engaging experiences.",
    sliderbtnLink: "/services/video-production/product-shoot",
  },
  {
    id: 7,
    images: [
      { id: 1, image: bannerImgOne },
      { id: 2, image: bannerImgTwo },
      { id: 3, image: bannerImgThere },
    ],
    sliderBg: bgImageSeven,
    sliderTitle: (
      <>
        APPROACH WITH <br />
        WORK
      </>
    ),
    bannerBtn: "ContactUs",
  },
];
export default SliderItem;
