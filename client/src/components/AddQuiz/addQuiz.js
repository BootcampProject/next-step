
import { Form, Button, Card } from 'react-bootstrap';

import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { ADD_NEWQUESTION } from "../../utils/mutations";


function AddQuizQuestion(props) {
  const [formState, setFormState] = useState({ question: '', answer: '' });
  const [addquestion] = useMutation(ADD_NEWQUESTION);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addquestion({
      variables: {
        question: formState.question, answer: formState.answer,
      }
    });
    const token = mutationResponse.data.addquestion.token;
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Question:</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Answer:</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={handleChange} />
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
            </Card>
        </div>
    );
}

export default AddQuizQuestion;

