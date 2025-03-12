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
        title: "AI/ML",
        breadcrumb: "Home > Services > AI/ML"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: Harnessing the Power of AI/ML",
        content: "At Victory Cineworld, we leverage the power of Artificial Intelligence (AI) and Machine Learning (ML) to create innovative solutions that drive business growth. Our team of AI/ML experts develops custom solutions that address your specific needs and help you gain a competitive edge."
    },

    // Services
    {
        type: "services",
        title: "Our AI/ML Services",
        content: "We offer a comprehensive range of AI/ML services to ensure your business harnesses the full potential of these technologies:",
        categories: [
            {
                title: "AI/ML Consulting",
                description: "We provide expert consulting services to help you identify and implement AI/ML solutions that align with your business goals.",
                serviceNum: "1"
            },
            {
                title: "Custom AI/ML Model Development",
                description: "We develop custom AI/ML models for a wide range of applications, including image recognition, natural language processing, and predictive analytics.",
                serviceNum: "2"
            },
            {
                title: "AI/ML Integration",
                description: "We integrate AI/ML solutions into your existing systems and applications.",
                serviceNum: "3"
            },
            {
                title: "AI/ML-Powered Applications",
                description: "We develop AI/ML-powered applications, such as chatbots, recommendation engines, and predictive maintenance systems.",
                serviceNum: "4"
            },
            {
                title: "Data Science & Analytics",
                description: "We leverage data science and analytics techniques to extract valuable insights from your data and make informed business decisions.",
                serviceNum: "5"
            }
        ]
    },

    // CTA (Call to Action)
    {
        type: "cta",
        title: "Let's Harness the Power of AI/ML",
        content: "Contact us today to schedule a consultation and discover how Victory Cineworld can help you leverage the power of AI/ML to drive business growth and gain a competitive edge."
    },

    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What are AI and ML?",
                answer: "AI refers to the simulation of human intelligence in machines, while ML is a subset of AI that allows machines to learn from data without being explicitly programmed."
            },
            {
                question: "What types of AI/ML solutions does Victory Cineworld develop?",
                answer: "We develop a wide range of AI/ML solutions, including chatbots, recommendation engines, image recognition systems, and predictive analytics models."
            },
            {
                question: "How can AI/ML benefit my business?",
                answer: "AI/ML can help you automate tasks, improve efficiency, gain valuable insights from data, and enhance customer experience."
            },
            {
                question: "Does Victory Cineworld have experience with specific AI/ML technologies?",
                answer: "Our team has experience with a wide range of AI/ML technologies, including deep learning, machine learning, natural language processing, and computer vision."
            },
            {
                question: "How does the AI/ML development process work?",
                answer: "We start with a consultation to understand your business needs and define the scope of the project. Then, we gather data, develop and train models, and deploy and monitor the solutions."
            },
            {
                question: "Does Victory Cineworld provide ongoing support and maintenance for AI/ML solutions?",
                answer: "Yes, we provide ongoing support and maintenance to ensure the optimal performance and continued improvement of your AI/ML solutions."
            },
            {
                question: "How can I measure the success of AI/ML implementations?",
                answer: "We track key metrics and analyze the impact of AI/ML solutions on your business outcomes to measure their success."
            },
            {
                question: "What are the ethical considerations related to AI/ML development?",
                answer: "We prioritize ethical and responsible AI/ML development, ensuring fairness, transparency, and accountability in all our projects."
            }
        ]
    },

];
