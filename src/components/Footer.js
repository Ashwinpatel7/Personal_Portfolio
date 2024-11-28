import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; // Import email icon

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        {/* Designer Credits */}
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Ashwin Patel</h3>
        </Col>
        {/* Copyright Information */}
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Ashwin Patel</h3>
        </Col>
        {/* Social Media Links */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Ashwinpatel7" // Update GitHub link
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/AshwinP51434622" // Update Twitter link
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ashwin-patel-936964228/" // Update LinkedIn link
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            
  <li className="social-icons">
    <a
      href="mailto:your.email@example.com"  // Replace with your actual email address
      style={{ color: "white" }}
      target="_blank" 
      rel="noopener noreferrer"
    >
      <MdEmail />
    </a>
  </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
