import React, { useState } from "react";
import { Row, Col, Card, Button, Collapse, ListGroup } from "react-bootstrap";
import Question from "../answers/answers";
import qmath from "../../qmath.json";

function MathQuestionList() {
  const [questionsList, setQuestionsList] = useState(qmath);
  const [open, setOpen] = useState(false);
  return (
    <div className="my-2">
      <h2>Quiz Questions:</h2>

      <div>
        {questionsList.map((qmath) => (
          <Card style={{ width: "20rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Question
                  id={qmath.id}
                  ask={qmath.ask}
                  // category={qgeography.category}
                  // key={qgeography.category}
                  // answer={qmath.answer}
                />
              </ListGroup.Item>
              <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                Answer
              </Button>
              <div style={{ minHeight: "150px" }}>
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
