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
        title: "Documentary",
        breadcrumb: "Home > Services > Documentary"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: Telling Stories That Matter",
        content: "At Victory Cineworld, we craft compelling and impactful documentaries that explore the world around us. We tell stories that inform, inspire, and entertain, bringing important issues to light and shedding new perspectives on the human experience."
    },

    // Services
    {
        type: "services",
        title: "Our Documentary Services",
        content: "We offer a comprehensive range of documentary services to ensure your story is told effectively and engagingly:",
        categories: [
            {
                title: "Concept Development & Research",
                description: "We collaborate with you to develop compelling documentary concepts and conduct in-depth research to gather factual information and compelling narratives.",
                serviceNum: "1"
            },
            {
                title: "Filming & Cinematography",
                description: "Our skilled cinematographers capture stunning visuals and conduct insightful interviews to bring your documentary to life.",
                serviceNum: "2"
            },
            {
                title: "Editing & Post-Production",
                description: "We edit your footage seamlessly, incorporating music, sound effects, and motion graphics to create a captivating and impactful viewing experience.",
                serviceNum: "3"
            },
            {
                title: "Voiceover & Narration",
                description: "We record professional voiceovers and narrations to enhance the storytelling and provide a clear and engaging presentation.",
                serviceNum: "4"
            }
        ]
    },

    // CTA (Call to Action)
    {
        type: "cta",
        title: "Let's Tell Your Story",
        content: "Contact us today to discuss your documentary project and discover how Victory Cineworld can help you bring your story to the world."
    },

    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What types of documentaries does Victory Cineworld produce?",
                answer: "We produce a wide range of documentaries, including historical documentaries, social issue documentaries, nature documentaries, and corporate documentaries."
            },
            {
                question: "How does the documentary production process work?",
                answer: "We start with concept development and research, followed by filming, editing, and post-production."
            },
            {
                question: "What makes Victory Cineworld's documentary services unique?",
                answer: "Our focus on ethical storytelling, high-quality production, and client collaboration sets us apart."
            },
            {
                question: "What is the typical timeline for a documentary project?",
                answer: "The timeline varies depending on the scope and complexity of the project."
            },
            {
                question: "How much does it cost to produce a documentary?",
                answer: "The cost varies depending on the length, complexity, and scope of the project."
            },
            {
                question: "Does Victory Cineworld handle all aspects of documentary production?",
                answer: "Yes, we handle all aspects, from concept development and research to filming, editing, and post-production."
            },
            {
                question: "How can I get started with a documentary project?",
                answer: "Contact us today to schedule a consultation and discuss your project needs."
            },
            {
                question: "Does Victory Cineworld provide any distribution or marketing services for documentaries?",
                answer: "We can provide guidance and support with distribution and marketing strategies."
            }
        ]
    },

];
