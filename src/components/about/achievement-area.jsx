import React from "react";

const AchievementArea = () => {
  return (
    <>
      <div className="achievement-area section-spacing bg-light py-5">
        <div className="container">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-6">
              <div className="card shadow-sm rounded-3 p-4 h-100">
                <div className="card-header bg-transparent border-0 pb-3">
                  <h2 className="section-main-title mb-3 text-gray small">
                    1. Consultation & Concept Development
                  </h2>
                </div>
                <div className="card-body small">
                  <p>
                    <strong>Understanding Your Vision:</strong> We begin with a thorough consultation to understand your goals, objectives, and target audience. We delve deep into your brand story, message, and desired outcomes.
                  </p>
                  <p>
                    <strong>Concept Development:</strong> Based on our understanding, we develop creative concepts and storyboards that align with your vision and resonate with your audience.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6">
              <div className="card shadow-sm rounded-3 p-4 h-100">
                <div className="card-header bg-transparent border-0 pb-3">
                  <h2 className="section-main-title mb-3 text-gray small">
                    2. Pre-Production & Planning
                  </h2>
                </div>
                <div className="card-body small">
                  <p>
                    <strong>Scriptwriting & Storyboarding:</strong> We craft compelling scripts and develop detailed storyboards, ensuring every scene and shot contributes to the overall narrative.
                  </p>
                  <p>
                    <strong>Casting & Location Scouting:</strong> We carefully select the right talent and secure suitable locations to bring your vision to life.
                  </p>
                  <p>
                    <strong>Budgeting & Scheduling:</strong> We create a detailed budget and timeline to ensure the project stays on track and within your budget.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6">
              <div className="card shadow-sm rounded-3 p-4 h-100">
                <div className="card-header bg-transparent border-0 pb-3">
                  <h2 className="section-main-title mb-3 text-gray small">
                    3. Production & Filming
                  </h2>
                </div>
                <div className="card-body small">
                  <p>
                    <strong>On-Set Collaboration:</strong> Our experienced crew works closely with you throughout the filming process, ensuring smooth operations and capturing high-quality footage.
                  </p>
                  <p>
                    <strong>Creative Flexibility:</strong> We embrace a collaborative approach, allowing for creative adjustments and improvisation to ensure the final product reflects your unique vision.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-6">
              <div className="card shadow-sm rounded-3 p-4 h-100">
                <div className="card-header bg-transparent border-0 pb-3">
                  <h2 className="section-main-title mb-3 text-gray small">
                    4. Post-Production & Delivery
                  </h2>
                </div>
                <div className="card-body small">
                  <p>
                    <strong>Editing & VFX:</strong> Our skilled editors meticulously craft your footage, incorporating visual effects and sound design to enhance the storytelling.
                  </p>
                  <p>
                    <strong>Color Grading & DI:</strong> We refine the visual aesthetic with professional color grading and digital intermediate services, ensuring a polished and impactful final product.
                  </p>
                  <p>
                    <strong>Delivery & Support:</strong> We deliver the final product in the desired format and provide ongoing support to ensure your complete satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementArea;
