import React, { useMemo } from "react";
import brandData from "@data/brand-data-new";

const ClientSlider = ({ brandWrapperClass, borderClass, columnGaps = [10, 10, 10, 10] }) => {
  // Define different animation durations (in seconds) for each reel.
  const animationDurations = [16, 11, 15, 14];

  // Split the brandData into four separate arrays.
  const dividedReels = useMemo(() => {
    const chunkSize = Math.floor(brandData.length / 4);
    return Array.from({ length: 4 }, (_, index) => {
      const chunk = brandData.slice(index * chunkSize, (index + 1) * chunkSize);
      return [...chunk, ...chunk]; // Duplicate for seamless animation.
    });
  }, []);

  return (
    <div className={brandWrapperClass ? brandWrapperClass : "brand-area bg-common-black section-spacing"}>
      <div className="container">
        <div className="row section-spacing-bottom wow fadeInUp" data-delay="0.3s">
          <div className="col-12">
            <div className="fm-director-sec-title text-center">
              <span className="section-subtitle title-anim">OUR WORKS</span>
              <div>
                <h2 className="section-main-title text-white title-anim featured-work-title">
                  Growing with our Clients
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="slot-machine-container">
          {dividedReels.map((reelData, reelIndex) => (
            <div 
              key={reelIndex} 
              className="slot-machine-column" 
              style={{ gap: `${columnGaps[reelIndex] || 10}px` }} // Default value fallback
            >
              <div
                className="slot-machine-content"
                style={{
                  animation: `scroll ${animationDurations[reelIndex]}s linear infinite`,
                }}
              >
                {reelData.map((item, i) => (
                  <div
                    key={i}
                    className={borderClass ? borderClass : "fm-brand"}
                    style={{
                      maxHeight: "180px",
                      marginBottom: `${columnGaps[reelIndex] || 10}px`, // Default value fallback
                    }}
                  >
                    {item.brandSvg}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS using a JSX style block */}
      <style jsx>{`
        .slot-machine-container {
          display: flex;
          justify-content: space-between;
          gap: 20px; /* General horizontal gap */
        }

        .slot-machine-column {
          width: 40%;
          height: 300px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        :global(.fm-brand img) {
          width: 250px;
          height: 135px;
          object-fit: contain;
          display: block;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .slot-machine-container {
            flex-wrap: wrap;
            justify-content: space-around;
          }
          .slot-machine-column {
            width: 48%;
            height: 170px;
            margin-bottom: 20px;
          }
          .slot-machine-column:nth-child(n+3) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ClientSlider;
