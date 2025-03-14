import React from "react";

const timelineData = [
  {
    number: "01",
    title: "Pre-production Planning",
    description:
      "We help plan the entire video process, from scripting to storyboarding and location scouting.",
  },
  {
    number: "02",
    title: "Video Shooting & Production",
    description:
      "Our team captures high-quality footage with professional equipment to bring your vision to life.",
  },
  {
    number: "03",
    title: "Video Editing & Post-production",
    description:
      "We edit and enhance your footage, adding effects, sound design, and color grading for a polished final product.",
  },
  {
    number: "04",
    title: "Animation & Motion Graphics",
    description:
      "We create stunning animations and motion graphics to elevate your video content and tell your story creatively.",
  },
  {
    number: "05",
    title: "Video Marketing Strategy",
    description:
      "We assist with marketing strategies, including video SEO, distribution channels, and audience targeting.",
  },
  {
    number: "06",
    title: "Video Production Consulting",
    description:
      "Our experts provide consultations to ensure your video production meets industry standards and exceeds expectations.",
  },
];

const StepArea = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f9", padding: "50px 0" }}>
      <style>
        {`
          .timeline-container {
            max-width: 1000px;
            margin: auto;
            position: relative;
            padding: 0 15px;
          }

          .timeline:before {
            content: "";
            position: absolute;
            left: 50%;
            width: 6px;
            height: 100%;
            background: #f4a261; /* Light orange */
            transform: translateX(-50%);
          }

          .timeline-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 50px;
            position: relative;
            transition: transform 0.3s ease-in-out;
          }

          .timeline-item:nth-child(odd) {
            flex-direction: row-reverse;
          }

          .timeline-item:hover {
            transform: translateX(10px);
          }

          .timeline-content {
            background: #ffffff;
            padding: 25px;
            box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            width: 45%;
            text-align: center;
          }

          .timeline-content h3 {
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 15px;
            color: #333;
          }

          .timeline-content p {
            font-size: 16px;
            color: #666;
            line-height: 1.6;
          }

          .timeline-marker {
            width: 55px;
            height: 55px;
            background: #f4a261; /* Light orange */
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            font-weight: bold;
            color: white;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
            transition: background-color 0.3s ease;
          }

          .timeline-marker:hover {
            background-color: #e07b3e; /* Darker light orange */
          }

          @media (max-width: 768px) {
            .timeline:before {
              left: 20px;
            }

            .timeline-item {
              flex-direction: column;
              align-items: flex-start;
            }

            .timeline-content {
              width: 100%;
              margin-left: 0;
            }

            .timeline-marker {
              left: 20px;
              transform: none;
            }

            .timeline-content h3 {
              font-size: 20px;
            }
          }
        `}
      </style>

      <div className="timeline-container">
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "32px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Our Video Production Services
        </h2>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-marker">{item.number}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepArea;
