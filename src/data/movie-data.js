import movieImgOne from '@assets/img/gallery/07.png';
import movieImgTwo from '@assets/img/gallery/08.png';
import movieImgThere from '@assets/img/gallery/09.png';
import movieImgFour from '@assets/img/gallery/11.png';
import movieImgFive from '@assets/img/gallery/17.png';
//home-5 img
import movieBgOne from '@assets/img/bg/slider-bg3.jpg';
import movieBgTwo from '@assets/img/bg/slider-bg2.jpg';
import movieBgThere from '@assets/img/bg/slider-bg1.jpg';
//all-movie-img
import movieOne from "@assets/img/movie/movie12.jpg";
import movieTwo from "@assets/img/movie/movie15.jpg";
import movieThere from "@assets/img/movie/movie5.jpg";
import movieFour from "@assets/img/movie/movie8.jpg";
import movieFive from "@assets/img/movie/movie14.jpg";
import movieSix from "@assets/img/movie/movie9.jpg";
import movieSeven from "@assets/img/movie/movie20.jpg";
import movieEight from "@assets/img/movie/movie13.jpg";
import movieNine from "@assets/img/movie/movie10.jpg";
import movieTen from "@assets/img/movie/movie17.jpg";
import movieEleven from "@assets/img/movie/movie24.jpg";
import movieTwelve from "@assets/img/movie/movie21.jpg";

import img1 from "@assets/img/new/1.png";
import img2 from "@assets/img/new/2.png";
import img3 from "@assets/img/new/3.png";
import img4 from "@assets/img/new/4.png";
import img5 from "@assets/img/new/5.png";
import img6 from "@assets/img/new/6.png";
import img7 from "@assets/img/new/7.png";
import img8 from "@assets/img/new/8.png";
import img9 from "@assets/img/new/9.png";
import img10 from "@assets/img/new/10.png";




//movie-slider-4 img
import movieThartin from "@assets/img/movie/movie1.jpg";
import movieFourteen from "@assets/img/movie/movie2.jpg";
import movieFifteen from "@assets/img/movie/movie3.jpg";
import movieSixteen from "@assets/img/movie/movie4.jpg";
import movieSeventeen from "@assets/img/movie/movie4.jpg";
//movie-slider-5 img
import movieEighteen from "@assets/img/movie/genre1.jpg";
import movieNineteen from "@assets/img/movie/genre2.jpg";
import movieTwenty from "@assets/img/movie/genre3.jpg";
import movieTwentyOne from "@assets/img/movie/genre4.jpg";
import movieTwentyTwo from "@assets/img/movie/genre5.jpg";
import movieTwentythere from "@assets/img/movie/genre6.jpg";
import movieTwentyFour from "@assets/img/movie/genre7.jpg";
import movieTwentyFive from "@assets/img/movie/movie16.jpg";
import movieTwentySix from "@assets/img/movie/movie19.jpg";
import movieTwentySeven from "@assets/img/movie/movie18.jpg";
import movieTwentyEight from "@assets/img/movie/movie11.jpg";
import movieTwentyNine from "@assets/img/movie/movie6.jpg";
import movieThurty from "@assets/img/movie/movie23.jpg";
//LandingBannerArea-img-movie
import movieBannerOne from "@assets/img/movie/banner1.jpg";
import movieBannerTwo from "@assets/img/movie/banner2.jpg";
import movieBannerThere from "@assets/img/movie/banner3.jpg";
import badgeImg from "@assets/img/movie/premium-badge.png";
// images
import productImgOne from '@assets/img/shop/product1.jpg';
import productImgTwo from '@assets/img/shop/product2.jpg';
import productImgThere from '@assets/img/shop/product3.jpg';
import productImgFour from '@assets/img/shop/product4.jpg';
import productImgFive from '@assets/img/shop/product5.jpg';
import productImgSix from '@assets/img/shop/product6.jpg';
import productImgSeven from '@assets/img/shop/product7.jpg';
import productImgEight from '@assets/img/shop/product8.jpg';
import productImgNine from '@assets/img/shop/product9.jpg';
import productImgTen from '@assets/img/shop/product10.jpg';
import productImgEleven from '@assets/img/shop/product11.jpg';
import productImgTwelve from '@assets/img/shop/product12.jpg';
//shop-movie-img
import shopMovieImg from '@assets/img/shop/side-img/movie1.jpg';
import shopMovieImgTwo from '@assets/img/shop/side-img/movie2.jpg';
import shopMovieImgThere from '@assets/img/shop/side-img/movie3.jpg';
import shopMovieImgFour from '@assets/img/shop/side-img/movie4.jpg';
import shopMovieImgFive from '@assets/img/shop/side-img/movie5.jpg';




