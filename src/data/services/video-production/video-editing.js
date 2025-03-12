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
        title: "Video Editing",
        breadcrumb: "Home > Services > Video Editing"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: Crafting Compelling Narratives",
        content: "At Victory Cineworld, our skilled editors transform raw footage into polished and impactful videos that tell compelling stories. We use the latest editing techniques and software to create videos that are engaging, informative, and visually stunning."
    },

    // Services
    {
        type: "services",
        title: "Our Video Editing Services",
        content: "We offer a comprehensive range of video editing services to ensure your project is executed flawlessly:",
        categories: [
            {
                title: "Editing & Assembly",
                description: "We edit your footage seamlessly, crafting a clear and engaging narrative flow.",
                serviceNum: "1"
            },
            {
                title: "Color Grading & Correction",
                description: "We refine the color and tone of your footage to enhance the visual appeal.",
                serviceNum: "2"
            },
            {
                title: "Motion Graphics & Animation",
                description: "We add motion graphics, animations, and visual effects to enhance the storytelling and make your videos more dynamic.",
                serviceNum: "3"
            },
            {
                title: "Sound Design & Mixing",
                description: "We design sound effects, add music, and mix audio for optimal clarity and impact.",
                serviceNum: "4"
            }
        ]
    },

    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What types of video editing services does Victory Cineworld offer?",
                answer: "We offer a wide range of editing services, including assembly edits, color grading, motion graphics, and sound design."
            },
            {
                question: "How does the video editing process work?",
                answer: "We work closely with you to understand your vision and refine the footage to achieve your desired outcome."
            },
            {
                question: "What makes Victory Cineworld's video editing services unique?",
                answer: "Our focus on creativity, technical expertise, and client collaboration sets us apart."
            },
            {
                question: "What is the typical turnaround time for video editing?",
                answer: "The turnaround time varies depending on the scope and complexity of the project."
            },
            {
                question: "How much do video editing services cost?",
                answer: "The cost varies depending on the length of the footage, the level of editing required, and the number of revisions."
            },
            {
                question: "Does Victory Cineworld provide feedback and revisions during the editing process?",
                answer: "Yes, we provide multiple rounds of revisions to ensure your complete satisfaction."
            },
            {
                question: "How can I get started with video editing services?",
                answer: "Contact us today to discuss your project needs and receive a quote."
            },
            {
                question: "What types of files does Victory Cineworld accept for editing?",
                answer: "We accept a variety of file formats, including RAW, ProRes, and more."
            }
        ]
    },

    // CTA (Call to Action)
    {
        type: "cta",
        title: "Let's Transform Your Footage",
        content: "Contact us today to discuss your editing needs and discover how Victory Cineworld can help you craft compelling and impactful videos."
    }
];
