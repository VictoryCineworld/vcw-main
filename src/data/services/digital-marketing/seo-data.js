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
        title: "Search Engine Optimization (SEO)",
        breadcrumb: "Home > Services > SEO"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: Dominate Search Results",
        content: "In today's digital landscape, search engine optimization (SEO) is crucial for businesses to be found online. At Victory Cineworld, we help you improve your website's visibility in search engine results pages (SERPs) and attract organic traffic."
    },

    // Services
    {
        type: "services",
        title: "Our SEO Services",
        content: "We offer a comprehensive range of SEO services to ensure your website achieves optimal visibility and attracts the right audience:",
        categories: [
            {
                title: "Keyword Research",
                description: "We identify relevant keywords and phrases that your target audience is searching for.",
                serviceNum: "1"
            },
            {
                title: "On-Page Optimization",
                description: "We optimize your website's content, including titles, meta descriptions, headings, and images, to improve search engine rankings.",
                serviceNum: "2"
            },
            {
                title: "Off-Page Optimization",
                description: "We build high-quality backlinks from reputable websites to improve your website's authority and credibility.",
                serviceNum: "3"
            },
            {
                title: "Technical SEO",
                description: "We ensure your website is technically sound and easily crawlable by search engines.",
                serviceNum: "4"
            },
            {
                title: "Local SEO",
                description: "We optimize your website and online presence for local searches, helping you reach customers in your area.",
                serviceNum: "5"
            },
            {
                title: "Competitive Analysis",
                description: "We analyze your competitors' SEO strategies to identify opportunities and gain a competitive edge.",
                serviceNum: "6"
            },
            {
                title: "Reporting & Analytics",
                description: "We track your website's performance and provide regular reports on your SEO progress.",
                serviceNum: "7"
            }
        ]
    },

    // CTA (Call to Action)
    {
        type: "cta",
        title: "Let's Dominate Search Results",
        content: "Contact us today to schedule a consultation and discover how Victory Cineworld can help you improve your website's search engine rankings and attract more organic traffic."
    },

    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What is SEO and why is it important?",
                answer: "SEO is the process of optimizing your website to rank higher in search engine results pages (SERPs), making it easier for potential customers to find you online."
            },
            {
                question: "How long does it take to see results from SEO?",
                answer: "SEO is an ongoing process, and results can vary depending on various factors. However, you can typically start seeing improvements within a few months."
            },
            {
                question: "What are the key elements of a successful SEO strategy?",
                answer: "Key elements include keyword research, on-page optimization, off-page optimization, and technical SEO."
            },
            {
                question: "Does SEO guarantee top rankings?",
                answer: "While SEO can significantly improve your search engine rankings, it doesn't guarantee a top position."
            },
            {
                question: "How much does SEO cost?",
                answer: "The cost of SEO services varies depending on the scope of the project and your specific needs."
            },
            {
                question: "What is the difference between on-page and off-page SEO?",
                answer: "On-page SEO focuses on optimizing your website's content, while off-page SEO focuses on building high-quality backlinks from other websites."
            },
            {
                question: "How can I track the progress of my SEO campaign?",
                answer: "We provide regular reports on your website's performance, including keyword rankings, traffic, and other key metrics."
            },
            {
                question: "Does Victory Cineworld offer any guarantees for SEO results?",
                answer: "While we cannot guarantee specific rankings, we strive to deliver measurable results and continuously optimize our strategies to achieve your goals."
            }
        ]
    },

];
