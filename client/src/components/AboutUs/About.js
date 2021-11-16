import React from "react";
import { Card,CardGroup } from 'react-bootstrap';
import {BsGithub} from 'react-icons/bs';
import './about.css';

const AboutUs = () => {
  return (
      <div>
          <h2 class="headerAbout">About Us</h2>
          <div class="cardContainerAbout">
            <CardGroup >
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Lia Mattacchione</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Back and Front-end integrator</Card.Subtitle>
                        <Card.Link href="#"> <BsGithub /> </Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Sallam Thabet</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Back and Front-end integrator</Card.Subtitle>
                        <Card.Link href="#"> <BsGithub /> </Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Jayme Winick</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Back and Front-end integrator</Card.Subtitle>
                        <Card.Link href="#"> <BsGithub /> </Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Charles Dawkins</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Back and Front-end integrator</Card.Subtitle>
                        <Card.Link href="#"> <BsGithub /> </Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Noyemi Ohanyan</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Back and Front-end integrator</Card.Subtitle>
                        <Card.Link href="#"> <BsGithub /> </Card.Link>
                    </Card.Body>
                </Card>
            </CardGroup>
          </div>
        </div>  
  );
};

export default AboutUs;
