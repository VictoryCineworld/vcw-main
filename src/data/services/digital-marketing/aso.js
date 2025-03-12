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
  },      // Metadata
    {
        type: "metadata",
        title: "App Store Optimization",
        breadcrumb: "Home > Services > ASO"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: App Store Optimization for Success",
        content: "App Store Optimization (ASO) is crucial for increasing your app's visibility and downloads on app stores like the Apple App Store and Google Play Store. At Victory Cineworld, we help you optimize your app store presence to reach a wider audience and boost your app's success."
    },

    // Services
    {
        type: "services",
        title: "Our ASO Services",
        content: "We offer a comprehensive range of ASO services to ensure your app stands out and attracts more downloads:",
        categories: [
            {
                title: "Keyword Research",
                description: "We identify relevant keywords and phrases that users are likely to use when searching for apps like yours.",
                serviceNum: "1"
            },
            {
                title: "App Store Optimization",
                description: "We optimize your app's title, description, keywords, and screenshots to improve your app's ranking in search results.",
                serviceNum: "2"
            },
            {
                title: "App Store Page Design",
                description: "We create visually appealing and informative app store pages that encourage users to download your app.",
                serviceNum: "3"
            },
            {
                title: "Competitive Analysis",
                description: "We analyze your competitors' ASO strategies to identify opportunities and gain a competitive edge.",
                serviceNum: "4"
            },
            {
                title: "App Store Optimization",
                description: "We monitor your app's performance and make ongoing adjustments to your ASO strategy to improve your app's ranking and visibility.",
                serviceNum: "5"
            }
        ]
    },

    // CTA (Call to Action)
    {
        type: "cta",
        title: "Let's Boost Your App's Visibility",
        content: "Contact us today to schedule a consultation and discover how Victory Cineworld can help you optimize your app store presence and boost your app's downloads."
    },

    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What is ASO and why is it important?",
                answer: "ASO is the process of optimizing your app's listing on app stores to improve its visibility and increase downloads."
            },
            {
                question: "How does ASO help my app?",
                answer: "ASO helps your app get discovered by potential users when they search for apps on the app store."
            },
            {
                question: "What are the key elements of a successful ASO strategy?",
                answer: "Key elements include keyword research, app title optimization, description optimization, and visual optimization."
            },
            {
                question: "How long does it take to see results from ASO?",
                answer: "You may start seeing results within a few weeks, but ASO is an ongoing process that requires continuous optimization."
            },
            {
                question: "How much does ASO cost?",
                answer: "The cost of ASO services varies depending on the scope of the project and your specific needs."
            },
            {
                question: "Does ASO guarantee top rankings on the app store?",
                answer: "While ASO can significantly improve your app's ranking, it doesn't guarantee a top position."
            },
            {
                question: "How can I track the progress of my ASO campaign?",
                answer: "We provide regular reports on your app's performance, including download numbers, keyword rankings, and other key metrics."
            },
            {
                question: "Does Victory Cineworld offer any guarantees for ASO results?",
                answer: "While we cannot guarantee specific rankings, we strive to deliver measurable results and continuously optimize our strategies to achieve your goals."
            }
        ]
    },

    // CTA Buttons
];
