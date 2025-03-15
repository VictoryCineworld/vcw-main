import React from "react";

const timelineData = [
  {
    id: 1,
    title: "AI Model Development",
    number: "01",
    description:
      "Design and train machine learning models using state-of-the-art algorithms for predictive analysis and automation.",
  },
  {
    id: 2,
    title: "Data Preprocessing & Feature Engineering",
    number: "02",
    description:
      "Clean, normalize, and transform raw data to improve the performance and accuracy of AI models.",
  },
  {
    id: 3,
    title: "Model Deployment & Integration",
    number: "03",
    description:
      "Deploy AI models into production environments and integrate them with applications for real-world use cases.",
  },
  {
    id: 4,
    title: "AI Performance Monitoring & Optimization",
    number: "04",
    description:
      "Continuously monitor model performance and retrain with new data to ensure accuracy and efficiency.",
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
          AI & Machine Learning Process
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