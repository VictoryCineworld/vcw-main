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
        title: "Influencer Marketing",
        breadcrumb: "Home > Services > Influencer Marketing"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: Amplify Your Reach with Influencers",
        content: "Partnering with influential voices can significantly amplify your brand's reach and credibility. At Victory Cineworld, we help you identify and collaborate with relevant influencers to connect with your target audience and drive results."
    },

    // Services
    {
        type: "services",
        title: "Our Influencer Marketing Services",
        content: "We offer a comprehensive range of influencer marketing services to ensure your brand connects effectively:",
        categories: [
            {
                title: "Influencer Identification & Selection",
                description: "We identify and vet influencers who align with your brand values and target audience.",
                serviceNum: "1"
            },
            {
                title: "Campaign Planning & Execution",
                description: "We develop and execute integrated influencer marketing campaigns, including product seeding, sponsored posts, and live streams.",
                serviceNum: "2"
            },
            {
                title: "Content Creation & Management",
                description: "We help you create compelling content for influencer collaborations, ensuring it aligns with your brand and resonates with their audience.",
                serviceNum: "3"
            },
            {
                title: "Performance Tracking & Reporting",
                description: "We track campaign performance and provide detailed reports on key metrics, such as reach, engagement, and conversions.",
                serviceNum: "4"
            },
            {
                title: "Building Long-Term Relationships",
                description: "We foster long-term relationships with influencers to build brand loyalty and create ongoing partnerships.",
                serviceNum: "5"
            }
        ]
    },

    // CTA (Call to Action)
    {
        type: "cta",
        title: "Let's Amplify Your Reach",
        content: "Contact us today to schedule a consultation and discover how Victory Cineworld can help you leverage the power of influencer marketing to connect with your audience and achieve your marketing objectives."
    },

    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What is influencer marketing?",
                answer: "Influencer marketing involves partnering with influential individuals on social media to promote your brand or products to their followers."
            },
            {
                question: "How does Victory Cineworld identify and select influencers?",
                answer: "We use a combination of data analysis, audience research, and manual vetting to identify influencers who align with your brand and target audience."
            },
            {
                question: "What types of influencer marketing campaigns does Victory Cineworld execute?",
                answer: "We execute a variety of campaigns, including product seeding, sponsored posts, giveaways, and live streams."
            },
            {
                question: "How does Victory Cineworld ensure the authenticity of influencer campaigns?",
                answer: "We prioritize ethical and transparent influencer marketing practices and encourage authentic and genuine content."
            },
            {
                question: "How much do influencer marketing campaigns cost?",
                answer: "The cost of influencer marketing campaigns varies depending on the scope of the project, the number of influencers involved, and the type of campaign."
            },
            {
                question: "How can I track the performance of my influencer marketing campaigns?",
                answer: "We track key metrics, such as reach, engagement, conversions, and return on investment (ROI), to measure the success of your campaigns."
            },
            {
                question: "Does Victory Cineworld provide any guarantees for influencer marketing results?",
                answer: "While we cannot guarantee specific results, we strive to deliver measurable outcomes and continuously optimize our campaigns to achieve your goals."
            },
            {
                question: "How does Victory Cineworld ensure brand safety and compliance with influencer marketing guidelines?",
                answer: "We adhere to all relevant guidelines and regulations to ensure brand safety and compliance."
            }
        ]
    },

];
