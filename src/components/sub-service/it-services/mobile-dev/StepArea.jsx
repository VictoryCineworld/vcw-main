import React from "react";

const timelineData = [
  {
    number: "01",
    duration: "1 st",
    title: "Mobile App UI/UX Design",
    description:
      "At Victorycineworld, we aim to build smooth UI/UX designs that make users happy. Our professional team makes sure every app we build looks attractive and is simple to use. We put users first in our designs, giving customers an easy, natural experience. We create designs that meet your business needs and what users want, from basic sketches to detailed prototypes. Our approach will make your app stand out with its stunning designs and functions, getting users involved and building long-lasting customer loyalty.",
  },
  {
    number: "02",
    duration: "2 nd",
    title: "Backend Development",
    description:
      "Our backend development services are the foundation of your mobile app. They make sure it works well, can grow, and stays safe. Moreover, robust services ensure the apps performance, scalability, and security while bringing unique concepts to life. At Victorycineworld, we build strong server-side solutions that smoothly align with your app's front end. You might need help with data management, user login, or connecting to other services. We take care of all the tech stuff to make your app run. Our way of building the backend makes your app fast and reliable. This means users can use your app without problems. We use the newest tech to make sure your app can grow as your business gets bigger.",
  },
  {
    number: "03",
    duration: "3 rd",
    title: "QA and Support",
    description:
      "At Victorycineworld, we think of apps that are functional and flawless. Our QA and support services make sure your app performs at its best. We do this by testing it a lot and always making it better. We run detailed tests to check how well it works how safe it is how easy it is to use, and if it works on all devices. This is to make sure your app runs well no matter what. Our tech team also helps out after we launch the app. We fix any problems and add updates to keep it working great. With us, you can be sure your app will stay reliable, safe, and easy to use.",
  },
  {
    number: "04",
    duration: "4 th",
    title: "Mobile App Evolution",
    description:
      "Mobile applications always develop, which is why your app should be. In Victorycinworld, we help you customize and grow through the evolution of the mobile app. Whether it is combining new features, adapting performance, or ensuring compatibility with the latest OS updates, we keep your app relevant in the competing market. Our team is ahead of industry trends, and can provide us with constant updates to meet the changed needs of our users. With our mobile app evolutionary services, your app will be innovative and attractive and customize your business goals while scoring and fitting new challenges.",
  },
  {
    number: "05",
    duration: "5 th",
    title: "Cross-Platform App Development",
    description:
      "In Victorycinworld, we are experts on app development across platforms, so you can reach a wide audience with a single code base. Our talented developers use frames such as Reacts Native, Flyers, and Xamarin to create apps that originally go on both iOS and Android. This approach reduces growth cost and time, while ensuring that your app performs continuously on different platforms. We focus on offering high quality user experience regardless of the device. With our crossing platform solutions, you can expand the access and maintain the app performance without having to develop individual apps for each platform.",
  },
  {
    number: "06",
    duration: "6 th",
    title: "App Store Optimization (ASO)",
    description:
      "Victorycineworld gives professional App Store Optimization (ASO) services to ensure your app gets noticed. ASO is the key to enhancing your app’s visibility and ranking inside the app stores. Our team optimizes keywords, descriptions, app titles, and visuals to boost discoverability. By focusing on the right target market and refining your app’s metadata, we assist in boosting natural downloads. We also analyze overall performance metrics to make ongoing enhancements that power higher consequences. With our ASO offerings, your app will entice more customers, reap higher ratings, and, in the end, deliver stronger engagement and increase.",
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