const movieData = [
    //shop-sidebar data
    {
        id: 1,
        category: "Adventure",
        image: productImgOne,
        title: 'Python Snake',
        price: "136.00",
        old_price: '230.00',
        icon: 'fa-light fa-cart-shopping',
        retings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ],
        delay: '0.3s'
    },
    {
        id: 2,
        category: "Adventure",
        image: productImgTwo,
        title: 'Comedy Jocker',
        price: "122.00",
        old_price: '',
        icon: 'fa-light fa-cart-shopping',
        retings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ],
        delay: '0.4s'
    },
    {
        id: 3,
        category: "Drama",
        image: productImgThere,
        title: 'Planet Alien',
        price: "133.00",
        old_price: '230.00',
        icon: 'fa-light fa-cart-shopping',
        retings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ],
        delay: '0.5s'
    },
    {
        id: 4,
        category: "Documentary",
        image: productImgFour,
        title: 'Lord of the Rings',
        price: "323.00",
        old_price: '436.00',
        icon: 'fa-light fa-cart-shopping',
        retings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ],
        delay: '0.3s'
    },
    {
        id: 5,
        category: "Adventure",
        image: productImgFive,
        title: 'Star Wars',
        price: "247.00",
        old_price: '',
        icon: 'fa-light fa-cart-shopping',
        retings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ],
        delay: '0.4s'
    },
    {
        id: 6,
        category: "Adventure",
        image: productImgSix,
        title: 'Cobain Morgen',
        price: "136.00",
        old_price: '',
        icon: 'fa-light fa-cart-shopping',
        retings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ],
        delay: '0.5s'
    },
    {
        id: 7,
        category: "Adventure",
        image: productImgSeven,
        title: 'Dream World',
        price: "130.00",
        old_price: '',
        icon: 'fa-light fa-cart-shopping',
        retings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ],
        delay: '0.3s'
    },
    {
        id: 8,
        category: "Documentary",
        image: productImgEight,
        title: 'Ghost Rider',
        price: "140.00",
        old_price: '',
        icon: 'fa-light fa-cart-shopping',
        retings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ],
        delay: '0.4s'
    },
    {
        id: 9,
        category: "Drama",
        image: productImgNine,
        title: 'Black Wood',
        price: "120.00",
        old_price: '',
        icon: 'fa-light fa-cart-shopping',
        retings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ],
        delay: '0.5s'
    },
    {
        id: 10,
        category: "Adventure",
        image: productImgTen,
        title: 'White Goat',
        price: "166.00",
        old_price: '',
        icon: 'fa-light fa-cart-shopping',
        retings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ],
        delay: '0.3s'
    },
    {
        id: 11,
        category: "Action",
        image: productImgEleven,
        title: 'Behind the mask',
        price: "155.00",
        old_price: '',
        icon: 'fa-light fa-cart-shopping',
        retings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ],
        delay: '0.4s'
    },
    {
        id: 12,
        category: "Romance",
        image: productImgTwelve,
        title: 'Eva the bird',
        price: "166.00",
        old_price: '',
        icon: 'fa-light fa-cart-shopping',
        retings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ],
        delay: '0.5s'
    },
    //shop-movie-data
    {
        id: 13,
        image: shopMovieImg,
        title: 'Flowers Earings',
        price: "178.00",
        retings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ]
    },
    {
        id: 14,
        image: shopMovieImgTwo,
        title: 'Beaded Blouson',
        price: "206.00",
        retings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ]
    },
    {
        id: 15,
        image: shopMovieImgThere,
        title: 'Adrianna Queen',
        price: "302.00",
        retings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ]
    },
    {
        id: 16,
        image: shopMovieImgFour,
        title: 'The Captain',
        price: "564.00",
        retings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ]
    },
    {
        id: 17,
        image: shopMovieImgFive,
        title: 'The Worldwar',
        price: "564.00",
        retings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ]
    },

    //home-5 data
    {
        id: 18,
        image: movieBgOne,
        title: 'The Captain',
        duration: '2h: 33m: 34s',
        videoUrl: 'D_zSFeHfglc',
        movieTag: 'Movie'
    },
    {
        id: 19,
        image: movieBgTwo,
        title: 'Star Treck',
        duration: '1h: 33m: 34s',
        videoUrl: 'qqj86pQelvI',
        movieTag: 'TELEFILM'
    },
    {
        id: 20,
        image: movieBgThere,
        title: 'King Kong',
        duration: '2h: 33m: 34s',
        videoUrl: 'bi2OPrRwSTk',
        movieTag: 'DRAMA'
    },
    //movie-5 
    {
        id: 21,
        image: movieOne,
        category: "Cinema",
        title: 'Jocker Istya',
        duration: '2: 57: 13',
        videoUrl: 'zAGVQLHvwOY',
        views: '25k views',
        tradingTime: '8 mins',
        rettings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star-half-alt' },
        ],
        delay: "0.3s"
    },
    {
        id: 22,
        image: movieTwo,
        category: "Movie",
        title: 'The Stage Show',
        duration: '1: 57: 13',
        videoUrl: 'o-gLbgpzCc8',
        views: '15k views',
        tradingTime: '5 mins',
        rettings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star-half-alt' },
        ],
        delay: "0.4s"
    },
    {
        id: 23,
        image: movieThere,
        category: "Cinema",
        title: 'Super Playboy',
        duration: '1: 57: 13',
        videoUrl: 'HitCDZMhnAo',
        views: '20k views',
        tradingTime: '25 mins',
        rettings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star-half-alt' },
        ],
        delay: "0.5s"
    },
    {
        id: 24,
        image: movieFour,
        category: "Movie",
        title: 'Brave vs Juky',
        duration: '1: 17: 13',
        videoUrl: '-W2M9-B4NtM',
        views: '27k views',
        tradingTime: '12 mins',
        rettings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star' },
        ],
        delay: "0.3s"
    },
    {
        id: 25,
        image: movieFive,
        category: "Cinema",
        title: 'Love the Ocean',
        duration: '1: 16: 12',
        videoUrl: 'CSgDjZ_Vv8g',
        views: '35k views',
        tradingTime: '10 mins',
        rettings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star' },
        ],
        delay: "0.4s"
    },
    {
        id: 26,
        image: movieSix,
        category: "Movie",
        title: 'Natasha Dipoly',
        duration: '1: 14: 10',
        videoUrl: 'EaKjLMp7Nvc',
        views: '34k views',
        tradingTime: '17 mins',
        rettings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star-half-alt' },
        ],
        delay: "0.5s"
    },
    {
        id: 27,
        image: movieSeven,
        category: "Cinema",
        title: 'Dark Bhoot Bari',
        duration: '1: 11: 16',
        videoUrl: 'Z_dKEbhNUnk',
        views: '40k views',
        tradingTime: '18 mins',
        rettings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star' },
        ],
        delay: "0.3s"
    },
    {
        id: 28,
        image: movieEight,
        category: "Telefilm",
        title: "The Winner's Goal",
        duration: '1: 10: 13',
        videoUrl: 'LtyS7GLb8bI',
        views: '26k views',
        tradingTime: '13 mins',
        rettings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star-half-alt' },
        ],
        delay: "0.4s"
    },
    {
        id: 29,
        image: movieNine,
        category: "Telefilm",
        title: "Fight for Night",
        duration: '1: 13: 13',
        videoUrl: 'tBBk4m4mLfU',
        views: '29k views',
        tradingTime: '19 mins',
        rettings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star-half-alt' },
        ],
        delay: "0.5s"
    },
    {
        id: 30,
        image: movieTen,
        category: "drama",
        title: "King of Kingdom",
        duration: '1: 23: 35',
        videoUrl: 'IKeipHEiulE',
        views: '24k views',
        tradingTime: '40 mins',
        rettings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star' },
        ],
        delay: "0.3s"
    },
    {
        id: 31,
        image: movieEleven,
        category: "Telefilm",
        title: "Miracle Football",
        duration: '1: 22: 35',
        videoUrl: 'PXiQWDtiaDc',
        views: '45k views',
        tradingTime: '35 mins',
        rettings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star' },
        ],
        delay: "0.4s"
    },
    {
        id: 32,
        image: movieTwelve,
        category: "Drama",
        title: "Smart Lady Don",
        duration: '2: 57: 13',
        videoUrl: 'uUE3S7oOwWw',
        views: '20k views',
        tradingTime: '8 mins',
        rettings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star-half-alt' },
        ],
        delay: "0.5s"
    },
    //movie-data
    {
        id: 33,
        image: movieBgOne,
        title: 'The Captain',
        duration: '21h: 33m: 34s',
        videoUrl: 'D_zSFeHfglc',
        movieTag: 'Movie',
        views: '8k views',
        movieBtn: 'View Details',
        review: <>4.9 <span>( 4 reviews )</span></>,
        movieLanguage: <><strong>Languages:</strong>English</>,
        adventure: <><strong>Genre:</strong>Action, Adventure</>,
        cast: <><strong>Cast:</strong>John,Miner, Juliet, Peek, Heyman</>,
        description: <>The movie revolves around the surgical strike executed by <br />the Army on suspected militants.</>,
    },
    {
        id: 34,
        image: movieBgTwo,
        title: 'Star Treck',
        duration: '21h: 33m: 34s',
        videoUrl: 'qqj86pQelvI',
        movieTag: 'Movie',
        views: '9k views',
        movieBtn: 'View Details',
        review: <>4.4 <span>( 4.5 reviews )</span></>,
        movieLanguage: <><strong>Languages:</strong>English</>,
        adventure: <><strong>Genre:</strong>Action, Adventure</>,
        cast: <><strong>Cast:</strong>John,Miner, Juliet, Peek, Heyman</>,
        description: <>The movie revolves around the surgical strike executed by <br />the Army on suspected militants.</>,
    },
    {
        id: 35,
        image: movieBgThere,
        title: 'King Kong',
        duration: '2h: 33m: 34s',
        videoUrl: 'bi2OPrRwSTk',
        movieTag: 'Movie',
        views: '8k views',
        movieBtn: 'View Details',
        review: <>4.7 <span>( 5 reviews )</span></>,
        movieLanguage: <><strong>Languages:</strong>English</>,
        adventure: <><strong>Genre:</strong>Action, Adventure</>,
        cast: <><strong>Cast:</strong>John,Miner, Juliet, Peek, Heyman</>,
        description: <>The movie revolves around the surgical strike executed by <br />the Army on suspected militants.</>,
    },
    //movie-slider-4 data
    {
        id: 36,
        image: movieThartin,
        title: "Dhoom Rockstar",
        duration: '2: 57: 13',
        videoUrl: '92SovhHRekk',
        views: '25k views',
        tradingTime: '8 mins',
        rettings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ],
        delay: '0.3s'
    },
    {
        id: 37,
        image: movieFourteen,
        title: "Dexter New Blood",
        duration: '3: 17: 13',
        videoUrl: 'mzUx1hyL-yk',
        views: '20k views',
        tradingTime: '9 mins',
        rettings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ],
        delay: '0.4s'
    },
    {
        id: 38,
        image: movieFifteen,
        title: "Blood & Revenge",
        duration: '1: 40: 13',
        videoUrl: 'VrsRMLdPO0I',
        views: '20k views',
        tradingTime: '8 mins',
        badgeImg: badgeImg,
        rettings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ],
        delay: '0.5s'
    },
    {
        id: 39,
        image: movieSixteen,
        title: "Cold Ice War",
        duration: '2: 47: 13',
        videoUrl: 'INxRqDnY_BY',
        views: '27k views',
        tradingTime: '12 mins',
        rettings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ],
        delay: '0.6s'
    },
    {
        id: 40,
        image: movieThere,
        title: "The Captain",
        duration: '2: 57: 13',
        videoUrl: 'WF-lEEpVm5E',
        views: '22k views',
        tradingTime: '10 mins',
        badgeImg: badgeImg,
        rettings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ],
        delay: '0.7s'
    },
    //movie-slider-5 data
    {
        id: 41,
        image: movieEighteen,
        movieTag: 'Action',
        MovieBtn: "Action",
        imgBgColorClass: 'fm-landing-genre-single-img fm-landing-genre-single-imgbgclr-1',
        delay: '0.3s'
    },
    {
        id: 42,
        image: movieNineteen,
        movieTag: 'Drama',
        MovieBtn: "Drama",
        imgBgColorClass: 'fm-landing-genre-single-img fm-landing-genre-single-imgbgclr-2',
        delay: '0.4s'
    },
    {
        id: 43,
        image: movieTwenty,
        movieTag: 'Adventure',
        MovieBtn: "Adventure",
        imgBgColorClass: 'fm-landing-genre-single-img fm-landing-genre-single-imgbgclr-3',
        delay: '0.5s'
    },
    {
        id: 44,
        image: movieTwentyOne,
        movieTag: 'Cartoon',
        MovieBtn: "Cartoon",
        imgBgColorClass: 'fm-landing-genre-single-img fm-landing-genre-single-imgbgclr-4',
        delay: '0.6s'
    },
    {
        id: 45,
        image: movieTwentyTwo,
        movieTag: 'Comedy',
        MovieBtn: "Comedy",
        imgBgColorClass: 'fm-landing-genre-single-img fm-landing-genre-single-imgbgclr-5',
        delay: '0.7s'
    },
    {
        id: 46,
        image: movieTwentythere,
        movieTag: 'Horror',
        MovieBtn: "Horror",
        imgBgColorClass: 'fm-landing-genre-single-img fm-landing-genre-single-imgbgclr-6',
        delay: '0.8s'
    },
    {
        id: 47,
        image: movieTwentyFour,
        movieTag: 'Telefilm',
        MovieBtn: "Telefilm",
        imgBgColorClass: 'fm-landing-genre-single-img fm-landing-genre-single-imgbgclr-2',
        delay: '0.9s'
    },
    ////movie-slider-6 data
    {
        id: 48,
        image: movieEleven,
        badgeImg: badgeImg,
        title: 'Smart Lady Don',
        duration: '2: 30: 13',
        videoUrl: 'fy_NbP1WOsk',
        views: '35k views',
        tradingTime: '17 mins',
        rettings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ]
    },
    {
        id: 49,
        image: movieFifteen,
        badgeImg: badgeImg,
        title: 'Blood & Revenge',
        duration: '2: 10: 13',
        videoUrl: 'VrsRMLdPO0I',
        views: '22k views',
        tradingTime: '14 mins',
        rettings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ]
    },
    {
        id: 50,
        image: movieTwelve,
        badgeImg: badgeImg,
        title: 'Natasha Dipoly',
        duration: '2: 17: 13',
        videoUrl: 'EaKjLMp7Nvc',
        views: '16K views',
        tradingTime: '17 mins',
        rettings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ]
    },
    {
        id: 51,
        image: movieTwentyFive,
        badgeImg: badgeImg,
        title: 'Hally Jolly',
        duration: '1: 40: 13',
        videoUrl: 'I__eSGOcjAI',
        views: '20k views',
        tradingTime: '14 mins',
        rettings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ]
    },
    {
        id: 52,
        image: movieTwentySix,
        badgeImg: badgeImg,
        title: 'Fair & Lovely',
        duration: '1: 57: 13',
        videoUrl: 'RPZ-SutaCkY',
        views: '25k views',
        tradingTime: '8 mins',
        rettings: [
            { id: 1, icon: 'fa-solid fa-star' },
            { id: 2, icon: 'fa-solid fa-star' },
            { id: 3, icon: 'fa-solid fa-star' },
            { id: 4, icon: 'fa-solid fa-star' },
            { id: 5, icon: 'fa-solid fa-star' },
        ]
    },
    //LandingBannerArea-movie-data
    {
        id: 53,
        image: movieBannerOne,
        title: <>Super Action <br />Movie</>,
        subText: 'Best Action',
        movieBtn: 'Watch Now',
        delay: '0.3s'
    },
    {
        id: 54,
        image: movieBannerTwo,
        title: <>Kids Cartoon <br />Movie</>,
        subText: 'Kids favorite',
        movieBtn: 'Watch Now',
        delay: '0.4s'
    },
    {
        id: 55,
        image: movieBannerThere,
        title: <>Entertain <br />TV Serial</>,
        subText: 'Romance',
        movieBtn: 'Watch Now',
        delay: '0.5s'
    },
    //movie-slider-six-data
    {
        id: 56,
        image: img1
    },
    {
        id: 57,
        image: img2
    },
    {
        id: 58,
        image: img3
    },
    {
        id: 59,
        image: img4
    },
    {
        id: 60,
        image: img5
    },
    {
        id: 61,
        image: img6
    },
    {
        id: 62,
        image: img7
    },
    {
        id: 63,
        image: img8
    },
    {
        id: 64,
        image: img9
    },
    {
        id: 65,
        image: img10
    },
    {
        id: 66,
        image: movieThurty
    },
    {
        id: 67,
        image: movieEleven
    },
    {
        id: 68,
        image: movieFour
    },
    {
        id: 69,
        image: movieSix
    },
    {
        id: 70,
        image: movieTwo
    },
    {
        id: 71,
        image: movieFive
    },
    //home data
    {
        id: 72,
        image: movieImgOne,
        title: 'Action Movie',
        releaseDate: 'Release Date: 25 June 2022',
        videoUrl: 'bykKsJUuuSM',
    },
    {
        id: 73,
        image: movieImgTwo,
        title: 'Comedy Movie',
        releaseDate: 'Release Date: 30 Jan 2021',
        videoUrl: 'irp_XBZz2R0'
    },
    {
        id: 74,
        image: movieImgThere,
        title: 'Thriller Movie',
        releaseDate: 'Release Date: 10 June 2023',
        videoUrl: '1N8RhiBJnY8'
    },
    {
        id: 75,
        image: movieImgFour,
        title: 'Horror Movie',
        releaseDate: 'Release Date: 25 June 2022',
        videoUrl: 'lY9RyEUP5Mk'
    },
    {
        id: 76,
        image: movieImgFive,
        title: 'Superhero Movie',
        releaseDate: 'Release Date: 15 Dec 2022',
        videoUrl: 'pUxwiGRmzdU'
    },


]

export default movieData;   