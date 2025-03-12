import React from "react";

const BrandAreaSection = ({ brandWrapperClass, borderClass }) => {
  const number = [
    {
      id: 1,
      title: "7+ Years",
      subtitle: "Of Proven Track Record",
    },
    {
      id: 2,
      title: "98%",
      subtitle: "Customer Satisfaction",
    },
    {
      id: 3,
      title: "1,500+ Projects",
      subtitle: "Managed & Completed",
    },
  ];

  return (
    <div className={`${brandWrapperClass ? brandWrapperClass : "brand-area soft-blackbg"}`}>
      <div className="container">
        <div className="row justify-content-center">
          {number.map((item, index) => (
            <div
              key={item.id}
              className={`col-12 col-md-4 mb-3 d-flex justify-content-center`}
            >
              <div className={borderClass ? borderClass : "fm-brand is-whiste p-3"}>
                <div className="d-flex align-items-center text-start">
                  <div>
                    <h3 className="text-white fw-bold">{item.title}</h3>
                    <p className="section-subtitle mb-0">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandAreaSection;
