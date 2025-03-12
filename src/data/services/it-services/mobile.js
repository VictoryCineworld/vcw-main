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
  },     // Metadata
    {
        type: "metadata",
        title: "Mobile App Development",
        breadcrumb: "Home > Services > Mobile App Development"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: Bringing Your App Ideas to Life",
        content: "At Victory Cineworld, we turn your app ideas into reality. Our team of skilled mobile app developers builds high-quality, user-friendly apps for iOS and Android platforms that engage your audience and achieve your business goals."
    },

    // Services
    {
        type: "services",
        title: "Our Mobile App Development Services",
        content: "We offer a comprehensive range of mobile app development services to ensure your app is functional, engaging, and successful:",
        categories: [
            {
                title: "iOS App Development",
                description: "We develop native iOS apps that take full advantage of the iOS platform and its features.",
                serviceNum: "1"
            },
            {
                title: "Android App Development",
                description: "We develop native Android apps that are optimized for a wide range of Android devices.",
                serviceNum: "2"
            },
            {
                title: "Cross-Platform App Development",
                description: "We develop apps that can run seamlessly on both iOS and Android platforms.",
                serviceNum: "3"
            },
            {
                title: "App Design & UX/UI",
                description: "We design intuitive and visually appealing user interfaces that provide a seamless user experience.",
                serviceNum: "4"
            },
            {
                title: "App Store Optimization (ASO)",
                description: "We optimize your app store listing to improve your app's visibility and increase downloads.",
                serviceNum: "5"
            },
            {
                title: "App Maintenance & Support",
                description: "We provide ongoing app maintenance and support, including updates, bug fixes, and technical assistance.",
                serviceNum: "6"
            }
        ]
    },

    // CTA (Call to Action)
    {
        type: "cta",
        title: "Let's Bring Your App Idea to Life",
        content: "Contact us today to schedule a consultation and discover how Victory Cineworld can help you turn your app idea into a successful reality."
    },

    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What types of mobile apps does Victory Cineworld develop?",
                answer: "We develop a wide range of apps, including e-commerce apps, social media apps, gaming apps, enterprise apps, and more."
            },
            {
                question: "How does the mobile app development process work?",
                answer: "We start with a consultation to understand your requirements and goals. Then, we design, develop, and test your app before launching it on the app stores."
            },
            {
                question: "What makes Victory Cineworld's mobile app development services unique?",
                answer: "Our focus on user experience, quality, and client collaboration sets us apart."
            },
            {
                question: "What platforms does Victory Cineworld develop apps for?",
                answer: "We develop apps for iOS and Android platforms."
            },
            {
                question: "Does Victory Cineworld offer cross-platform app development?",
                answer: "Yes, we offer cross-platform app development solutions, allowing you to reach a wider audience with a single codebase."
            },
            {
                question: "Does Victory Cineworld provide app store optimization (ASO) services?",
                answer: "Yes, we offer ASO services to help you improve your app's visibility and increase downloads."
            },
            {
                question: "Does Victory Cineworld provide ongoing app maintenance and support?",
                answer: "Yes, we offer ongoing app maintenance and support, including updates, bug fixes, and technical assistance."
            },
            {
                question: "How can I get started with a mobile app development project?",
                answer: "Contact us today to schedule a consultation and discuss your app idea."
            }
        ]
    },

];
