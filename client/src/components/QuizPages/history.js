import React, { useState } from "react";
import { Row, Col, Card, Button, Collapse, ListGroup } from "react-bootstrap";
import Question from "../answers/answers";
import qhistory from "../../qhistory.json";

function HistoryQuestionList() {
  const [questionsList, setQuestionsList] = useState(qhistory);
  const [open, setOpen] = useState(false);

  return (
    <div className="my-2">
      <h2>Quiz Questions:</h2>

      <div>
        {questionsList.map((qhistory) => (
          <Card style={{ width: "20rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Question
                  id={qhistory.id}
                  ask={qhistory.ask}
                  // category={qhistory.category}
                  // key={qhistory.category}
                  // answer={qhistory.answer}
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
                      <Question answer={qhistory.answer} />
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

export default HistoryQuestionList;