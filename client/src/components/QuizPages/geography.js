import React, { useState } from "react";
import Question from "../answers/answers";
import qgeography from "../../qgeography.json";
import image from "./images/Geography.png";
import Carousel from 'react-bootstrap/Carousel';

import { Row, Col, Card, Button, Collapse, ListGroup } from "react-bootstrap";
function GeographyQuestionList() {
  const [questionsList, setQuestionsList] = useState(qgeography);
  const [open, setOpen] = useState(false);

  return (
    <div
      className="my-2 px-2  "
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2 className="center" style={{padding: "50px"}}>Geography Quiz Questions:</h2>

      {/* <div className="center flex-row  ">
        {questionsList.map((qgeography) => (
          <Card style={{ width: "20rem", Opacity: "140%" }} className="mar">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Question id={qgeography.id} ask={qgeography.ask} />
              </ListGroup.Item>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="my-1"
                style={{ Opacity: "unset" }}
              >
                Answer
              </Button>
              <div style={{ minHeight: "0px" }}>
                <Collapse in={open} dimension="width">
                  <div id="example-collapse-text">
                    <Card body style={{ width: "20rem" }}>
                      <Question answer={qgeography.answer} />
                    </Card>
                  </div>
                </Collapse>
              </div>
            </ListGroup>
          </Card>
        ))}
      </div> */}

      <Carousel variant="dark" style={{ height: "35rem", Opacity: "140%" }} onSlide={() => setOpen(!open)}>
        {questionsList.map((qgeography) => (
          <Carousel.Item interval={1000000} >
            <div style={{width:"400px", marginLeft:"40%"}}> 
            <Question id={qgeography.id} ask={qgeography.ask} />
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="my-1"
                style={{ Opacity: "unset" }}
              >
                Answer
              </Button>
              <div style={{ minHeight: "0px" }}>
                <Collapse in={open} dimension="width">
                  <div id="example-collapse-text">
                    <Card body style={{ width: "20rem" }}>
                      <Question answer={qgeography.answer} />
                    </Card>
                  </div>
                </Collapse>
              </div>
              </div>
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
        ))}

      </Carousel>

    </div>
  );
}

export default GeographyQuestionList;