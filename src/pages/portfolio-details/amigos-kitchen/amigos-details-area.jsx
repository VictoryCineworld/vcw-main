import React from "react";
import Carousel from "react-bootstrap/Carousel";

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

const AmigosPortfolioDetailsArea = () => {
  return (
    <div className="container-fluid px-5 py-5" style={{ maxWidth: "1600px" }}>
      <div className="row gx-5 gy-5">
        {/* LEFT SECTION UPDATED */}
        <div className="col-lg-8">
          <h2 className="mb-5 fw-bold border-bottom pb-3 text-dark" style={{ fontSize: "3.25rem", lineHeight: "2.6rem" }}>
            Instagram Management for Amigose Kitchen
          </h2>

          <section className="mb-5">
            <h4
              className="fw-semibold text-secondary mb-3"
              style={{ fontSize: "2.35rem", letterSpacing: "0.02em" }}
            >
              Client Overview
            </h4>
            <div
              className="bg-light p-4 rounded shadow-sm"
              style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "#333" }}
            >
              <p className="mb-0"  style={{ fontSize: "2rem", letterSpacing: "0.02em" }}>
                <strong>Amigose Kitchen</strong> is a renowned standalone restaurant
                in Chhatrapati Sambhajinagar, celebrated for its fusion cuisine and
                vibrant ambiance. They partnered with <strong>Victory Cineworld</strong> to enhance
                their Instagram presence through strategic content management.
              </p>
            </div>
          </section>

          <section className="mb-5">
            <h4
              className="fw-semibold text-secondary mb-3"
              style={{ fontSize: "2.35rem", letterSpacing: "0.02em" }}
            >
              Project Goals
            </h4>
            <ul
              className="ps-4"
              style={{
                fontSize: "2.05rem",
                lineHeight: "1.7",
                color: "#444",
                marginBottom: "0",
              }}
            >
              <li className="mb-2">- Establish a cohesive and visually appealing brand identity.</li>
              <li className="mb-2">- Drive foot traffic through engaging Instagram content.</li>
              <li className="mb-2">- Increase awareness within the local community.</li>
              <li className="mb-2">- Highlight culinary offerings and restaurant atmosphere.</li>
            </ul>
          </section>

          <section className="mb-5">
            <h4
              className="fw-semibold text-secondary mb-4"
              style={{ fontSize: "2.35rem", letterSpacing: "0.02em" }}
            >
              Services Delivered
            </h4>
            <div className="row g-4">
              {[
                {
                  title: "Instagram Management",
                  points: [
                    "Content scheduling and publishing",
                    "Community engagement (DMs, comments)",
                  ],
                },
                {
                  title: "Reels Production (8/month)",
                  points: [
                    "Creative food and lifestyle storytelling",
                    "High-quality visuals with smooth editing",
                  ],
                },
                {
                  title: "Motion Graphics (4/month)",
                  points: [
                    "Festive, offers, and promotional posts",
                    "Modern layouts and branding consistency",
                  ],
                },
                {
                  title: "Product Photography",
                  points: [
                    "Dish showcases and chef portraits",
                    "Focus on natural lighting and detail",
                  ],
                },
                {
                  title: "Post-Production",
                  points: [
                    "Color grading and music overlay",
                    "Optimized export for platform engagement",
                  ],
                },
              ].map((item, idx) => (
                <div className="col-md-6" key={idx}>
                  <div
                    className="p-4 border rounded bg-white h-100 shadow-sm"
                    style={{ fontSize: "2.05rem", lineHeight: "1.6", color: "#333" }}
                  >
                    <h5 className="fw-semibold mb-3">{item.title}</h5>
                    <ul className="ps-3 mb-0">
                      {item.points.map((point, i) => (
                        <li key={i} className="mb-2">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-5">
            <h4
              className="fw-semibold text-secondary mb-3"
              style={{ fontSize: "2.35rem", letterSpacing: "0.05em" }}
            >
              Results & Impact
            </h4>
            <ul
              className="ps-4"
              style={{
                fontSize: "2.05rem",
                lineHeight: "1.7",
                color: "#444",
                marginBottom: "0",
              }}
            >
              <li className="mb-2">- Growth in follower count and story views</li>
              <li className="mb-2">- Improved user engagement and content interaction</li>
              <li className="mb-2">- Increased weekend foot traffic via viral reels</li>
              <li className="mb-2">- Elevated digital brand perception in the region</li>
            </ul>
          </section>

          <section className="mb-5">
            <h4
              className="fw-semibold text-secondary mb-3"
              style={{ fontSize: "2.35rem", letterSpacing: "0.02em" }}
            >
              Conclusion
            </h4>
            <div
              className="bg-light p-4 rounded shadow-sm"
              
            >
              <p className="mb-0" style={{ fontSize: "2rem", lineHeight: "2", color: "#333" }}>
                This case study illustrates the effectiveness of visual branding,
                strategic content, and consistent engagement. Amigose Kitchen's
                Instagram page transformed into a local digital hotspot, reflecting
                its unique culinary identity.
              </p>
            </div>
          </section>
        </div>

        {/* RIGHT SECTION UNCHANGED */}
        <div className="col-lg-4">
          <h4 className="fw-bold border-bottom pb-2 mb-4 text-dark">Visual Preview</h4>
          <div
            className="mb-5"
            style={{
              width: "100%",
              height: "600px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
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

          <h4 className="fw-bold border-bottom pb-2 mb-3 text-dark">Client Feedback</h4>
          <Carousel indicators={false} controls={false} interval={4000} fade>
            {testimonials.map((t, index) => (
              <Carousel.Item key={index}>
                <div className="card p-3 shadow-sm border-0 bg-light">
                  <blockquote className="blockquote mb-0 text-center">
                    <p className="fst-italic">"{t.quote}"</p>
                    <footer className="blockquote-footer mt-2">{t.author}</footer>
                  </blockquote>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AmigosPortfolioDetailsArea;
