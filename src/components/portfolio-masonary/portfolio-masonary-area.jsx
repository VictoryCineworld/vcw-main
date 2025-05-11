import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Local data array with custom URLs
const PortfolioData = [
  {
    id: 1,
    title: "Amigos Kitchen",
    image: "/assets/img/brand/amigos-2.jpg",
    date: "April 2025",
    description: "A thrilling escape into the wild peaks.",
    url: "/portfolio-details/amigos-kitchen", // 👈 Add your unique URL here
  },
  {
    id: 2,
    title: "Annujj's Vail Perfume",
    image: "/assets/img/brand/vail-2.jpg",
    date: "March 2025",
    description: "Ride through the golden dunes under the sun.",
    url: "/portfolio-details/vail-perfume",
  },
  {
    id: 3,
    title: "Arihant Honda",
    image: "/assets/img/brand/honda-1.jpg",
    date: "February 2025",
    description: "Urban exploration of skyline views.",
    url: "/portfolio-details/arihant-honda",
  },
  {
    id: 4,
    title: "Astrologer Ashok Pagaria",
    image: "/assets/img/brand/astrology-1.jpg",
    date: "January 2025",
    description: "Experience tropical bliss across isles.",
    url: "/portfolio-details/astrology",
  },
  {
    id: 5,
    title: "Aura Ability Unfold",
    image: "/assets/img/brand/aura_ability.png",
    date: "December 2024",
    description: "Snow-covered landscapes and cozy vibes.",
    url: "/portfolio-details/aura-ability-unfold",
  },
  {
    id: 6,
    title: "Dr Prashant Chawan",
    image: "/assets/img/brand/prashant-1.png",
    date: "November 2024",
    description: "Dive into traditions and heritage.",
    url: "/portfolio-details/dr-prashant",
  },
  {
    id: 7,
    title: "Dr Roshni Totla",
    image: "/assets/img/brand/Roshni-2.png",
    date: "November 2024",
    description: "Dive into traditions and heritage.",
    url: "/portfolio-details/cultural-journey",
  },
  {
    id: 8,
    title: "Dr Umesh Mundada",
    image: "/assets/img/brand/Umesh-1.png",
    date: "November 2024",
    description: "Dive into traditions and heritage.",
    url: "/portfolio-details/cultural-journey",
  },
  {
    id: 9,
    title: "Dr Yogesh's Healing Center",
    image: "/assets/img/brand/Yogesh-1.png",
    date: "November 2024",
    description: "Dive into traditions and heritage.",
    url: "/portfolio-details/cultural-journey",
  },
  {
    id: 10,
    title: "E-Tender Guru",
    image: "/assets/img/brand/tg-3.png",
    date: "November 2024",
    description: "Dive into traditions and heritage.",
    url: "/portfolio-details/cultural-journey",
  },
  {
    id: 11,
    title: "Ganesh Jadhav (Rohit Finance)",
    image: "/assets/img/brand/Rohit-1.png",
    date: "November 2024",
    description: "Dive into traditions and heritage.",
    url: "/portfolio-details/cultural-journey",
  },
  {
    id: 12,
    title: "Intellify Health Podcast",
    image: "/assets/img/brand/Intellify-1.png",
    date: "November 2024",
    description: "Dive into traditions and heritage.",
    url: "/portfolio-details/cultural-journey",
  },
  {
    id: 13,
    title: "Krishma",
    image: "/assets/img/brand/Krishma-1.png",
    date: "November 2024",
    description: "Dive into traditions and heritage.",
    url: "/portfolio-details/cultural-journey",
  },
  {
    id: 14,
    title: "Lokmat - Vidhya Aradhana",
    image: "/assets/img/brand/Lokmat-1.png",
    date: "November 2024",
    description: "Dive into traditions and heritage.",
    url: "/portfolio-details/cultural-journey",
  },
  {
    id: 15,
    title: "Shetal Bhakharey",
    image: "/assets/img/brand/Sheetal-1.png",
    date: "November 2024",
    description: "Dive into traditions and heritage.",
    url: "/portfolio-details/cultural-journey",
  },
  {
    id: 16,
    title: "Ujwalatai Pawar CBSE School",
    image: "/assets/img/brand/UTP-1.png",
    date: "November 2024",
    description: "Dive into traditions and heritage.",
    url: "/portfolio-details/cultural-journey",
  },
  {
    id: 17,
    title: "Walmi Podcast",
    image: "/assets/img/brand/Walmi-1.png",
    date: "November 2024",
    description: "Dive into traditions and heritage.",
    url: "/portfolio-details/cultural-journey",
  },
  {
    id: 18,
    title: "Yalla Yalla",
    image: "/assets/img/brand/YY-1.png",
    date: "November 2024",
    description: "Dive into traditions and heritage.",
    url: "/portfolio-details/cultural-journey",
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
            <Link href={item.url} className="text-decoration-none">
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
