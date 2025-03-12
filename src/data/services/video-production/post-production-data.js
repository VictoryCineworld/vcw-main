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
        title: "Post Production Services",
        breadcrumb: "Services / Video Production"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: Transforming Footage into Masterpieces",
        content: "At Victory Cineworld, we believe that post-production is the key to transforming raw footage into a polished and impactful final product. Our expert post-production team utilizes the latest technology and techniques to bring your vision to life."
    },

    // Services
    {
        type: "services",
        title: "Our Post-Production Services",
        content: "We offer a comprehensive range of post-production services to ensure your project is executed flawlessly:",
        categories: [
            {
                title: "Video Editing",
                description: "We edit your footage seamlessly, crafting a compelling narrative that engages your audience.",
                serviceNum: "1"
            },
            {
                title: "VFX & Animation",
                description: "We add stunning visual effects, animations, and motion graphics to enhance your videos.",
                serviceNum: "2"
            },
            {
                title: "Color Grading & DI",
                description: "We refine the visual aesthetic with professional color grading and digital intermediate services, ensuring a polished and impactful look.",
                serviceNum: "3"
            },
            {
                title: "Sound Design & Mixing",
                description: "We create immersive audio experiences by designing sound effects, adding music, and mixing audio for optimal clarity and impact.",
                serviceNum: "4"
            }
        ]
    },

    // CTA (Call to Action)
    {
        type: "cta",
        title: "Let's Transform Your Footage",
        content: "Contact us today to discuss your post-production needs and discover how Victory Cineworld can bring your vision to life."
    },

    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What post-production services does Victory Cineworld offer?",
                answer: "We offer a wide range of services, including video editing, VFX, color grading, sound design, and more."
            },
            {
                question: "How does the post-production process work?",
                answer: "We work closely with you to understand your vision and refine the footage to achieve your desired outcome."
            },
            {
                question: "What makes Victory Cineworld's post-production services unique?",
                answer: "Our focus on creativity, technical expertise, and client collaboration sets us apart."
            },
            {
                question: "What is the typical turnaround time for post-production services?",
                answer: "The turnaround time varies depending on the scope and complexity of the project."
            },
            {
                question: "How much do post-production services cost?",
                answer: "The cost varies depending on factors such as the length, complexity, and scope of the project."
            },
            {
                question: "Does Victory Cineworld provide feedback and revisions during post-production?",
                answer: "Yes, we provide multiple rounds of revisions to ensure your complete satisfaction."
            },
            {
                question: "How can I get started with post-production services?",
                answer: "Contact us today to discuss your project needs and receive a quote."
            },
            {
                question: "What types of files does Victory Cineworld accept for post-production?",
                answer: "We accept a variety of file formats, including RAW, ProRes, and more."
            }
        ]
    },
];
