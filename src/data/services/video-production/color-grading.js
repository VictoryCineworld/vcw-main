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
  },    // Metadata
    {
        type: "metadata",
        title: "Color Grading/DI (Digital Intermediate)",
        breadcrumb: "Home > Services > Color Grading/DI"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: Elevating Your Visuals",
        content: "At Victory Cineworld, we understand the importance of color in creating a visually impactful and memorable experience. Our color grading and digital intermediate (DI) services elevate your footage, giving it a professional, cinematic look."
    },

    // Services
    {
        type: "services",
        title: "Our Color Grading/DI Services",
        content: "We offer a comprehensive range of color grading and DI services to ensure your project achieves the desired visual impact:",
        categories: [
            {
                title: "Color Grading",
                description: "We meticulously adjust the color and tone of your footage to create a specific mood and enhance the visual impact.",
                serviceNum: "1"
            },
            {
                title: "Digital Intermediate",
                description: "We perform high-end color correction and manipulation techniques to achieve a cinematic look.",
                serviceNum: "2"
            },
            {
                title: "Look Development",
                description: "We work with you to develop a unique color palette and visual style for your project.",
                serviceNum: "3"
            }
        ]
    },

    // CTA (Call to Action)
    {
        type: "cta",
        title: "Let's Elevate Your Visuals",
        content: "Contact us today to discuss your color grading/DI needs and discover how Victory Cineworld can help you elevate your footage."
    },

    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What is color grading and DI?",
                answer: "Color grading involves adjusting the color and tone of your footage, while DI refers to high-end color correction and manipulation techniques."
            },
            {
                question: "How does the color grading/DI process work?",
                answer: "We work closely with you to understand your desired look and feel, and then meticulously adjust the color and tone of your footage."
            },
            {
                question: "What makes Victory Cineworld's color grading/DI services unique?",
                answer: "Our focus on creativity, technical expertise, and client collaboration sets us apart."
            },
            {
                question: "What is the typical turnaround time for color grading/DI?",
                answer: "The turnaround time varies depending on the scope and complexity of the project."
            },
            {
                question: "How much do color grading/DI services cost?",
                answer: "The cost varies depending on the length of the footage, the level of correction required, and the desired look."
            },
            {
                question: "Does Victory Cineworld provide feedback and revisions during the color grading process?",
                answer: "Yes, we provide multiple rounds of revisions to ensure your complete satisfaction."
            },
            {
                question: "How can I get started with color grading/DI services?",
                answer: "Contact us today to discuss your project needs and receive a quote."
            },
            {
                question: "What types of projects benefit from color grading/DI?",
                answer: "Color grading/DI can enhance the look of any type of video, from commercials to documentaries to music videos."
            }
        ]
    },

];
