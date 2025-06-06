import React from "react";

const timelineData = [
  {
    number: "01",
    title: "Video Scripts",
    description:
      "Scripts for corporate videos, explainer videos, promotional videos, and social media videos. These scripts ensure clear messaging, engaging storytelling, and brand consistency, helping businesses effectively communicate their message to the audience. Our scripts focus on audience engagement, call-to-action strategies, and seamless narration.",
  },
  {
    number: "02",
    title: "Documentary Scripts",
    description:
      "Engaging and informative scripts for documentaries on various subjects. These scripts include thorough research, compelling storytelling, and structured narration to provide an immersive experience. We ensure factual accuracy and an emotionally engaging tone that keeps viewers hooked from start to finish.",
  },
  {
    number: "03",
    title: "Commercial Scripts",
    description:
      "Creative and persuasive scripts for television, radio, and online commercials. These scripts are designed to capture attention quickly, highlight key selling points, and drive customer action. We specialize in concise yet impactful storytelling that aligns with brand objectives and target audience needs.",
  },
  {
    number: "04",
    title: "Film & TV Scripts",
    description:
      "Feature film scripts, television show pilots, and episodic scripts. Our scripts are developed with strong character arcs, engaging plotlines, and immersive dialogues. We focus on script structure, pacing, and thematic depth to create compelling narratives for both mainstream and independent productions.",
  },
  {
    number: "05",
    title: "Presentation Scripts",
    description:
      "Engaging and informative scripts for presentations, conferences, and events. These scripts are designed for clear communication, audience engagement, and impactful storytelling. We help speakers deliver structured and confident presentations that leave a lasting impression.",
  },
  {
    number: "06",
    title: "Voiceover Scripts",
    description:
      "Compelling and concise scripts for voiceover narration. These scripts ensure a smooth and natural flow for narrators while maintaining clarity and engagement. Our scripts cater to a variety of formats, including e-learning, advertisements, audiobooks, and corporate training materials.",
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
