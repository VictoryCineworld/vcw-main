import filmsImgOne from "@assets/img/films/films5.jpg";
import filmsImgTwo from "@assets/img/films/films6.jpg";
import filmsImgThere from "@assets/img/films/films8.jpg";
import filmsImgFour from "@assets/img/films/films7.jpg";
import filmsImgFive from "@assets/img/films/films1.jpg";
//portfolio-two-img
import filmsImgSix from "@assets/img/portfolio/img-1.png";
import filmsImgSeven from "@assets/img/portfolio/img-2.png";
import filmsImgEight from "@assets/img/portfolio/img-3.png";
import filmsImgNine from "@assets/img/portfolio/img-4.png";
//home-4 img
import portfolioImgOne from "@assets/img/gallery/01.jpg";
import portfolioImgTwo from "@assets/img/gallery/02.jpg";
import portfolioImgThere from "@assets/img/gallery/03.jpg";
import portfolioImgFour from "@assets/img/gallery/04.jpg";
import portfolioImgFive from "@assets/img/gallery/05.jpg";
import portfolioImgSix from "@assets/img/gallery/06.jpg";
import portfolioImgSeven from "@assets/img/films/films2.jpg";
import portfolioImgEight from "@assets/img/films/films3.jpg";
import portfolioImgNine from "@assets/img/films/films4.jpg";
import portfolioImgTen from "@assets/img/films/films9.jpg";

