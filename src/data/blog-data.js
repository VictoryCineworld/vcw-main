// images
import img_1 from '@assets/img/portfolio/blog-1.png';
import img_2 from '@assets/img/portfolio/blog-2.png';
import img_3 from '@assets/img/portfolio/blog-3.png';
//home-4 image
import blogImgOne from '@assets/img/blog/blog1.jpg';
import blogImgTwo from '@assets/img/blog/blog2.jpg';
import blogImgThere from '@assets/img/blog/blog3.jpg';
//blog-data
import blogImgFour from '@assets/img/blog/blog-standrad/img-1.jpg';
import blogImgFive from '@assets/img/blog/blog-standrad/img-2.png';
import blogImgSix from '@assets/img/blog/blog-standrad/img-3.png';
//blog-sidebar-img
import blogImgSeven from '@assets/img/blog/blog1.jpg';
import blogImgEight from '@assets/img/blog/blog2.jpg';
import blogImgNine from '@assets/img/blog/blog3.jpg';
import blogImgTen from '@assets/img/blog/img-4.jpg';
import blogMovieImg from '@assets/img/blog/img-6.jpg';
import blogMovieImgTwo from '@assets/img/blog/img-7.jpg';
//blog-wide-img
import blogWideImgOne from '@assets/img/blog/blog-grid1.jpg';
import blogWideImgTwo from '@assets/img/blog/blog-grid2.jpg';
import blogWideImgThere from '@assets/img/blog/blog-grid3.jpg';
import blogWideImgFour from '@assets/img/blog/blog-grid4.jpg';
import blogWideImgFive from '@assets/img/blog/blog-grid5.jpg';
import blogWideImgSix from '@assets/img/blog/blog-grid6.jpg';
import blogWideImgSeven from '@assets/img/blog/blog-grid7.jpg';
import blogWideImgEight from '@assets/img/blog/blog-grid8.jpg';
import blogWideImgNine from '@assets/img/blog/blog-grid9.jpg';
import blogWideImgTen from '@assets/img/blog/blog-grid10.jpg';
import blogWideImgEleven from '@assets/img/blog/blog-grid11.jpg';
import blogWideImgTwelve from '@assets/img/blog/blog-grid12.jpg';



