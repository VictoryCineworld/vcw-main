import PortfolioImgOne from "@assets/img/portfolio/p-details/img-1.jpg";
import PortfolioImgTwo from "@assets/img/portfolio/p-details/img-3.jpg";
import PortfolioImgThere from "@assets/img/portfolio/p-details/img-2.jpg";
import PortfolioImgFour from "@assets/img/portfolio/p-details/img-4.jpg";
import PortfolioImgFive from "@assets/img/portfolio/p-details/img-5.jpg";

export const data = [
  {
    type: "quote",
    text: "They provided a level of service that was easily beyond their cost.",
    name: "Gaurav Pawar",
    title: "Founder, VictoryCineworld",
  },
  {
    type: "Portfolio",
    data: [
      {
        id: 1,
        image: PortfolioImgOne,
      },
      {
        id: 2,
        image: PortfolioImgTwo,
      },
      {
        id: 3,
        image: PortfolioImgThere,
      },
      {
        id: 4,
        image: PortfolioImgFour,
      },
      {
        id: 5,
        image: PortfolioImgFive,
      },
    ],
  }, // Metadata
  {
    type: "metadata",
    title: "Web Design & Development",
    breadcrumb: "Home > Services > Web Design & Development",
  },

  // Heading
  {
    type: "heading",
    title: "Victory Cineworld: Crafting Exceptional Digital Experiences",
    content:
      "At Victory Cineworld, we create stunning and functional websites that not only captivate your audience but also drive business growth. Our team of skilled designers and developers combines creativity with technical expertise to deliver websites that are visually appealing, user-friendly, and effective.",
  },

  // Services
  {
    type: "services",
    title: "Our Web Design & Development Services",
    content:
      "We offer a comprehensive range of web design and development services to ensure your website stands out and performs exceptionally:",
    categories: [
      {
        title: "Website Design",
        description:
          "We design visually appealing and user-friendly websites that reflect your brand identity and engage your audience.",
        serviceNum: "1",
      },
      {
        title: "Website Development",
        description:
          "We develop custom websites using the latest technologies, ensuring they are responsive, fast-loading, and secure.",
        serviceNum: "2",
      },
      {
        title: "E-commerce Development",
        description:
          "We build robust and scalable e-commerce platforms that enable you to sell products and services online.",
        serviceNum: "3",
      },
      {
        title: "Web Application Development",
        description:
          "We develop custom web applications that meet your specific business needs and streamline your operations.",
        serviceNum: "4",
      },
      {
        title: "Website Maintenance & Support",
        description:
          "We provide ongoing website maintenance and support, including updates, security patches, and technical assistance.",
        serviceNum: "5",
      },
    ],
  },

  // CTA (Call to Action)
  {
    type: "cta",
    title: "Let's Create a Website That Stands Out",
    content:
      "Contact us today to schedule a consultation and discover how Victory Cineworld can help you create a website that reflects your brand, engages your audience, and drives business growth.",
  },

  // FAQs
  {
    type: "faqs",
    title: "FAQs",
    questions: [
      {
        question:
          "What types of websites does Victory Cineworld design and develop?",
        answer:
          "We design and develop a wide range of websites, including business websites, e-commerce websites, portfolio websites, and more.",
      },
      {
        question: "How does the web design and development process work?",
        answer:
          "We start with a consultation to understand your requirements and goals. Then, we design and develop a website that meets your specific needs and budget.",
      },
      {
        question:
          "What makes Victory Cineworld's web design and development services unique?",
        answer:
          "Our focus on creativity, user experience, and client collaboration sets us apart.",
      },
      {
        question:
          "What technologies does Victory Cineworld use for web development?",
        answer:
          "We utilize a range of technologies, including HTML, CSS, JavaScript, PHP, and popular content management systems (CMS) like WordPress.",
      },
      {
        question: "Is my website responsive?",
        answer:
          "Yes, all the websites we design and develop are fully responsive, ensuring they look great on all devices, including desktops, tablets, and smartphones.",
      },
      {
        question:
          "Does Victory Cineworld provide website maintenance and support?",
        answer:
          "Yes, we offer ongoing website maintenance and support, including updates, security patches, and technical assistance.",
      },
      {
        question:
          "How can I get started with a website design and development project?",
        answer:
          "Contact us today to schedule a consultation and discuss your project requirements.",
      },
      {
        question: "What are the benefits of having a professional website?",
        answer:
          "A professional website can enhance your brand image, increase your online visibility, generate leads, and drive sales.",
      },
    ],
  },
];
