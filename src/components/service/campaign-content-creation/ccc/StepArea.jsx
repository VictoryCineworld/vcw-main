import React from "react";

const timelineData = [
  { number: "01", title: "Video Scripts", description: "Scripts for corporate videos, explainer videos, promotional videos, and social media videos. These scripts ensure clear messaging, engaging storytelling, and brand consistency, helping businesses effectively communicate their message to the audience." },
  { number: "02", title: "Documentary Scripts", description: "Engaging and informative scripts for documentaries on various subjects. These scripts include thorough research, compelling storytelling, and structured narration to provide an immersive experience." },
  { number: "03", title: "Commercial Scripts", description: "Creative and persuasive scripts for television, radio, and online commercials. These scripts are designed to capture attention quickly, highlight key selling points, and drive customer action." },
  { number: "04", title: "Film & TV Scripts", description: "Feature film scripts, television show pilots, and episodic scripts. Our scripts are developed with strong character arcs, engaging plotlines, and immersive dialogues." },
  { number: "05", title: "Presentation Scripts", description: "Engaging and informative scripts for presentations, conferences, and events. These scripts are designed for clear communication, audience engagement, and impactful storytelling." },
  { number: "06", title: "Voiceover Scripts", description: "Compelling and concise scripts for voiceover narration. These scripts ensure a smooth and natural flow for narrators while maintaining clarity and engagement." },
];

const styles = {
  container: {
    backgroundColor: "#f7f7f7",
    padding: "40px 20px",
    textAlign: "center",
  },
  timelineWrapper: {
    position: "relative",
    borderLeft: "2px solid #c6c6c6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "20px",
    maxWidth: "800px",
    margin: "auto",
  },
  timelineItem: {
    position: "relative",
    width: "100%",
    marginBottom: "40px",
  },
  icon: {
    width: "50px",
    height: "50px",
    lineHeight: "50px",
    textAlign: "center",
    borderRadius: "50%",
    backgroundColor: "#fff",
    border: "2px solid #232323",
    position: "absolute",
    left: "-30px",
    top: "50%",
    transform: "translateY(-50%)",
    fontWeight: "bold",
  },
  contentBox: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "justify",
    fontSize: "medium",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
};

const StepArea = () => {
  return (
    <div style={styles.container}>
      <div>
        <span style={{ textTransform: "uppercase", color: "#6c757d" }}>Services</span>
        <h2 style={{ fontWeight: "bold", marginTop: "10px" }}>Services We Provide</h2>
      </div>
      <div style={styles.timelineWrapper}>
        {timelineData.map((item, index) => (
          <div key={index} style={styles.timelineItem}>
            <div style={styles.icon}>{item.number}</div>
            <div style={styles.contentBox}>
              <h5 style={styles.title}>{item.title}</h5>
              <p style={{ margin: 0 }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepArea;
