import React from "react";
import { Card,CardGroup } from 'react-bootstrap';
import {BsGithub} from 'react-icons/bs';
import './about.css';

const AboutUs = () => {
  return (
      <div>
          <h2 className="headerAbout">About Us</h2>
          <div className="cardContainerAbout">
            <CardGroup >
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Lia Mattacchione</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Back and Front-end integrator</Card.Subtitle>
                        <Card.Link href="https://github.com/LiaMattacchione"> <BsGithub /> </Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Sallam Thabet</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Front-end integrator</Card.Subtitle>
                        <Card.Link href="https://github.com/thabets"> <BsGithub /> </Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Jayme Winick</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Back-end creator and front-end integrator</Card.Subtitle>
                        <Card.Link href="https://github.com/jaymemichelle"> <BsGithub /> </Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Charles Dawkins</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Front-end Component Design</Card.Subtitle>
                        <Card.Link href="https://github.com/DawkC"> <BsGithub /> </Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Noyemi Ohanyan</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Front-end Design</Card.Subtitle>
                        <Card.Link href="https://github.com/nomioh"> <BsGithub /> </Card.Link>
                    </Card.Body>
                </Card>
            </CardGroup>
          </div>
        </div>  
  );
};

export default AboutUs;
