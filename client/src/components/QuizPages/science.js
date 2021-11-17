import React, { useState } from "react";
import { Row, Col, Card, Button, Collapse, ListGroup } from "react-bootstrap";

import Question from "../answers/answers";
import qscience from "../../qscience.json";

function ScienceQuestionList() {
  const [questionsList, setQuestionsList] = useState(qscience);
  const [open, setOpen] = useState(false);

  return (
    <div className="my-2">
      <h2>Quiz Questions:</h2>

      <div>
        {questionsList.map((qscience) => (
          <Card style={{ width: "20rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Question
                  id={qscience.id}
                  ask={qscience.ask}
                  // category={qscience.category}
                  // key={qscience.category}
                  // answer={qscience.answer}
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
                      <Question answer={qscience.answer} />
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

export default ScienceQuestionList;
