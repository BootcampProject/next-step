import React, { useState } from "react";
import { Row, Col, Card, Button, Collapse, ListGroup } from "react-bootstrap";

import image from "./images/Math2.jpg";
import Question from "../answers/answers";
import qmath from "../../qmath.json";

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

      <div className="center flex-row  ">
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
      </div>
    </div>
  );
}

export default MathQuestionList;
