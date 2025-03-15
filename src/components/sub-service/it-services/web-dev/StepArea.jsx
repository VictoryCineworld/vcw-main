import React from "react";

const timelineData = [
  {
    id: 1,
    title: "Generate Idea",
    number: "01",
    description:
      "Our team at Victory Cineworld focuses on objectives, brand identity, and target audience to guide our team in their work with you. With your vision as guidance, we generate fresh ideas to build a distinctive concept. The initial phase generates an original concept as the foundation for creating a significant video production.",
  },
  {
    id: 2,
    title: "Write a Script",
    number: "02",
    description:
      "Using the developed concept, we write a powerful script that clearly delivers your message. Victory Cineworld script writers deliver narratives through dialogue and direct messaging to create engaging content that produces audience engagement and memorable action.",
  },
  {
    id: 3,
    title: "Pre-Production Planning",
    number: "03",
    description:
      "In the pre-production stage, we determine all aspects, including storyboard development, location planning, talent recruitment, and operational preparation. Scheduling and budgeting occur during this phase to develop all essential resources needed for a smooth and efficient shoot while maintaining a well-defined timeline to fulfill quality requirements.",
  },
  {
    id: 4,
    title: "Shoot the Video",
    number: "04",
    description:
      "The skilled team transforms your vision into film productions while providing high-standard visual and audio quality. The production utilizes current technology extending from camera operation to illumination to create an interpretation of your screenplay. The video shoot we conduct delivers professional and polished delivery across both studio-based and outdoor locations.",
  },
  {
    id: 5,
    title: "Edit the Video",
    number: "05",
    description:
      "The editors proceed to transform recorded footage into a unified narrative after the filming stage is completed. The video production process requires cutting the footage followed by color correction and adding music and sound design while applying visual effects through an entire editing timeline. Every small aspect receives our precise attention to produce a polished final piece that matches the directions of your brand.",
  },
  {
    id: 6,
    title: "Code the Video",
    number: "06",
    description:
      "The final step includes video integration to your target platform through coding specifically tailored to website or social media, or any other digital platform requirements. The system provides seamless viewing while maintaining advanced visual standards and supports all types of devices thereby improving user experience.",
  },
  {
    id: 7,
    title: "Distribute and Optimize the Video",
    number: "06",
    description:
      "Your video will reach its intended audience as we distribute it through your website, social media channels, and any other most effective platforms. Based on strategic data analysis, we maximize video effectiveness to achieve high-reaching performance levels and successful engagement rates supporting your digital marketing initiatives.",
  },
  {
    id: 8,
    title: "Promote the Video",
    number: "07",
    description:
      "Our team develops customized promotion tactics for maximum engagement that incorporate paid advertisement, social media marketing, email campaigns, and other strategies. Our team selects specific viewer segments, enabling videos to reach them effectively while producing conversions and visibility that helps measure success.",
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
