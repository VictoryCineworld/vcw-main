import React from "react";

const timelineData = [
  {
    number: "01",
    title: "Instagram Reels Editing",
    description:
      "Adding music or any other sound, subtitles, banners, and logo to raw footages.",
  },
  {
    number: "02",
    title: "Long-form videos Editing",
    description:
      "Editing IGTV videos, Instagram Live or LinkedIn Live sessions, and any other long-form videos for repurposing content on Youtube.",
  },
  {
    number: "03",
    title: "Podcast to Video Editing",
    description:
      "Adding images, other visual representations, transitions, etc., to audio podcasts and converting them into videos.",
  },
  {
    number: "04",
    title: "Article to Video Editing",
    description:
      "Using listicle-based articles or how-to guides and converting them into explainer videos that make your content more compelling and increase its reach.",
  },
  {
    number: "05",
    title: "Ad Copywriting Services",
    description:
      "Eye-catching ad content for campaigns, product launches, and promotions.",
  },
  {
    number: "06",
    title: "Social Media Copywriting Services",
    description:
      "Short-form, engaging content crafted specifically for social media platforms.",
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
          Our Copywriting Services
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
