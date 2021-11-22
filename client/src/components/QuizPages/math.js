import React, { useState } from "react";
import { Row, Col, Card, Button, Collapse, ListGroup } from "react-bootstrap";

import image from "./images/Math.png";
import Question from "../answers/answers";
import qmath from "../../qmath.json";
import Carousel from 'react-bootstrap/Carousel';

function MathQuestionList() {
  const [questionsList, setQuestionsList] = useState(qmath);
  const [open, setOpen] = useState(false);

  return (
    <div
      className="my-2 px-2"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2 className="center" style={{ color: "white" }}>
        Math Quiz Questions:
      </h2>

      {/* <div className="center flex-row  ">
        {questionsList.map((qmath) => (
          <Card style={{ width: "20rem" }} className="mar">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Question id={qmath.id} ask={qmath.ask} />
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
                      <Question answer={qmath.answer} />
                    </Card>
                  </div>
                </Collapse>
              </div>
            </ListGroup>
          </Card>
        ))}
      </div> */}

<Carousel variant="dark" style={{ height: "35rem", Opacity: "140%" }} onSlide={() => setOpen(!open)}>
        {questionsList.map((qmath) => (
          <Carousel.Item interval={1000000} >
            <div style={{width:"400px", marginLeft:"40%"}}> 
            <Question id={qmath.id} ask={qmath.ask} />
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
                      <Question answer={qmath.answer} />
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

export default MathQuestionList;