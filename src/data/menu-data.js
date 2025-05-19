const menu_data = [
  {
    id: 1,
    hasDropdown: false,
    active:true,
    title: "Home",
    link: "/",
    submenus: [
      { title: "Movie Director", link: "/" },
      { title: "Filming Works", link: "/filming-works" },
      { title: "Movie and Film", link: "/movie-film" },
      { title: "Filming History", link: "/filming-history" },
      { title: "Popular Movies", link: "/popular-movies" },
    ],
  },
  {
    id: 2,
    hasDropdown: true,
    title: "About",
    link: "",
    submenus: [
      { title: "Our Process", link: "/about" },
      { title: "Team", link: "/team" },
      { title: "Careers", link: "/terms-conditions" },
    ],
  },
  {
    id: 10,
    hasDropdown: true,
    megaMenu: true, // Enable mega menu
    title: "Services",
    link: "/services/content-creation-content-designing/social-media-videos", // Updated from "/service" to "/services"
    mega_menus: [
      {
        title: "Content Creation & Content Designing", // Ensured consistency in naming
        link: "",
        submenus: [
          {
            title: "Social Media Videos",
            link: "/services/content-creation-content-designing/social-media-videos",
          },
          {
            title: "Copywriting",
            link: "/services/content-creation-content-designing/copy-writing",
          },
          {
            title: "Script Writing",
            link: "/services/content-creation-content-designing/script-writing",
          },
          {
            title: "Campaign Content Creation",
            link: "/services/content-creation-content-designing/campaign-content-creation", // Corrected endpoint
          },
        ],
      },
  
      {
        title: "Digital Marketing",
        link: "", // Updated to include "/services"
        submenus: [
          {
            title: "SEO",
            link: "/services/digital-marketing/seo",
          },
          {
            title: "ASO",
            link: "/services/digital-marketing/aso",
          },
          {
            title: "Social Media Management",
            link: "/services/digital-marketing/social-media-management",
          },
          {
            title: "Influencer Marketing",
            link: "/services/digital-marketing/influencer-marketing",
          },
          {
            title: "Ads Marketing",
            link: "/services/digital-marketing/ads-marketing", // Updated endpoint
            submenus: [
              {
                title: "Google Ads (PPC)",
                link: "/services/digital-marketing/ads-marketing/google-ads-ppc", // Updated endpoint
              },
              {
                title: "Meta Ads",
                link: "/services/digital-marketing/ads-marketing/meta-ads", // Updated endpoint
              },
            ],
          },
        ],
      },
      {
        title: "IT Services",
        link: "", // Updated to include "/services"
        submenus: [
          {
            title: "Web Design & Development",
            link: "/services/it-services/web-design-development",
          },
          {
            title: "Mobile App Development",
            link: "/services/it-services/mobile-app-development",
          },
          {
            title: "AI/ML",
            link: "/services/it-services/ai-ml",
          },
        ],
      },
      {
        title: "Video Production",
        link: "", // Updated to include "/services"
        submenus: [
          {
            title: "Video Production Services",
            link: "/services/video-production/video-production-services", // Updated endpoint
          },
          {
            title: "Post Production",
            link: "/services/video-production/post-production",
          },
          {
            title: "Product Shoot",
            link: "/services/video-production/product-shoot",
          },
          {
            title: "Video Editing",
            link: "/services/video-production/video-editing", // Updated endpoint
          },
          {
            title: "VFX/Animation Videos",
            link: "/services/video-production/vfx-animation-videos", // Updated endpoint
          },
          {
            title: "Color Grading/DI",
            link: "/services/video-production/color-grading-di", // Updated endpoint
          },
        ],
      },
      {
        title: "Informative Videos",
        link: "", // Updated to include "/services"
        submenus: [
          {
            title: "Documentary",
            link: "/services/informative-videos/documentary",
          },
          {
            title: "Corporate Video",
            link: "/services/informative-videos/corporate-video",
          },
          {
            title: "Educational Video",
            link: "/services/informative-videos/educational-video",
          },
          {
            title: "Project Video",
            link: "/services/informative-videos/project-video",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    hasDropdown: false,
    title: "Portfolio",
    link: "/portfolio-masonary",
    // submenus: [
    //   { title: "Portfolio-Masonary", link: "/portfolio-masonary" },
    //   { title: "Portfolio-Slider", link: "/portfolio-slider" },
    //   { title: "Portfolio Details", link: "/portfolio-details" },
    // ],
  },

  {
    id: 4,
    title: "FAQs",
    hasDropdown:false,
    megaMenu: false,
    link: "/faq",
    pages: false,
    mega_menus: [
      // {
      //   title: "Page Layout 1",  
      //   submenus: [
      //     { title: "About us", link: "/about" },
      //     { title: "Service", link: "/service" },
      //     { title: "Service Details", link: "/service-details" },
      //     { title: "Team", link: "/team" },
      //     { title: "Team Details", link: "/team-details" },
      //     { title: "Pricing", link: "/pricing" },
      //   ],
      // },
      // {
      //   title: "Page Layout 2",
      //   link: "#",
      //   submenus: [
      //     { title: "Faq", link: "/faq" },
      //     { title: "Terms & Conditions", link: "/terms-conditions" },
      //     { title: "Privacy & Policy", link: "/policy-privacy" },
      //     { title: "Login", link: "/login" },
      //     { title: "Register", link: "/register" },
      //     { title: "404", link: "/404" },
      //   ],
      // },
      // {
      //   title: "Page Layout 3",
      //   link: "#",
      //   submenus: [
      //     { title: "Shop-Sidebar", link: "/shop-sidebar" },
      //     { title: "Shop 4 Column", link: "/shop-4" },
      //     { title: "Cart", link: "/cart" },
      //     { title: "Checkout", link: "/checkout" },
      //     { title: "Shop Details", link: "/shop-details" }
      //   ],
      // },
    ],
  },
  // {
  //   id: 5,
  //   hasDropdown: true,
  //   title: "Blog",
  //   link: "/blog",
  //   submenus: [
  //     { title: "Blog Standard", link: "/blog" },
  //     { title: "Blog Wide", link: "/blog-wide" },
  //     { title: "Blog Details", link: "/blog-details" },
  //   ],
  // },
  {
    id: 6,
    hasDropdown: false,
    title: "Contact",
    link: "/contact",
  },
  // secondary dropdown
  {
    id: 7,
    secondaryDropdown: true,
    title: "Pages",
    link: "/blog",
    submenus: [
      { title: "About us", link: "/about" },
      { title: "Service", link: "/service" },
      { title: "Service Details", link: "/service-details" },
      { title: "Team", link: "/team" },
      { title: "Team Details", link: "/team-details" },
      { title: "Shop-Sidebar", link: "/shop-sidebar" },
      { title: "Shop 4 Column", link: "/shop-4" },
      { title: "Checkout", link: "/checkout" },
      { title: "Shop Details", link: "/shop-details" },
      { title: "Blog", link: "/blog" },
      { title: "Blog Details", link: "/blog-details" },
      { title: "Faq", link: "/faq" },
      { title: "Pricing", link: "/pricing" },
      { title: "Cart", link: "/cart" },
      { title: "Terms & Conditions", link: "/terms-conditions" },
      { title: "Privacy & Policy", link: "/policy-privacy" },
      { title: "Contact", link: "/contact" },
      { title: "Login", link: "/login" },
      { title: "Register", link: "/register" },
      { title: "404", link: "/404" },
    ],
  }
];

export default menu_data;
