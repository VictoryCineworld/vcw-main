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
        title: "Educational Video",
        breadcrumb: "Home > Services > Educational Video"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: Making Learning Engaging and Accessible",
        content: "At Victory Cineworld, we create engaging and informative educational videos that make complex subjects easy to understand. Our videos are designed to captivate audiences and deliver knowledge in a clear, concise, and entertaining manner."
    },

    // Services
    {
        type: "services",
        title: "Our Educational Video Services",
        content: "We offer a comprehensive range of educational video services to ensure your content is engaging and effective:",
        categories: [
            {
                title: "Explainer Videos",
                description: "We create concise and engaging videos that explain complex concepts and ideas in a simple and easy-to-understand way.",
                serviceNum: "1"
            },
            {
                title: "Instructional Videos",
                description: "We create step-by-step tutorials and instructional videos that guide viewers through various processes and tasks.",
                serviceNum: "2"
            },
            {
                title: "K-12 Educational Videos",
                description: "We create engaging and informative videos for students of all ages, making learning fun and interactive.",
                serviceNum: "3"
            },
            {
                title: "Corporate Training Videos",
                description: "We create training videos for employees, covering topics such as product knowledge, safety procedures, and customer service.",
                serviceNum: "4"
            },
            {
                title: "E-learning Videos",
                description: "We create interactive and engaging videos for online learning platforms.",
                serviceNum: "5"
            }
        ]
    },

    // CTA (Call to Action)
    {
        type: "cta",
        title: "Let's Make Learning Engaging",
        content: "Contact us today to schedule a consultation and discover how Victory Cineworld can help you create engaging and informative educational videos that make a lasting impact."
    },

    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What types of educational videos does Victory Cineworld produce?",
                answer: "We produce a wide range of educational videos, including explainer videos, instructional videos, K-12 educational videos, and corporate training videos."
            },
            {
                question: "How does the educational video production process work?",
                answer: "We start with a consultation to understand your learning objectives and target audience. Then, we develop a script, film the footage, and edit it into an engaging and informative video."
            },
            {
                question: "What makes Victory Cineworld's educational videos unique?",
                answer: "Our focus on engaging storytelling, high-quality production, and effective learning principles sets us apart."
            },
            {
                question: "What is the typical timeline for an educational video project?",
                answer: "The timeline varies depending on the scope and complexity of the project."
            },
            {
                question: "How much does it cost to produce an educational video?",
                answer: "The cost varies depending on the length, complexity, and scope of the project."
            },
            {
                question: "Does Victory Cineworld provide any data or analytics on video performance?",
                answer: "We can provide data and analytics on video views, engagement, and other key metrics to help you measure the effectiveness of your educational videos."
            },
            {
                question: "How can I get started with an educational video project?",
                answer: "Contact us today to schedule a consultation and discuss your project needs."
            },
            {
                question: "What are the benefits of using educational videos?",
                answer: "Educational videos can improve learning outcomes, increase engagement, and enhance knowledge retention."
            }
        ]
    },

];