const blogData = [
  // home blogs
  {
    id: 1,
    image: img_1,
    title: "Anne Rice's Mayfair Witches' An Only Somewhat Spellbinding Gothic",
    date: '08 Mar 2023',
    icon: 'flaticon-right-arrow-1',
    description: "It was clear the network had its sights set on resurrecting more stories of a paranormal variety for the small-screen market. The epic rights package consisted of 18 novels,",
    delay: '0.3s'
  },
  {
    id: 2,
    image: img_2,
    title: 'Rowan can tolerate the undeserved criticism and dismissive attitude she',
    date: '03 Jan 2023',
    icon: 'flaticon-right-arrow-1',
    description: "With the practical experience of public kindergarten work contributed by two cities; with a State law passed within the last few months.",
    delay: '0.4s'
  },
  {
    id: 3,
    image: img_3,
    title: 'Mayfair Witches, a somewhat more linear  story in nature, quickly Reach',
    date: '27 Jan 2023',
    icon: 'flaticon-right-arrow-1',
    description: "Many quote the testimony of public school teachers to the effect that the influence of the kindergarten is seen often in the older brothers.",
    delay: '0.5s'
  },
  //home-4 blog-data
  {
    id: 4,
    image: blogImgOne,
    title: 'The Story of Ferguson through the Eyes of the People',
    date: '13 Jan 2022',
    comment: 5,
    icon: 'fa-solid fa-arrow-right-long',
    delay: '0.3s'
  },
  {
    id: 5,
    image: blogImgTwo,
    title: 'Oppenheimer Adds Jason Clarke And Louise Lombard',
    date: '27 Jan 2023',
    comment: 3,
    icon: 'fa-solid fa-arrow-right-long',
    delay: '0.4s'
  },
  {
    id: 6,
    image: blogImgThere,
    title: 'Morbius Embraces Being The Bad Guy In New Trailer',
    date: '05 Feb 2022',
    comment: 0,
    icon: 'fa-solid fa-arrow-right-long',
    delay: '0.5s'
  },
  //blog-data
  {
    id: 7,
    image: blogImgFour,
    title: 'Her family said they were "comforted in knowing she is now with her daughter',
    subTitle: "Documentary",
    date: 'Feb 12, 2022',
    description: 'here are lots of ways to generate leads. You can earn leads through search results, paid ads, social media, and email campaigns. Each of those methods is a great choice for lead generation,'
  },
  {
    id: 8,
    image: blogImgFive,
    title: 'Throughout the 1980s, they remained a powerhouse in the US charts, and their hits, which included',
    subTitle: "Crime",
    date: 'May 14, 2022',
    description: 'here are lots of ways to generate leads. You can earn leads through search results, paid ads, social media, and email campaigns. Each of those methods is a great choice for lead generation,'
  },
  {
    id: 9,
    image: blogImgSix,
    title: 'Grammy-winning singer Anita Pointer dies aged 74',
    subTitle: "Mystery",
    date: 'Jan 2, 2023',
    description: 'here are lots of ways to generate leads. You can earn leads through search results, paid ads, social media, and email campaigns. Each of those methods is a great choice for lead generation,'
  },
  //blog sidebar data
  {
    id: 10,
    image: blogImgSeven,
    title: 'However, the disease is surging across the country, an d many',
    subTitle: "Marketing",
    date: 'May 14, 2022'
  },
  {
    id: 11,
    image: blogImgEight,
    title: 'placing travel restrictions on travellers from China',
    subTitle: "Agency",
    date: 'May 14, 2022'
  },
  {
    id: 12,
    image: blogImgNine,
    title: 'placing travel restrictions on travellers from China',
    subTitle: "Art Design",
    date: 'May 14, 2022'
  },
  {
    id: 13,
    image: blogImgTen,
    title: 'The president of Taiwan, Tsai Ing-wen, used her New Year address',
    subTitle: "Data Science",
    date: ' May 14, 2022'
  },
  //blog-details-data
  {
    id: 14,
    category: "News",
    image: blogMovieImg,
    title: 'Data Integration & Identity solu for the Human Normanti',
    date: <><span>05</span> Feb 2023</>,
  },
  {
    id: 15,
    category: "Romance",
    image: blogMovieImgTwo,
    title: 'Data Integration & Identity solu for the Human Normanti',
    date: <><span>02</span> July 2022</>,
  },
  //blog-wide-data
  {
    id: 16,
    image: blogWideImgOne,
    title: 'The Story of Ferguson for the Eyes thought',
    subTitle: 'Trailer',
    date: "19/03/2020",
    author: 'By Richard',
    delay: '0.3s'
  },
  {
    id: 17,
    image: blogWideImgTwo,
    title: 'Profound Common Only Happens When',
    subTitle: 'Trailer',
    date: "15/01/2021",
    author: 'By Richard',
    delay: '0.4s'
  },
  {
    id: 18,
    image: blogWideImgThere,
    title: 'New Perspectiveson a VictoryCineworld Legend theory',
    subTitle: 'Trailer',
    date: "10/02/2019",
    author: 'By Richard',
    delay: '0.5s'
  },
  {
    id: 19,
    image: blogWideImgFour,
    title: 'I Stopped Talking and Started Making',
    subTitle: 'Trailer',
    date: "09/11/2020",
    author: 'By Richard',
    delay: '0.6s'
  },
  {
    id: 20,
    image: blogWideImgFive,
    title: 'Notes on Some Recent Findings in of Fred',
    subTitle: 'Trailer',
    date: "12/06/2021",
    author: 'By Richard',
    delay: '0.3s'
  },
  {
    id: 21,
    image: blogWideImgSix,
    title: 'We Don’t Use Words to Director Lily Baldwin',
    subTitle: 'Trailer',
    date: "12/06/2021",
    author: 'By Richard',
    delay: '0.4s'
  },
  {
    id: 22,
    image: blogWideImgSeven,
    title: 'Cate Outstripped Us All with Her Enthusiasm',
    subTitle: 'Trailer',
    date: "10/09/2021",
    author: 'By Richard',
    delay: '0.5s'
  },
  {
    id: 23,
    image: blogWideImgEight,
    title: 'LAW & ORDER: SPECIAL EPISODE MARKS THE TIME',
    subTitle: 'Trailer',
    date: "05/07/2023",
    author: 'By Richard',
    delay: '0.6s'
  },
  {
    id: 24,
    image: blogWideImgNine,
    title: 'The Franco Geri War Through a Century',
    subTitle: 'Trailer',
    date: "11/09/2022",
    author: 'By Richard',
    delay: '0.3s'
  },
  {
    id: 25,
    image: blogWideImgTen,
    title: 'Loss and Mourning in American Cinema',
    subTitle: 'Trailer',
    date: "09/08/2021",
    author: 'By Richard',
    delay: '0.4s'
  },
  {
    id: 26,
    image: blogWideImgEleven,
    title: 'BEST MOVIES OF ALL TIME TOP WATCH FILMS MADE',
    subTitle: 'Trailer',
    date: "02/22/2022",
    author: 'By Richard',
    delay: '0.5s'
  },
  {
    id: 27,
    image: blogWideImgTwelve,
    title: 'Exploring Alternative Realities on the net',
    subTitle: 'Trailer',
    date: "03/16/2022",
    author: 'By Richard',
    delay: '0.6s'
  },
]

export default blogData;