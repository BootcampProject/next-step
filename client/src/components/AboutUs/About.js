import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import "./about.css";

const AboutUs = () => {
  return (
    <div about>
      <div className="aboutHero">
        <h2 className="headerAbout ">About Us</h2>
        <p className="whatwedo">
          The purpose of Next Step is to create a supplemental learning platform
          where youth at various elementary, middle and high school levels can
          better prepare themselves in their courses and maximize their learning
          experience.
        </p>
      </div>
      <div className="cardContainerAbout center flex-row flex-container mar">
        <Row xs={1} md={2} className="g-4">
          <Card
            style={{ width: "20rem" }}
            className="card mar center flex-item"
          >
            <Card.Body>
              <Card.Title>Lia Mattacchione</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Front-end integrator
              </Card.Subtitle>
              <Card.Link href="https://github.com/LiaMattacchione">
                {" "}
                <BsGithub />{" "}
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "20rem" }}
            className="card mar center flex-item"
          >
            <Card.Body>
              <Card.Title>Sallam Thabet</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Front-end integrator
              </Card.Subtitle>
              <Card.Link href="https://github.com/thabets">
                {" "}
                <BsGithub />{" "}
              </Card.Link>
            </Card.Body>
          </Card>
        </Row>

        <Row xs={1} md={2} className="g-4">
          <Card
            style={{ width: "20rem" }}
            className="card mar center flex-item"
          >
            <Card.Body>
              <Card.Title>Jayme </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Back-end Developer
              </Card.Subtitle>
              <Card.Link href="https://github.com/jaymemichelle">
                {" "}
                <BsGithub />{" "}
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "20rem" }}
            className="card mar center flex-item"
          >
            <Card.Body>
              <Card.Title>Charles Dawkins</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Front-end Component Design
              </Card.Subtitle>
              <Card.Link href="https://github.com/DawkC">
                {" "}
                <BsGithub />{" "}
              </Card.Link>
            </Card.Body>
          </Card>
        </Row>
        <Row xs={1} md={2} className="g-4">
          <Card
            style={{ width: "20rem" }}
            className="card mar center flex-item"
          >
            <Card.Body>
              <Card.Title>Noyemi Ohanyan</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Front-end Design
              </Card.Subtitle>
              <Card.Link href="https://github.com/nomioh">
                {" "}
                <BsGithub />{" "}
              </Card.Link>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
