import React from "react";
import { Form, Button } from 'react-bootstrap';


function AddQuizQuestion() {

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Question:</Form.Label>
                    <Form.Control type="text" placeholder="What is the Question" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Answer:</Form.Label>
                    <Form.Control type="text" placeholder="What is the Answer" />
                </Form.Group>
                <Form.Select aria-label="Select a Category">
                    <option>Open this select menu</option>
                    <option value="1">Grade 8 Geography</option>
                    <option value="2">Grade 8 Math</option>
                    <option value="3">Grade 8 Science</option>
                    <option value="4">Grade 8 History</option>
                </Form.Select>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddQuizQuestion;