import React, { useState } from "react";
import { Row, Col, Card, Button, Collapse, ListGroup } from "react-bootstrap";

import image from "./images/Science.png";
import Question from "../answers/answers";
import qscience from "../../qscience.json";
import Carousel from 'react-bootstrap/Carousel';

function ScienceQuestionList() {
  const [questionsList, setQuestionsList] = useState(qscience);
  const [open, setOpen] = useState(false);

  return (
    <div
      className="my-2 px-2 "
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2 className="center" style={{ color: "white" }}>
        Science Quiz Questions:
      </h2>

      {/* <div className="flex-row center">
        {questionsList.map((qscience) => (
          <Card style={{ width: "20rem" }} className="mar">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Question id={qscience.id} ask={qscience.ask} />
              </ListGroup.Item>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="my-1"
              >
                Answer
              </Button>
              <div style={{ minHeight: "0px" }}>
                <Collapse in={open} dimension="width">
                  <div id="example-collapse-text">
                    <Card body style={{ width: "20rem" }}>
                      <Question answer={qscience.answer} />
                    </Card>
                  </div>
                </Collapse>
              </div>
            </ListGroup>
          </Card>
        ))}
      </div> */}

<Carousel variant="dark" style={{ height: "35rem", Opacity: "140%" }} onSlide={() => setOpen(!open)}>
        {questionsList.map((qscience) => (
          <Carousel.Item interval={1000000} >
            <div style={{width:"400px", marginLeft:"40%"}}> 
            <Question id={qscience.id} ask={qscience.ask} />
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
                      <Question answer={qscience.answer} />
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

export default ScienceQuestionList;