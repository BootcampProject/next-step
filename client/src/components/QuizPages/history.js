import React, { useState } from "react";
import { Row, Col, Card, Button, Collapse, ListGroup } from "react-bootstrap";
import Question from "../answers/answers";
import qhistory from "../../qhistory.json";
import image from "./images/History.jpg";

function HistoryQuestionList() {
  const [questionsList, setQuestionsList] = useState(qhistory);
  const [open, setOpen] = useState(false);

  return (
    <div className="my-2 px-2">
      <h2 className="center">History Quiz Questions:</h2>

      <div className="center flex-row ">
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
      </div>
    </div>
  );
}

export default HistoryQuestionList;
