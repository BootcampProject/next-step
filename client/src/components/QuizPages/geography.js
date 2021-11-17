import React, { useState } from "react";
import Question from "../answers/answers";
import qgeography from "../../qgeography.json";
import { Row, Col, Card, Button, Collapse, ListGroup } from "react-bootstrap";
function GeographyQuestionList() {
  const [questionsList, setQuestionsList] = useState(qgeography);
  const [open, setOpen] = useState(false);

  return (
    <div className="my-2">
      <h2>Quiz Questions:</h2>
      <div></div>

      <div>
        {questionsList.map((qgeography) => (
          <Card style={{ width: "20rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Question
                  id={qgeography.id}
                  ask={qgeography.ask}
                  // category={qgeography.category}
                  // key={qgeography.category}
                  // answer={qgeography.answer}
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
                      <Question answer={qgeography.answer} />
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

export default GeographyQuestionList;
