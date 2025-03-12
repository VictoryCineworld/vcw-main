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
  },
    // Metadata
    {
        type: "metadata",
        title: "Video Production",
        breadcrumb: "Services / Video Production"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: Bringing Your Vision to Life",
        content: "At Victory Cineworld, we are passionate about crafting high-quality videos that tell compelling stories and achieve your creative goals. Our experienced team handles every aspect of the video production process, from concept development to final delivery."
    },

    // Services
    {
        type: "services",
        title: "Our Video Production Services",
        content: "We offer a comprehensive range of video production services to ensure your project is executed flawlessly:",
        categories: [
            {
                title: "Concept Development & Pre-Production",
                description: "We work closely with you to develop creative concepts, write scripts, and plan every stage of the production process.",
                serviceNum: "1"
            },
            {
                title: "Filming & Cinematography",
                description: "Our skilled cinematographers capture stunning visuals using the latest equipment and techniques.",
                serviceNum: "2"
            },
            {
                title: "Location Scouting & Logistics",
                description: "We source and secure suitable filming locations, manage logistics, and ensure smooth on-set operations.",
                serviceNum: "3"
            }
        ]
    },

    // CTA (Call to Action)
   
    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What types of videos does Victory Cineworld produce?",
                answer: "We produce a wide range of videos, including corporate videos, commercials, documentaries, music videos, and more."
            },
            {
                question: "How does the video production process work?",
                answer: "Our process starts with a consultation, followed by concept development, pre-production, filming, and post-production."
            },
            {
                question: "What makes Victory Cineworld's video production services unique?",
                answer: "Our focus on creativity, collaboration, and high-quality production sets us apart."
            },
            {
                question: "What is the typical timeline for a video production project?",
                answer: "The timeline varies depending on the scope and complexity of the project. We provide a detailed timeline during the planning phase."
            },
            {
                question: "How much does it cost to produce a video?",
                answer: "The cost varies depending on factors such as the length, complexity, and scope of the project."
            },
            {
                question: "Does Victory Cineworld handle all aspects of video production?",
                answer: "Yes, we handle all aspects, from pre-production to post-production."
            },
            {
                question: "How can I get started with a video production project?",
                answer: "Contact us today to schedule a consultation and discuss your project needs."
            },
            {
                question: "Does Victory Cineworld provide any data or analytics on video performance?",
                answer: "We can provide data and analytics for online videos to help you measure their impact."
            }
        ]
    },
    {
        type: "cta",
        title: "Let's Bring Your Vision to Life",
        content: "Contact us today to schedule a consultation and discover how Victory Cineworld can help you create stunning and impactful videos."
    },

];
