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
  },    // Metadata
    {
        type: "metadata",
        title: "Product Shoot",
        breadcrumb: "Services / Video Production"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: Showcasing Your Products in the Best Light",
        content: "At Victory Cineworld, we understand the importance of high-quality product photography and videography. Our team captures stunning visuals that showcase your products in the best possible light, enticing customers and driving sales."
    },

    // Services
    {
        type: "services",
        title: "Our Product Shoot Services",
        content: "We offer a comprehensive range of product shoot services to ensure your products are showcased perfectly:",
        categories: [
            {
                title: "Product Photography",
                description: "We capture high-resolution images of your products from various angles, showcasing their details and features.",
                serviceNum: "1"
            },
            {
                title: "Product Videography",
                description: "We create engaging product videos that demonstrate the features and benefits of your products.",
                serviceNum: "2"
            },
            {
                title: "Lifestyle Shoots",
                description: "We capture images and videos of your products in real-life settings, showcasing their use and appeal.",
                serviceNum: "3"
            },
            {
                title: "E-commerce Photography",
                description: "We create high-quality images for your online store, optimizing them for e-commerce platforms.",
                serviceNum: "4"
            }
        ]
    },

    // CTA (Call to Action)
    {
        type: "cta",
        title: "Let's Capture Your Products in the Best Light",
        content: "Contact us today to schedule a product shoot and discover how Victory Cineworld can help you showcase your products to the world."
    },

    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What types of product shoots does Victory Cineworld offer?",
                answer: "We offer product photography, product videography, lifestyle shoots, and e-commerce photography."
            },
            {
                question: "How does a product shoot work?",
                answer: "We discuss your needs, plan the shoot, and capture high-quality images and videos of your products."
            },
            {
                question: "What makes Victory Cineworld's product shots unique?",
                answer: "Our focus on creativity, quality, and client collaboration sets us apart."
            },
            {
                question: "What is the typical turnaround time for a product shoot?",
                answer: "The turnaround time varies depending on the scope and complexity of the project."
            },
            {
                question: "How much do product shoot services cost?",
                answer: "The cost varies depending on the number of products, the type of shoot, and the required deliverables."
            },
            {
                question: "Does Victory Cineworld provide retouching and editing services for product images?",
                answer: "Yes, we provide professional retouching and editing services to enhance the quality of your images."
            },
            {
                question: "How can I get started with a product shoot?",
                answer: "Contact us today to schedule a consultation and discuss your project requirements."
            },
            {
                question: "What types of products does Victory Cineworld specialize in shooting?",
                answer: "We can shoot a wide range of products, including clothing, accessories, electronics, food, and more."
            }
        ]
    },

    
];
