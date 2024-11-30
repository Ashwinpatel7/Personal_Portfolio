import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import storyPulse from "../../Assets/Projects/storyPulse.png";
import finFlow from "../../Assets/Projects/finFlow.png";
import versionFlow from "../../Assets/Projects/versionFlow.png";
import torrentShare from "../../Assets/Projects/torrentShare.png";
import chatBot from "../../Assets/Projects/chatBot.png";
import workSpaceHub from "../../Assets/Projects/workSpaceHub.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project 1: StoryPulse */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={storyPulse}
              isBlog={false}
              title="StoryPulse"
              description={`Developed a blogging platform using the MERN stack, improving user engagement by 25%
                through an intuitive UI/UX and smooth functionality. Integrated third-party APIs and implemented
                secure user authentication, ensuring a 100% increase in user retention by safeguarding data and
                enhancing security.`}
              ghLink="https://github.com/ashwinpatel7/StoryPulse" // Replace with actual link
              demoLink="https://storypulse.example.com/" // Replace with actual demo link
            />
          </Col>

          {/* Project 2: FinFlow */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finFlow}
              isBlog={false}
              title="FinFlow"
              description={`Designed and implemented a financial management platform to streamline user financial
                tracking, increasing operational efficiency by 40%. Built backend services with Express.js and Mongoose
                for seamless MongoDB integration, reducing latency by 30%. Implemented comprehensive input validation
                using Zod, ensuring data integrity and a 15% decrease in data processing errors.`}
              ghLink="https://github.com/ashwinpatel7/FinFlow" // Replace with actual link
              demoLink="https://finflow.example.com/" // Replace with actual demo link
            />
          </Col>

          {/* Project 3: VersionFlow */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={versionFlow}
              isBlog={false}
              title="VersionFlow"
              description={`A decentralized version control system designed for seamless collaboration among
                developers. Features include branching, merging, and conflict resolution, allowing teams to manage 
                their codebase effectively. Built with Node.js, Express.js, and MongoDB for backend services, and 
                React.js for a clean and interactive interface.`}
              ghLink="https://github.com/ashwinpatel7/VersionFlow" // Replace with actual link
              demoLink="https://landing-page-ashwin.netlify.app/" // Replace with actual demo link
            />
          </Col>

          {/* Project 4: TorrentConnect */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={torrentShare}
              isBlog={false}
              title="TorrentConnect"
              description={`A peer-to-peer file-sharing platform that simplifies the process of sharing large files
                over distributed networks. Developed using Python and Flask for backend, with WebTorrent integration
                for seamless torrent management. Ensures fast and secure file sharing with an intuitive user interface.`}
              ghLink="https://github.com/ashwinpatel7/TorrentConnect" // Replace with actual link
              demoLink="https://landing-page-ashwin.netlify.app/" // Replace with actual demo link
            />
          </Col>

          {/* Project 5: ChatSphere */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatBot}
              isBlog={false}
              title="ChatSphere"
              description={`An AI-powered chatbot designed to provide instant support and assistance. Built with 
                Python and TensorFlow, integrated with GPT APIs for intelligent conversational capabilities. Ideal for 
                customer support, ChatSphere offers natural language understanding and response generation.`}
              ghLink="https://github.com/ashwinpatel7/ChatSphere" // Replace with actual link
              demoLink="https://landing-page-ashwin.netlify.app/" // Replace with actual demo link
            />
          </Col>

          {/* Project 6: WorkSpaceHub */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workSpaceHub}
              isBlog={false}
              title="WorkSpaceHub"
              description={`A team collaboration platform inspired by Slack, offering real-time messaging, file 
                sharing, and project management tools. Developed using React.js, Node.js, and MongoDB for a 
                full-stack implementation. Features include private channels, task boards, and customizable user settings.`}
              ghLink="https://github.com/ashwinpatel7/WorkSpaceHub" // Replace with actual link
              demoLink="https://landing-page-ashwin.netlify.app/" // Replace with actual demo link
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
