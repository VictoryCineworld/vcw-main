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
        title: "Social Media Marketing",
        breadcrumb: "Home > Services > Social Media Marketing"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: Elevate Your Social Media Presence",
        content: "At Victory Cineworld, we help you build a strong online presence and connect with your audience on social media. Our team manages your social media accounts, creates engaging content, and runs targeted campaigns to achieve your marketing objectives."
    },

    // Services
    {
        type: "services",
        title: "Our Social Media Management Services",
        content: "We offer a comprehensive range of social media management services to ensure your brand stands out and engages effectively:",
        categories: [
            {
                title: "Social Media Strategy",
                description: "We develop a customized social media strategy that aligns with your business goals and target audience.",
                serviceNum: "1"
            },
            {
                title: "Content Creation & Scheduling",
                description: "We create and schedule engaging content, including text, images, and videos, for your social media platforms.",
                serviceNum: "2"
            },
            {
                title: "Community Management",
                description: "We monitor and respond to comments, messages, and mentions, building relationships with your followers.",
                serviceNum: "3"
            },
            {
                title: "Social Media Advertising",
                description: "We run targeted ad campaigns on social media platforms like Facebook, Instagram, and Twitter to reach a wider audience.",
                serviceNum: "4"
            },
            {
                title: "Social Media Analytics",
                description: "We track your social media performance and provide regular reports on key metrics, such as reach, engagement, and conversions.",
                serviceNum: "5"
            },
            {
                title: "Influencer Marketing",
                description: "We identify and collaborate with relevant influencers to promote your brand and reach a wider audience.",
                serviceNum: "6"
            }
        ]
    },

    // CTA (Call to Action)
    {
        type: "cta",
        title: "Let's Elevate Your Social Media Presence",
        content: "Contact us today to schedule a consultation and discover how Victory Cineworld can help you build a strong social media presence and connect with your audience."
    },

    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What social media platforms does Victory Cineworld manage?",
                answer: "We manage a wide range of social media platforms, including Facebook, Instagram, Twitter, LinkedIn, YouTube, and more."
            },
            {
                question: "How does the social media management process work?",
                answer: "We start with a consultation to understand your goals and target audience. Then, we develop a strategy, create content, and manage your accounts on an ongoing basis."
            },
            {
                question: "What types of content does Victory Cineworld create for social media?",
                answer: "We create a variety of content, including text posts, images, videos, stories, and live streams."
            },
            {
                question: "How often will Victory Cineworld post on my social media accounts?",
                answer: "The frequency of posting will depend on your specific needs and the platform."
            },
            {
                question: "How much does social media management cost?",
                answer: "The cost of social media management services varies depending on the scope of the project and the number of platforms managed."
            },
            {
                question: "Does Victory Cineworld provide any social media training or consulting?",
                answer: "Yes, we offer social media training and consulting services to help you understand and manage your social media presence effectively."
            },
            {
                question: "How can I track the performance of my social media campaigns?",
                answer: "We provide detailed reports on key metrics, such as reach, engagement, impressions, clicks, conversions, and return on investment (ROI), to help you understand the performance of your social media campaigns."
            },
            {
                question: "Does Victory Cineworld offer any social media training or consulting?",
                answer: "Yes, we offer social media training and consulting services to help you understand and manage your social media presence effectively. We can provide guidance on developing your social media strategy, creating engaging content, and using social media analytics to improve your results."
            }
        ]
    },

];
