import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashwin Patel </span>
            from <span className="purple"> India.</span>
            <br />
            I am pursuing my Bachelors at Bharati Vidyapeeth College of Engineering.
            <br />
            I am a passionate software developer with real-world experience and creating impactful projects.
            <br />
            <br />
            Besides development, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Upcoming Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring and Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming and Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that simplify life and empower users all across the globe"{" "}
          </p>
          <footer className="blockquote-footer">Ashwin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
