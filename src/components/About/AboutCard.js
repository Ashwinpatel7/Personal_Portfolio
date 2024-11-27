import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashwin Patel</span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am pursuing my Bachelor of Technology in Electronics and Communication at Bharati Vidyapeeth College of Engineering.
            <br />
            I am a passionate software developer with experience in creating impactful projects.
            <br />
            <br />
            Besides coding, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring and Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming and Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that simplify life and empower users!"{" "}
          </p>
          <footer className="blockquote-footer">Ashwin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
