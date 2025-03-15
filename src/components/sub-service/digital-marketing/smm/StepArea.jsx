import React from "react";

const timelineData = [
  {
    id: 1,
    title: "Social Media Strategy",
    number: "01",
    description:
      "At Victory Cineworld, our social media strategy aligns with your business goals and maximizes your online presence. We start by understanding your brand, target audience, and objectives to create a customized plan. Our team combines a focus on research, competitive analysis, and industry trends to craft an effective strategy. It helps build brand awareness, boosts engagement, and drives conversions. Whether you intend to increase fans, attract site visitors, or improve logo loyalty, we offer a method that complements your social media impact across platforms like Facebook, Instagram, Twitter, and LinkedIn.",
  },
  {
    id: 2,
    title: "Content Creation & Scheduling",
    number: "02",
    description:
      "Our content creation & scheduling services focus on producing high-quality, attractive content that speaks to the public. From the eye-catching view to the well-prepared copy, we develop materials that resonate with your followers and promote your brand’s message. We create a material calendar, which ensures a smooth post plan on platforms to maintain the public's interest. Whether it's a blog post, graphics on social media, or video, our team takes on all aspects of content production.",
  },
  {
    id: 3,
    title: "Community Management",
    number: "03",
    description:
      "Effective community management is important to promote the loyalty of the brand and have a permanent relationship with the public. At Victory Cineworld, we individually link your followers and respond to comments, messages, and reviews. Our team nourishes a positive society around your brand, raises questions, and solves and encourages conversations.",
  },
  {
    id: 4,
    title: "Social Media Advertising",
    number: "04",
    description:
      "Social media advertising enables your business to connect specifically with desired customers while making a strong impact. We create purpose-driven social media marketing campaigns using Facebook, Instagram, LinkedIn, and Twitter so users can convert, recognize your brand, and create new leads.",
  },
  {
    id: 5,
    title: "Social Media Analytics",
    number: "05",
    description:
      "Our company's social media analytics service monitors essential metrics for campaign success, including engagement metrics and reach and conversion statistics. Through advanced tools, we generate comprehensive reports outlining successful initiatives along areas for change. Our analytical framework helps us shape strategic improvements.",
  },
  {
    id: 6,
    title: "Influencer Marketing",
    number: "06",
    description:
      "The power of influencer marketing at Victory Cineworld will enable your brand to boost credibility and extend its reach to new audiences. Our service helps businesses locate influencers whose values combine with their target customer base to craft authentic marketing partnerships.",
  },
];

const StepArea = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9", padding: "40px 0" }}>
      <style>
        {`
        .timeline-container {
          max-width: 900px;
          margin: auto;
          position: relative;
        }

        .timeline:before {
          content: "";
          position: absolute;
          left: 50%;
          width: 4px;
          height: 100%;
          background: #ddd;
          transform: translateX(-50%);
        }

        .timeline-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          position: relative;
        }

        .timeline-item:nth-child(odd) {
          flex-direction: row-reverse;
        }

        .timeline-content {
          background: white;
          padding: 20px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          width: 45%;
          transition: transform 0.3s ease-in-out;
        }

        .timeline-content:hover {
          transform: scale(1.05);
        }

        .timeline-marker {
          width: 50px;
          height: 50px;
          background: #ff6347;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          color: white;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .timeline:before {
            left: 20px;
          }

          .timeline-item {
            flex-direction: column !important;
            align-items: flex-start;
          }

          .timeline-content {
            width: 100%;
            text-align: left;
            margin-left: 40px;
          }

          .timeline-marker {
            left: 20px;
            transform: none;
          }
        }
        `}
      </style>

      <div className="timeline-container">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Our Social Media Services
        </h2>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-marker">{item.number}</div>
              <div className="timeline-content">
                <h3 style={{ marginBottom: "10px", fontSize: "20px" }}>
                  {item.title}
                </h3>
                <p
                  style={{ fontSize: "16px", lineHeight: "1.5", color: "#555" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepArea;
