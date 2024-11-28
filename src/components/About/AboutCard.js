import React from "react";
import Card from "react-bootstrap/Card";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function AboutCard() {
  return (
    <Card
      className="quote-card-view"
      style={{
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "1.1em" }}>
            Hi Everyone, I am <span className="purple"> Ashwin Patel </span> 
            from <span className="purple"> India.</span>
            <br />
            I am pursuing my Bachelors at Bharati Vidyapeeth College of Engineering.
            <br />
            I am a passionate software developer with real-world experience, creating impactful projects.
            <br />
            <br />
            Besides development, I enjoy:
          </p>
          <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
            <li className="about-activity" style={{ marginBottom: "8px" }}>
              <BsFillArrowRightCircleFill
                style={{ color: "#6c63ff", marginRight: "10px" }}
              />
              Exploring Upcoming Technologies
            </li>
            <li className="about-activity" style={{ marginBottom: "8px" }}>
              <BsFillArrowRightCircleFill
                style={{ color: "#6c63ff", marginRight: "10px" }}
              />
              Mentoring and Teaching
            </li>
            <li className="about-activity">
              <BsFillArrowRightCircleFill
                style={{ color: "#6c63ff", marginRight: "10px" }}
              />
              Gaming and Traveling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)", marginTop: "20px", fontSize: "1.2em" }}>
            "Strive to build things that simplify life and empower users all across the globe."
          </p>
          <footer className="blockquote-footer" style={{ fontSize: "1em", marginTop: "10px" }}>
            Ashwin
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
