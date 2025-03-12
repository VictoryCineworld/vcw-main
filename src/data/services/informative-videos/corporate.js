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
        title: "Corporate Video",
        breadcrumb: "Home > Services > Corporate Video"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: Showcasing Your Brand Through Video",
        content: "At Victory Cineworld, we create compelling corporate videos that effectively communicate your brand message, showcase your company culture, and enhance your brand image. Our videos help you connect with your audience, build trust, and drive business growth."
    },

    // Services
    {
        type: "services",
        title: "Our Corporate Video Services",
        content: "We offer a comprehensive range of corporate video services to ensure your brand is showcased effectively:",
        categories: [
            {
                title: "Company Culture Videos",
                description: "We capture the essence of your company culture and values through engaging and inspiring videos.",
                serviceNum: "1"
            },
            {
                title: "Product Launch Videos",
                description: "We create dynamic and informative videos to launch new products and generate excitement.",
                serviceNum: "2"
            },
            {
                title: "Testimonial Videos",
                description: "We showcase customer testimonials to build trust and credibility with potential clients.",
                serviceNum: "3"
            },
            {
                title: "Explainer Videos",
                description: "We create concise and engaging videos that explain your products or services in a clear and concise manner.",
                serviceNum: "4"
            },
            {
                title: "Event Videos",
                description: "We capture the highlights of your company events, including conferences, trade shows, and team-building activities.",
                serviceNum: "5"
            }
        ]
    },

    // CTA (Call to Action)
    {
        type: "cta",
        title: "Let's Showcase Your Brand",
        content: "Contact us today to schedule a consultation and discover how Victory Cineworld can help you create compelling corporate videos that elevate your brand and drive business growth."
    },

    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What types of corporate videos does Victory Cineworld produce?",
                answer: "We produce a wide range of corporate videos, including company culture videos, product launch videos, testimonial videos, explainer videos, and event videos."
            },
            {
                question: "How does the corporate video production process work?",
                answer: "We start with a consultation to understand your brand and goals for the video. Then, we develop a concept, film the footage, and edit it into a compelling and impactful video."
            },
            {
                question: "What makes Victory Cineworld's corporate videos unique?",
                answer: "Our focus on creative storytelling, high-quality production, and client collaboration sets us apart."
            },
            {
                question: "What is the typical timeline for a corporate video project?",
                answer: "The timeline varies depending on the scope and complexity of the project."
            },
            {
                question: "How much does it cost to produce a corporate video?",
                answer: "The cost varies depending on the length, complexity, and scope of the project."
            },
            {
                question: "Does Victory Cineworld provide any distribution or marketing services for corporate videos?",
                answer: "We can provide guidance and support with distribution and marketing strategies for your corporate videos."
            },
            {
                question: "How can I get started with a corporate video project?",
                answer: "Contact us today to schedule a consultation and discuss your project needs."
            },
            {
                question: "What are the benefits of having high-quality corporate videos?",
                answer: "Corporate videos can enhance your brand image, build trust with your audience, generate leads, attract new business, and improve your brand reputation."
            }
        ]
    },

];
