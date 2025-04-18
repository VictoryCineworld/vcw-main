import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Local data array
const PortfolioData = [
  {
    id: 1,
    title: "Mountain Adventure",
    image: "/assets/img/bg/banner3.jpg",
    date: "April 2025",
    description: "A thrilling escape into the wild peaks.",
  },
  {
    id: 2,
    title: "Desert Safari",
    image: "/assets/img/bg/banner4.jpg",
    date: "March 2025",
    description: "Ride through the golden dunes under the sun.",
  },
  {
    id: 3,
    title: "City Lights",
    image: "/assets/img/bg/banner5.jpg",
    date: "February 2025",
    description: "Urban exploration of skyline views.",
  },
  {
    id: 4,
    title: "Island Hopping",
    image: "/assets/img/bg/banner6.jpg",
    date: "January 2025",
    description: "Experience tropical bliss across isles.",
  },
  {
    id: 5,
    title: "Winter Wonderland",
    image: "/assets/img/bg/banner7.png",
    date: "December 2024",
    description: "Snow-covered landscapes and cozy vibes.",
  },
  {
    id: 6,
    title: "Cultural Journey",
    image: "/assets/img/bg/banner4.jpg",
    date: "November 2024",
    description: "Dive into traditions and heritage.",
  },
];

const PortfolioMasonaryArea = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="container py-5" style={{ backgroundColor: "#fff" }}>
      {/* Heading Section */}
      <div className="text-center mb-5" data-aos="fade-up">
        <h2 className="fw-bold">Explore Our Test Case Showcase</h2>
        <p className="text-muted">
          Discover visually detailed test scenarios designed to reflect real-world experiences.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="row gy-5 gx-4">
        {PortfolioData.map((item, index) => (
          <div
            className="col-lg-4 col-md-6"
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <Link href={`/portfolio-details/${item.id}`} className="text-decoration-none">
              <div className="card h-100 custom-card shadow-lg border-0 rounded-4 hover-lift">
                <Image
                  src={item.image}
                  className="card-img-top rounded-top-4"
                  alt={item.title}
                  width={400}
                  height={250}
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="card-body text-center px-4 pb-4 pt-3">
                  <h5 className="card-title text-dark fw-semibold">{item.title}</h5>
                  <p className="card-text text-muted mb-1">{item.date}</p>
                  <p className="card-text text-secondary small">{item.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .hover-lift {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .hover-lift:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
        .custom-card {
          background: #ffffff;
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .custom-card:hover {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
        }
      `}</style>
    </div>
  );
};

export default PortfolioMasonaryArea;
