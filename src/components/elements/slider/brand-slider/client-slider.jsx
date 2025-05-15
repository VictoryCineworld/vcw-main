import React from "react";
import brandData from "@data/brand-data-new";

const ClientSlider = () => {
  return (
    <div className="brand-area">
      <div className="container">
        {/* Section Heading */}
        <div className="row section-spacing-bottom">
          <div className="col-12">
            <div className="fm-director-sec-title text-center">
              <span className="section-subtitle">OUR WORKS</span>
              <h2 className="section-main-title">Growing with our Clients</h2>
            </div>
          </div>
        </div>

        {/* Logo Grid */}
        <div className="brand-grid">
          {brandData.map((item, i) => (
            <div key={i} className="brand-box">
              {item.brandSvg}
            </div>
          ))}
        </div>
      </div>

      {/* Inline styles */}
      <style jsx>{`
        .brand-area {
          padding: 60px 0;
          background: #000; /* Or whatever background you want */
        }

        .section-spacing-bottom {
          margin-bottom: 40px;
        }

        .text-center {
          text-align: center;
        }

        .section-subtitle {
          color: #ccc;
          font-size: 16px;
          margin-bottom: 10px;
          display: block;
        }

        .section-main-title {
          color: #fff;
          font-size: 32px;
          margin: 0;
        }

        .brand-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .brand-box {
          background-color: transparent; /* Transparent box */
          border: 1px solid #666666; /* Thin border */
          border-radius: 3px; /* Small radius */
          padding: 10px;
          height: 135px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        :global(.brand-box img) {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .brand-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default ClientSlider;
