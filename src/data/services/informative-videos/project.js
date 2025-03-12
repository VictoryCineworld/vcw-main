import PortfolioImgOne from "@assets/img/portfolio/p-details/img-1.jpg";
import PortfolioImgTwo from "@assets/img/portfolio/p-details/img-3.jpg";
import PortfolioImgThere from "@assets/img/portfolio/p-details/img-2.jpg";
import PortfolioImgFour from "@assets/img/portfolio/p-details/img-4.jpg";
import PortfolioImgFive from "@assets/img/portfolio/p-details/img-5.jpg";
import Img1 from '@assets/img/new-icon/img-1.png'

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
        title: "Project Video",
        breadcrumb: "Home > Services > Project Video"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: Showcasing Your Projects",
        content: "At Victory Cineworld, we create compelling project videos that showcase your work, highlight your achievements, and demonstrate your expertise. Our videos effectively communicate the value of your projects to clients, stakeholders, and the public."
    },

    // Services
    {
        "type": "services",
        "title": "Our Project Video Services",
        "content": "We offer a comprehensive range of project video services to ensure your work is showcased effectively:",
        "categories": [
            {
                "title": "Project Highlight Videos",
                "description": "This video highlights a project's key moments and achievements, which gives viewers a quick, engaging overview of its success and impact.",
                "serviceNum": "1",
                "image":Img1
            },
            {
                "title": "Case Study Videos",
                "description": "This video is about getting deeper into a specific project or problem that highlights challenges, solutions, and results to demonstrate your expertise and success.",
                "serviceNum": "2"
            },
            {
                "title": "Progress Report Videos",
                "description": "A progress report video updates ongoing projects and informs stakeholders about the current status, milestones reached, and what will be done next, keeping them informed and engaged.",
                "serviceNum": "3"
            },
            {
                "title": "Testimonial Videos",
                "description": "This video tells about satisfied clients or customers sharing their good and positive experiences with you, building trust for your brand or service in the audience.",
                "serviceNum": "4"
            },
            {
                "title": "Event Recap Videos",
                "description": "An event recap video captures the best moments of an event, provides insights into the event, shows key highlights and memorable interactions, and leaves a lasting impression on viewers.",
                "serviceNum": "5"
            }
        ]
    }
,    

    // CTA (Call to Action)
    {
        type: "cta",
        title: "Let's Showcase Your Projects",
        content: "Contact us today to schedule a consultation and discover how Victory Cineworld can help you create compelling project videos that showcase your expertise and drive business growth."
    },

    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What types of project videos does Victory Cineworld produce?",
                answer: "We produce a wide range of project videos, including project highlight videos, case study videos, progress report videos, and testimonial videos."
            },
            {
                question: "How does the project video production process work?",
                answer: "We start with a consultation to understand your project and your goals for the video. Then, we develop a concept, film the footage, and edit it into a compelling and impactful video."
            },
            {
                question: "What makes Victory Cineworld's project videos unique?",
                answer: "Our focus on creative storytelling, high-quality production, and client collaboration sets us apart."
            },
            {
                question: "What is the typical timeline for a video project?",
                answer: "The timeline varies depending on the scope and complexity of the project."
            },
            {
                question: "How much does it cost to produce a project video?",
                answer: "The cost varies depending on the length, complexity, and scope of the project."
            },
            {
                question: "Does Victory Cineworld provide any distribution or marketing services for project videos?",
                answer: "We can provide guidance and support with distribution and marketing strategies for your project videos."
            },
            {
                question: "How can I get started with a video project?",
                answer: "Contact us today to schedule a consultation and discuss your project needs."
            },
            {
                question: "What are the benefits of having project videos?",
                answer: "Project videos can showcase your expertise, build trust with clients, attract new business, and improve your brand reputation."
            }
        ]
    },
];
