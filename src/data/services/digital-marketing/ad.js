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
        title: "Ads Marketing",
        breadcrumb: "Home > Services > Ads Marketing"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: Reach Your Target Audience with Precision",
        content: "At Victory Cineworld, we help you reach your target audience with precision through effective paid advertising campaigns. Our team leverages the power of various advertising platforms to drive traffic, generate leads, and boost conversions."
    },

    // Services
    {
        type: "services",
        title: "Our Ads Marketing Services",
        content: "We offer a comprehensive range of advertising services to ensure your campaigns are effective and achieve your marketing goals:",
        categories: [
            {
                title: "Google Ads (PPC)",
                description: "We manage and optimize Google Ads campaigns to reach your target audience through targeted ads on Google Search, Google Display Network, and YouTube.",
                serviceNum: "1"
            },
            {
                title: "Meta Ads",
                description: "We create and manage effective ad campaigns on Facebook, Instagram, and Messenger to reach your target audience and achieve your marketing objectives.",
                serviceNum: "2"
            },
            {
                title: "Social Media Advertising",
                description: "We run targeted ad campaigns on other social media platforms, such as Twitter, LinkedIn, and Pinterest.",
                serviceNum: "3"
            },
            {
                title: "Programmatic Advertising",
                description: "We leverage programmatic advertising technologies to reach your target audience efficiently and effectively.",
                serviceNum: "4"
            },
            {
                title: "Display Advertising",
                description: "We create and manage display ads that appear on websites and apps across the internet.",
                serviceNum: "5"
            },
            {
                title: "Retargeting Campaigns",
                description: "We create retargeting campaigns to re-engage users who have previously interacted with your brand.",
                serviceNum: "6"
            }
        ]
    },

    // CTA (Call to Action)
    {
        type: "cta",
        title: "Let's Reach Your Target Audience",
        content: "Contact us today to schedule a consultation and discover how Victory Cineworld can help you create effective advertising campaigns that drive results."
    },

    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What types of advertising services does Victory Cineworld offer?",
                answer: "We offer a wide range of advertising services, including Google Ads, Meta Ads, social media advertising, programmatic advertising, and display advertising."
            },
            {
                question: "How does the advertising process work?",
                answer: "We start with a consultation to understand your business goals and target audience. Then, we develop a targeted advertising strategy, create compelling ads, and manage your campaigns on an ongoing basis."
            },
            {
                question: "What makes Victory Cineworld's advertising services unique?",
                answer: "We prioritize data-driven insights, creative ad design, and continuous optimization to ensure maximum ROI."
            },
            {
                question: "How much do advertising services cost?",
                answer: "The cost of advertising services varies depending on the scope of the project, the chosen platforms, and your budget."
            },
            {
                question: "Does Victory Cineworld provide any guarantees for advertising results?",
                answer: "While we cannot guarantee specific results, we strive to deliver measurable outcomes and continuously optimize your campaigns to achieve your goals."
            },
            {
                question: "How can I track the performance of my advertising campaigns?",
                answer: "We provide detailed reports on key metrics, such as clicks, impressions, conversions, and ROI."
            },
            {
                question: "Does Victory Cineworld offer any consulting services for advertising?",
                answer: "Yes, we offer consulting services to help you develop your overall advertising strategy and make informed decisions about your campaigns."
            },
            {
                question: "How can I ensure the safety and compliance of my advertising campaigns?",
                answer: "We adhere to all relevant advertising guidelines and regulations to ensure the safety and compliance of your campaigns."
            }
        ]
    },

    // // CTA Buttons
    // {
    //     type: "cta",
    //     title: "Call to Action",
    //     content: `
    //         <a href="/contact" class="button">Contact Us</a>
    //         <a href="/portfolio" class="button">View Our Portfolio</a>
    //     `
    // }
];
