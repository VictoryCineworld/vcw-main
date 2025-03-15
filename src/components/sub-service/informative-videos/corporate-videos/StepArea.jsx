import React from "react";

const timelineData = [
  {
    id: 1,
    title: "Concept Development & Research",
    number: "01",
    description:
      "We collaborate with you to develop compelling documentary concepts and conduct in-depth research to gather factual information and compelling narratives.",
  },
  {
    id: 2,
    title: "Filming & Cinematography",
    number: "02",
    description:
      "Our skilled cinematographers capture stunning visuals and conduct insightful interviews to bring your documentary to life.",
  },
  {
    id: 3,
    title: "Editing & Post-Production",
    number: "03",
    description:
      "We edit your footage seamlessly, incorporating music, sound effects, and motion graphics to create a captivating and impactful viewing experience.",
  },
  {
    id: 4,
    title: "Voiceover & Narration",
    number: "04",
    description:
      "We record professional voiceovers and narrations to enhance the storytelling and provide a clear and engaging presentation.",
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
