import React, { useState } from "react";
import { Row, Col, Card, Button, Collapse, ListGroup } from "react-bootstrap";
import Question from "../answers/answers";
import qhistory from "../../qhistory.json";
import image from "./images/History.png";
import Carousel from 'react-bootstrap/Carousel';

function HistoryQuestionList() {
  const [questionsList, setQuestionsList] = useState(qhistory);
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
      <h2 className="center">History Quiz Questions:</h2>

      {/* <div className="center flex-row ">
        {questionsList.map((qhistory) => (
          <Card style={{ width: "20rem" }} className="mar">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Question id={qhistory.id} ask={qhistory.ask} />
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
                      <Question answer={qhistory.answer} />
                    </Card>
                  </div>
                </Collapse>
              </div>
            </ListGroup>
          </Card>
        ))}
      </div> */}

<Carousel variant="dark" style={{ height: "35rem", Opacity: "140%" }} onSlide={() => setOpen(!open)}>
        {questionsList.map((qhistory) => (
          <Carousel.Item interval={1000000} >
            <div style={{width:"400px", marginLeft:"40%"}}> 
            <Question id={qhistory.id} ask={qhistory.ask} />
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
                      <Question answer={qhistory.answer} />
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

export default HistoryQuestionList;