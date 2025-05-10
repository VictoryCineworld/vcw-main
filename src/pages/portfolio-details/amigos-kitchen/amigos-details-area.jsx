import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";

// import amigos from "@assets/video/amigos.png";

const sliderItems = [
  {
    type: "image",
    src: "https://i.pinimg.com/736x/1a/cf/b8/1acfb88db086cbec7dde3b31a5512e8f.jpg",
  },
  {
    type: "image",
    src: "https://i.pinimg.com/736x/db/2b/e0/db2be0683f97128e0d0b88fc5f30bfb4.jpg",
  },
  {
    type: "image",
    src: "https://i.pinimg.com/736x/77/32/2f/77322f963a2876b7580127c8fa16082f.jpg",
  },
];

const testimonials = [
  {
    quote: "Great experience and excellent design!",
    author: "John Doe",
  },
  {
    quote: "Highly recommend working with this team.",
    author: "Jane Smith",
  },
  {
    quote: "Professional, creative, and on-time delivery.",
    author: "Sarah Johnson",
  },
];

const sectionHeadingStyle = {
  fontSize: "3rem",
  fontWeight: "700",
  textAlign: "center",
  marginBottom: "1.5rem",
  color: "#343a40",
  borderBottom: "2px solid #ddd",
  paddingBottom: "0.5rem",
};

const AmigosPortfolioDetailsArea = () => {
  return (
    <div className="container-fluid">
      <header className="bg-white text-center py-4">
        {/* <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Amigos Portfolio Details
        </h1> */}
      </header>

      <div className="row p-4">
        {/* LEFT SECTION */}
        <div className="col-md-8">
          <h2 style={sectionHeadingStyle}>
            Instagram Management for Amigose Kitchen
          </h2>
{/* 
          <div className="mb-4">
            <h4 className="fw-bold text-center">Client Overview</h4>
            <div className="p-3 bg-light rounded shadow-sm">
              <p>
                <strong>Amigose Kitchen</strong> is a well-known restaurant in
                Chhatrapati Sambhajinagar, celebrated for its fusion dishes and
                lively atmosphere. A hotspot for foodies and families alike, the
                brand partnered with <strong>Victory Cineworld</strong> to boost
                its digital game.
              </p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="fw-bold text-success text-center">
              Project Scope & Objectives
            </h4>
            <ul className="ps-3">
              <li>🎯 Build a visually enticing and consistent brand presence.</li>
              <li>📈 Drive footfall through engaging Instagram content.</li>
              <li>📍 Increase popularity across Chhatrapati Sambhajinagar.</li>
              <li>🍽️ Highlight special dishes, chef stories & ambiance.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="fw-bold text-warning text-center">
              Service Package Delivered
            </h4>
            <div className="row g-3">
              {[
                "📱 Instagram Handling",
                "🎬 Reels Production (8/mo)",
                "✨ Motion Graphics (4/mo)",
                "📸 Product Shoots",
                "🎞️ Post-Production",
              ].map((title, idx) => (
                <div className="col-sm-6" key={idx}>
                  <div className="p-3 bg-light rounded shadow-sm h-100">
                    <h5 className="text-secondary">{title}</h5>
                    <ul className="ps-3 mb-0">
                      <li>
                        {title.includes("Instagram")
                          ? "Content planning & publishing"
                          : title.includes("Reels")
                          ? "Aesthetic food & BTS reels"
                          : title.includes("Motion")
                          ? "Festive & promo graphics"
                          : title.includes("Shoots")
                          ? "Dishes, chef plating & customer candids"
                          : "Editing, transitions & licensed music"}
                      </li>
                      <li>
                        {title.includes("Instagram")
                          ? "DM & comment engagement"
                          : title.includes("Reels")
                          ? "Creative storytelling moments"
                          : title.includes("Motion")
                          ? "Brand colors & modern layout"
                          : title.includes("Shoots")
                          ? "Natural lighting & crisp visuals"
                          : "Reel optimization for engagement"}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="fw-bold text-info text-center">📊 Results & Impact</h4>
            <ul className="ps-3">
              <li>📈 Spike in followers & story views</li>
              <li>💬 More engagement and UGC tagging</li>
              <li>🔥 Several viral reels = full weekends</li>
              <li>💡 Stronger brand recall across the city</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="fw-bold text-danger text-center">
              🏁 Conclusion & Key Takeaways
            </h4>
            <div className="p-3 bg-light rounded shadow-sm">
              <p>
                Amigose Kitchen’s success on Instagram shows the power of
                localized, strategic content. With compelling visuals and expert
                storytelling, Victory Cineworld turned their page into a brand
                magnet.
              </p>
              <p className="fst-italic text-muted text-center">
                (Sample visuals, thumbnails, and analytics can be added here.)
              </p>
            </div> 
          </div>*/}
        </div>

        {/* RIGHT SECTION */}
        <div className="col-md-4">
          <h2 style={sectionHeadingStyle}>Slider</h2>
          <div
            style={{
              width: "100%",
              maxWidth: "360px",
              height: "640px",
              margin: "0 auto",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#000",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
          >
            <Carousel indicators={false}>
              {sliderItems.map((item, index) => (
                <Carousel.Item key={index}>
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={`Slide ${index + 1}`}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <video
                      src={item.src}
                      controls
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          <div className="mt-5">
            <h2 style={sectionHeadingStyle}>Testimonials</h2>
            <Carousel indicators={false} controls={false} interval={4000} fade>
              {testimonials.map((t, index) => (
                <Carousel.Item key={index}>
                  <div
                    className="card p-3 shadow-sm mx-3"
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "#f9f9f9",
                      border: "none",
                    }}
                  >
                    <blockquote className="blockquote mb-0 text-center">
                      <p style={{ fontStyle: "italic" }}>"{t.quote}"</p>
                      <footer className="blockquote-footer mt-2">{t.author}</footer>
                    </blockquote>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmigosPortfolioDetailsArea;
