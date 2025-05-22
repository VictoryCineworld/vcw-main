import { useState } from 'react';
import { technologies } from '@data/tech';

const TechSection = () => {
  const [activeCategory, setActiveCategory] = useState('Video Production');

  const white = '#FFFFFF';
  const gold = '#DDBE7B';

  const baseButtonStyle = {
    padding: '10px 20px',
    margin: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const activeButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: gold,
    color: white,
    boxShadow: `0 4px 8px rgba(255, 215, 0, 0.3)`,
  };

  const inactiveButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: 'transparent',
    color: white,
    opacity: 0.9,
  };

  const iconWrapperStyle = {
    display: 'inline-block',
    transition: 'transform 0.3s',
    padding: '10px',
    borderRadius: '8px',
  };

  const iconStyle = {
    fontSize: '40px',
    color: gold,
    transition: 'color 0.3s ease',
  };

  const iconTitleStyle = {
    color: white,
    marginTop: '8px',
    fontWeight: '500',
  };

  return (
    <section
      className="tech-section section-spacing soft-blackbg text-center"
      style={{ paddingTop: '10px', paddingBottom: '60px' }}
    >
      <div style={{ minHeight: '400px' }} className="container">
        <h2
          className="section-main-title text-white title-anim team-name-clr mb-5"
          style={{ marginTop: '39px', paddingBottom: '20px' }}
        >
          Technologies We Work With
        </h2>

        {/* Category Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {Object.keys(technologies).map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={isActive ? activeButtonStyle : inactiveButtonStyle}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = gold;
                    e.currentTarget.style.color = white;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = white;
                  }
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Technology Icons */}
        <div
          className="row justify-content-center container"
          style={{ marginTop: '40px' }}
        >
          {technologies[activeCategory].map((tech, index) => (
            <div
              key={index}
              className="col-6 col-md-3 my-4 d-flex flex-column align-items-center"
            >
              <div
                style={iconWrapperStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.backgroundColor = '#2c2c2c';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div style={iconStyle}>{tech.icon}</div>
              </div>
              <p style={iconTitleStyle}>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
