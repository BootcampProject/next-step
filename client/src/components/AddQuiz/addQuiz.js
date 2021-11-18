
import { Form, Button, Card } from 'react-bootstrap';

import React, { useState, useEffect } from "react";
import { useMutation } from '@apollo/react-hooks';
import { ADD_NEWQUESTION } from "../../utils/mutations";
import Auth from "../../utils/auth";

function AddQuizQuestion(props) {
  const [formState, setFormState] = useState({ question: '', answer: '' });
  const [addquestion] = useMutation(ADD_NEWQUESTION);

  const handleFormSubmit = async event => {
    event.preventDefault();
    window.alert("Thank you. Your new question will be taken under advisement and review.");
    console.log(formState.question)
    
    try {
        const mutationResponse = await addquestion({
            variables: {
              question: formState.question, answer: formState.answer, category: formState.category,
            }
          });
          console.log(mutationResponse)
          const token = mutationResponse.data.newquestion.token;
          Auth.login(token);
    } catch (err){console.log(err)}
  };

  const handleChange = event => {
    const { dataname, value, id } = event.target;
    console.log(id)
    setFormState({
      ...formState,
      [id]: value
    });
  };

  useEffect (() => {
    console.log(formState)
}, [formState])

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="question">
                        <Form.Label>Question:</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="answer">
                        <Form.Label>Answer:</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={handleChange} />
                    </Form.Group>
                    <Form.Select aria-label="Select a Category" onChange={handleChange} id="category">
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

