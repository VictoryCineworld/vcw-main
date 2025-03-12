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
        title: "Campaign Content Creation",
        breadcrumb: "Services / Content Creation & Content Designing"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: Crafting Powerful Campaigns",
        content: "At Victory Cineworld, we understand that successful campaigns require a multi-faceted approach. Our team creates compelling and integrated content that resonates with your target audience, drives engagement, and achieves your marketing objectives."
    },

    // Steps
    {
        type: "steps",
        title: "Our Approach",
        approach_steps: [
            {
                id: 1,
                number: "1",
                title: "In-depth Audience Research",
                description: "We conduct thorough research to understand your target audience, their interests, and their online behavior."
            },
            {
                id: 2,
                number: "2",
                title: "Strategic Planning",
                description: "We develop a comprehensive campaign strategy that aligns with your business objectives and target audience."
            },
            {
                id: 3,
                number: "3",
                title: "Content Creation & Curation",
                description: "We create high-quality, engaging content across various channels, including text, images, and videos."
            },
            {
                id: 4,
                number: "4",
                title: "Campaign Monitoring & Optimization",
                description: "We track campaign performance and make data-driven adjustments to optimize results."
            },
            {
                id: 5,
                number: "5",
                title: "Client Collaboration",
                description: "We work closely with you throughout the entire campaign process to ensure your complete satisfaction."
            }
        ]
    },

    // Services
    {
        type: "services",
        title: "Our Campaign Content Creation Services",
        content: "We develop comprehensive content strategies and create engaging content across various channels, including:",
        categories: [
            {
                title: "Social Media Campaigns",
                description: "Creating engaging content for social media platforms like Facebook, Instagram, Twitter, and TikTok.",
                serviceNum: "1"
            },
            {
                title: "Email Marketing Campaigns",
                description: "Crafting compelling email newsletters, promotional emails, and automated email sequences.",
                serviceNum: "2"
            },
            {
                title: "Paid Advertising Campaigns",
                description: "Developing compelling ad copy and visuals for paid advertising campaigns on platforms like Google Ads and Meta Ads.",
                serviceNum: "3"
            },
            {
                title: "Influencer Marketing Campaigns",
                description: "Identifying and collaborating with relevant influencers to promote your brand.",
                serviceNum: "4"
            },
            {
                title: "Content Marketing Strategies",
                description: "Developing and implementing content marketing strategies to attract, engage, and retain your target audience.",
                serviceNum: "5"
            },
            {
                title: "Multi-channel Campaigns",
                description: "Creating integrated campaigns that leverage multiple channels to reach your audience and achieve your marketing goals.",
                serviceNum: "6"
            }
        ]
    },

    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What types of campaigns does Victory Cineworld create?",
                answer: "Victory Cineworld creates a wide range of campaigns, including social media campaigns, email marketing campaigns, paid advertising campaigns, influencer marketing campaigns, and multi-channel campaigns."
            },
            {
                question: "How does the campaign creation process work at Victory Cineworld?",
                answer: "Our process starts with a thorough consultation to understand your business objectives and target audience. We then conduct research, develop a comprehensive strategy, create engaging content, and track campaign performance to optimize results."
            },
            {
                question: "What makes Victory Cineworld's campaign content creation services stand out?",
                answer: "We prioritize data-driven insights, creative strategy, and client-centric collaboration. Our team of experienced marketers and content creators develops campaigns that are both effective and engaging."
            },
            {
                question: "How does Victory Cineworld ensure the success of its campaigns?",
                answer: "We track key metrics, such as website traffic, lead generation, and conversion rates, to measure campaign performance and make data-driven adjustments to optimize results."
            },
            {
                question: "How much does it cost to hire Victory Cineworld for campaign content creation?",
                answer: "The cost of our campaign content creation services varies depending on the scope and complexity of the project. We provide customized quotes based on your specific needs and budget."
            },
            {
                question: "Does Victory Cineworld work with specific industries or niches?",
                answer: "While we have experience across various industries, we are happy to work with clients in any field. We adapt our approach to meet the unique needs of each client and project."
            },
            {
                question: "How can I get started with a campaign creation project at Victory Cineworld?",
                answer: "Contact us today to schedule a consultation. We'll discuss your project goals, answer your questions, and provide you with a personalized quote."
            },
            {
                question: "What are some examples of successful campaigns that Victory Cineworld has created?",
                answer: "We can share case studies and examples of successful campaigns that we have created for our clients."
            }
        ]
    },

    // CTA
    {
        type: "cta",
        title: "Let's Create Powerful Campaigns Together",
        content: "Contact us today to schedule a consultation and discover how Victory Cineworld can help you craft compelling campaigns that resonate with your audience and drive results."
    }
];