const PortfolioData = [
  //home-one-data
  {
    id: 1,
    image: filmsImgOne,
    title: "Leonar Pedron",
    subTitle: "Short Films",
    delay: '0.3s',
  },
  {
    id: 2,
    image: filmsImgTwo,
    title: "Twinkle Start",
    subTitle: "Commercial",
    delay: '0.4s',
  },
  {
    id: 3,
    image: filmsImgThere,
    title: "Adrenlia Hem",
    subTitle: "TV Serial",
    delay: '0.5s',
  },
  {
    id: 4,
    image: filmsImgFour,
    subTitle: "Anthology",
    title: "Hero Army Man",
    delay: '0.3s',
  },
  {
    id: 5,
    image: filmsImgFive,
    subTitle: "Short Films",
    title: "Nijhom Jungle",
    delay: '0.4s',
  },
  {
    id: 6,
    image: filmsImgOne,
    subTitle: "Short Films",
    title: "Leonar Pedron",
    delay: '0.5s',
  },
  //home-two-data
  {
    id: 7,
    image: filmsImgSix,
    title: "DANGAL LOVE",
    videoUrl: "RuuL8kWKRH0",
    releaseDate: "Release Date: 25 Jan 2023",
    portfolioItemClass: "fm-featured-thumb-2 img-tilt all__item-fade",
    delay: '0.3s'
  },
  {
    id: 8,
    image: filmsImgSeven,
    title: "DANGAL LOVE",
    videoUrl: "Q6cakR5ZmgU",
    releaseDate: "Release Date: 20 Jan 2023",
    portfolioItemClass: "fm-featured-thumb-2 img-tilt all__item-fade",
    delay: '0.4s'
  },
  {
    id: 9,
    image: filmsImgEight,
    title: "Leonar Pedron",
    videoUrl: "alADc_JX96A",
    releaseDate: "Release Date: 05 Jan 2023",
    portfolioItemClass:
      "fm-featured-thumb-2  featured-img-style img-tilt all__item-fade",
    delay: '0.5s'
  },
  {
    id: 10,
    image: filmsImgNine,
    title: "Leonar Pedron",
    videoUrl: "vBMbEI9gbAc",
    releaseDate: "Release Date: 25 Jan 2022",
    portfolioItemClass: "fm-featured-thumb-2   img-tilt all__item-fade",
    delay: '0.6s'
  },
  //home-4 data
  {
    id: 11,
    image: portfolioImgOne,
    title: (
      <>
        Superman is the <br /> Hero
      </>
    ),
    videoUrl: "4cqkhht7hsk",
    delay: '0.3s',
  },
  {
    id: 12,
    image: portfolioImgTwo,
    title: (
      <>
        Romance between <br /> two soul
      </>
    ),
    videoUrl: "qTcNOQnMKW4",
    delay: '0.4s',
  },
  {
    id: 13,
    image: portfolioImgThere,
    title: (
      <>
        watching movie <br /> is fun
      </>
    ),
    videoUrl: "Sy8nPI85Ih4",
    delay: '0.5s',
  },
  {
    id: 14,
    image: portfolioImgFour,
    title: (
      <>
        Clapperboard entering <br />
        frame
      </>
    ),
    videoUrl: "haGb3DI5B2Y",
    delay: '0.3s',
  },
  {
    id: 15,
    image: portfolioImgFive,
    title: (
      <>
        Young people <br /> watching
      </>
    ),
    videoUrl: "goqqohUitmw",
    delay: '0.4s',
  },
  {
    id: 16,
    image: portfolioImgSix,
    title: (
      <>
        Behind the <br /> scenes
      </>
    ),
    videoUrl: "5hrp26ydmBk",
    delay: '0.5s',
  },
  //portfolio-masonry-data
  {
    id: 17,
    image: filmsImgFive,
    title: "ANGRY MEN",
    date: "04 March 1957",
    videoUrl: "0jxVnlRdelU",
    ratingCount: (
      <>
        4.5<span>(4 reviews)</span>
      </>
    ),
    ratings: [
      { id: 1, icon: "fa-thin fa-star" },
      { id: 2, icon: "fa-thin fa-star" },
      { id: 3, icon: "fa-thin fa-star" },
      { id: 4, icon: "fa-thin fa-star" },
      { id: 5, icon: "fa-thin fa-star" },
    ],
  },
  {
    id: 18,
    image: portfolioImgSeven,
    title: "PULP FICTION",
    date: "22 May 1994",
    videoUrl: "LBBni_-tMNs",
    ratingCount: (
      <>
        4.5<span>(4 reviews)</span>
      </>
    ),
    ratings: [
      { id: 1, icon: "fa-thin fa-star" },
      { id: 2, icon: "fa-thin fa-star" },
      { id: 3, icon: "fa-thin fa-star" },
      { id: 4, icon: "fa-thin fa-star" },
      { id: 5, icon: "fa-thin fa-star" },
    ],
  },

  {
    id: 19,
    image: filmsImgOne,
    title: "THE MATRIX",
    date: "22 March 1999",
    videoUrl: "uXGE0vuuaDo",
    ratingCount: (
      <>
        4.5<span>(4 reviews)</span>
      </>
    ),
    ratings: [
      { id: 1, icon: "fa-thin fa-star" },
      { id: 2, icon: "fa-thin fa-star" },
      { id: 3, icon: "fa-thin fa-star" },
      { id: 4, icon: "fa-thin fa-star" },
      { id: 5, icon: "fa-thin fa-star" },
    ],
  },
  {
    id: 20,
    image: portfolioImgEight,
    title: "INCEPTION",
    date: "02 March 2010",
    videoUrl: "i3-jlhJgU9U",
    ratingCount: (
      <>
        4.5<span>(4 reviews)</span>
      </>
    ),
    ratings: [
      { id: 1, icon: "fa-thin fa-star" },
      { id: 2, icon: "fa-thin fa-star" },
      { id: 3, icon: "fa-thin fa-star" },
      { id: 4, icon: "fa-thin fa-star" },
      { id: 5, icon: "fa-thin fa-star" },
    ],
  },
  {
    id: 21,
    image: portfolioImgNine,
    title: "SE7EN",
    date: "22 March 1995",
    videoUrl: "hImAmM5-Fpg",
    ratingCount: (
      <>
        4.5<span>(4 reviews)</span>
      </>
    ),
    ratings: [
      { id: 1, icon: "fa-thin fa-star" },
      { id: 2, icon: "fa-thin fa-star" },
      { id: 3, icon: "fa-thin fa-star" },
      { id: 4, icon: "fa-thin fa-star" },
      { id: 5, icon: "fa-thin fa-star" },
    ],
  },
  {
    id: 22,
    image: filmsImgTwo,
    title: "STAR WARS",
    date: "22 March 1977",
    videoUrl: "s2hM1tyEL0U",
    ratingCount: (
      <>
        4.5<span>(4 reviews)</span>
      </>
    ),
    ratings: [
      { id: 1, icon: "fa-thin fa-star" },
      { id: 2, icon: "fa-thin fa-star" },
      { id: 3, icon: "fa-thin fa-star" },
      { id: 4, icon: "fa-thin fa-star" },
      { id: 5, icon: "fa-thin fa-star" },
    ],
  },
  {
    id: 23,
    image: filmsImgFour,
    title: "THE PRESTIGE",
    date: "22 March 2006",
    videoUrl: "HT_Vr-3Se6Y",
    ratingCount: (
      <>
        4.5<span>(4 reviews)</span>
      </>
    ),
    ratings: [
      { id: 1, icon: "fa-thin fa-star" },
      { id: 2, icon: "fa-thin fa-star" },
      { id: 3, icon: "fa-thin fa-star" },
      { id: 4, icon: "fa-thin fa-star" },
      { id: 5, icon: "fa-thin fa-star" },
    ],
  },
  {
    id: 24,
    image: filmsImgThere,
    title: "THE SHINNING",
    date: "22 March 1980",
    videoUrl: "WDpipB4yehk",
    ratingCount: (
      <>
        4.5<span>(4 reviews)</span>
      </>
    ),
    ratings: [
      { id: 1, icon: "fa-thin fa-star" },
      { id: 2, icon: "fa-thin fa-star" },
      { id: 3, icon: "fa-thin fa-star" },
      { id: 4, icon: "fa-thin fa-star" },
      { id: 5, icon: "fa-thin fa-star" },
    ],
  },
  {
    id: 25,
    image: portfolioImgTen,
    title: "CITIZEN KANE",
    date: "22 March 1940",
    videoUrl: "z9OUZNicTGU",
    ratingCount: (
      <>
        4.5<span>(4 reviews)</span>
      </>
    ),
    ratings: [
      { id: 1, icon: "fa-thin fa-star" },
      { id: 2, icon: "fa-thin fa-star" },
      { id: 3, icon: "fa-thin fa-star" },
      { id: 4, icon: "fa-thin fa-star" },
      { id: 5, icon: "fa-thin fa-star" },
    ],
  },
  //portfolio slider-data
  {
    id: 26,
    image: portfolioImgEight,
    title: "MULHOLLAND DRIVE",
    subTitle: "DAVID LYNCH",
    videoUrl: "UozhOo0Dt4o",
  },
  {
    id: 27,
    image: filmsImgTwo,
    title: "PLAYHUNT MOON",
    subTitle: "JACK / REBEKA",
    videoUrl: "HIgNgn1VN4g",
  },
  {
    id: 28,
    image: filmsImgOne,
    title: "BRINGING UP BABY",
    subTitle: "HOWARD HAWKS",
    videoUrl: "BVrZAIo3wX4",
  },
  {
    id: 29,
    image: filmsImgFive,
    title: "THE NAVIGATOR",
    subTitle: "BUSTER KEATON",
    videoUrl: "z9OUZNicTGU",
  },
  //portfolio-details-img
];
export default PortfolioData;
