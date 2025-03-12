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
        title: "VFX/Animation Videos",
        breadcrumb: "Home > Services > VFX/Animation Videos"
    },

    // Heading
    {
        type: "heading",
        title: "Victory Cineworld: Bringing Imagination to Life",
        content: "At Victory Cineworld, we specialize in creating stunning visual effects (VFX) and captivating animations that bring your imagination to life. Our talented artists use the latest techniques and software to create breathtaking visuals for your videos."
    },

    // Services
    {
        type: "services",
        title: "Our VFX/Animation Services",
        content: "We offer a comprehensive range of VFX and animation services to ensure your project is executed flawlessly:",
        categories: [
            {
                title: "2D & 3D Animation",
                description: "We create engaging 2D and 3D animations for a wide range of applications, from explainer videos to music videos.",
                serviceNum: "1"
            },
            {
                title: "Visual Effects",
                description: "We add stunning visual effects to your footage, including compositing, green screen effects, and digital matte painting.",
                serviceNum: "2"
            },
            {
                title: "Motion Graphics",
                description: "We design and animate dynamic motion graphics for titles, lower thirds, and other on-screen elements.",
                serviceNum: "3"
            },
            {
                title: "Character Animation",
                description: "We bring characters to life with realistic and expressive animations.",
                serviceNum: "4"
            }
        ]
    },

    // CTA (Call to Action)
    {
        type: "cta",
        title: "Let's Bring Your Imagination to Life",
        content: "Contact us today to discuss your VFX/animation needs and discover how Victory Cineworld can help you create breathtaking visuals."
    },

    // FAQs
    {
        type: "faqs",
        title: "FAQs",
        questions: [
            {
                question: "What types of VFX and animation services does Victory Cineworld offer?",
                answer: "We offer a wide range of services, including 2D/3D animation, visual effects, motion graphics, and character animation."
            },
            {
                question: "How does the VFX/animation process work?",
                answer: "We work closely with you to understand your vision and create storyboards and concept art before beginning production."
            },
            {
                question: "What makes Victory Cineworld's VFX/animation services unique?",
                answer: "Our focus on creativity, technical expertise, and client collaboration sets us apart."
            },
            {
                question: "What is the typical turnaround time for VFX/animation projects?",
                answer: "The turnaround time varies depending on the scope and complexity of the project."
            },
            {
                question: "How much do VFX/animation services cost?",
                answer: "The cost varies depending on the type of work, the duration, and the level of complexity."
            },
            {
                question: "Does Victory Cineworld provide feedback and revisions during the VFX/animation process?",
                answer: "Yes, we provide multiple rounds of revisions to ensure your complete satisfaction."
            },
            {
                question: "How can I get started with a VFX/animation project?",
                answer: "Contact us today to schedule a consultation and discuss your project needs."
            },
            {
                question: "What types of projects are suitable for VFX/animation?",
                answer: "VFX/animation can be used in a wide range of projects, including commercials, music videos, documentaries, and more."
            }
        ]
    },

    
];
