import React from "react";
import { Card,CardGroup } from 'react-bootstrap';
import {BsGithub} from 'react-icons/bs';
import './about.css';

const AboutUs = () => {
  return (
      <div>
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
                        <Card.Title>Lia Mattacchione</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Back and Front-end integrator</Card.Subtitle>
                        <Card.Link href="#"> <BsGithub /> </Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Lia Mattacchione</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Back and Front-end integrator</Card.Subtitle>
                        <Card.Link href="#"> <BsGithub /> </Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Lia Mattacchione</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Back and Front-end integrator</Card.Subtitle>
                        <Card.Link href="#"> <BsGithub /> </Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Lia Mattacchione</Card.Title>
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
