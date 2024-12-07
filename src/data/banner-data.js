//banner-img
import bannerImgOne from '@assets/img/slider/award1.png';
import bannerImgTwo from '@assets/img/slider/award2.png';
import bannerImgThere from '@assets/img/slider/award3.png';
//bg-img-home-one
import bgImageOne from '@assets/img/slider/director.jpg';
import bgImageTwo from '@assets/img/slider/director1.jpg';
import bgImageThere from '@assets/img/slider/director2.jpg';
//bg-img-home-four
import bgImageFour from '@assets/img/slider/home-5/slider-1.jpg';
import bgImageFive from '@assets/img/slider/home-5/slider-4.jpg';
import bgImageSix from '@assets/img/slider/home-5/slider-2.jpg';
import bgImageSeven from '@assets/img/slider/home-5/slider-3.jpg';



const SliderItem = [
    //home-one
    {
        id: 1,
        images: [
            { id: 1, image: bannerImgOne },
            { id: 2, image: bannerImgTwo },
            { id: 3, image: bannerImgThere }
        ],
        sliderBg: bgImageOne,
        sliderTitle: <>DAVID <br />ANDERSON</>,
        sliderSubtitle: "I'M FILM DIRECTOR",
        description: 'Faime Production Is A Full—Service Production House Based Out Of Indonesia And Singapore That Hosts A Thriving Roster Of Directors.',
        sliderbtn: 'Contact Me'
    },
    {
        id: 2,
        images: [
            { id: 1, image: bannerImgOne },
            { id: 2, image: bannerImgTwo },
            { id: 3, image: bannerImgThere }
        ],
        sliderBg: bgImageTwo,
        sliderTitle: <>DAVID <br />JHONSON</>,
        sliderSubtitle: "I'M VIDEO EDITOR",
        description: 'Faime Production Is A Full—Service Production House Based Out Of Indonesia And Singapore That Hosts A Thriving Roster Of Directors.',
        dataDelay: '.2s',
        sliderbtn: 'Contact Me'
    },
    {
        id: 3,
        images: [
            { id: 1, image: bannerImgOne },
            { id: 2, image: bannerImgTwo },
            { id: 3, image: bannerImgThere }
        ],
        sliderBg: bgImageThere,
        sliderTitle: <>RUSSO <br />BROTHERS</>,
        sliderSubtitle: "I'M SCRIPTWRITTE",
        description: 'Faime Production Is A Full—Service Production House Based Out Of Indonesia And Singapore That Hosts A Thriving Roster Of Directors.',
        dataDelay: '.4s',
        sliderbtn: 'Contact Me'
    },
    //home-4
    {
        id: 4,
        images: [
            { id: 1, image: bannerImgOne },
            { id: 2, image: bannerImgTwo },
            { id: 3, image: bannerImgThere }
        ],
        sliderBg: bgImageFour,
        sliderTitle: <>LOVE SWEET <br />DREAMS</>,
        bannerBtn: 'ContactUs'
    },
    {
        id: 5,
        images: [
            { id: 1, image: bannerImgOne },
            { id: 2, image: bannerImgTwo },
            { id: 3, image: bannerImgThere }
        ],
        sliderBg: bgImageFive,
        sliderTitle: <>DREAMS MAKE <br />REALITY</>,
        bannerBtn: 'ContactUs'
    },
    {
        id: 6,
        images: [
            { id: 1, image: bannerImgOne },
            { id: 2, image: bannerImgTwo },
            { id: 3, image: bannerImgThere }
        ],
        sliderBg: bgImageSix,
        sliderTitle: <>CREATIVE FILM <br />MAKER</>,
        bannerBtn: 'ContactUs'
    },
    {
        id: 7,
        images: [
            { id: 1, image: bannerImgOne },
            { id: 2, image: bannerImgTwo },
            { id: 3, image: bannerImgThere }
        ],
        sliderBg: bgImageSeven,
        sliderTitle: <>APPROACH WITH <br />WORK</>,
        bannerBtn: 'ContactUs'
    },


]
export default SliderItem;

