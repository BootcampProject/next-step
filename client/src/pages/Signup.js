import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { Form,Button,Card } from 'react-bootstrap';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email, password: formState.password,
        firstName: formState.firstName, lastName: formState.lastName
      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
      <Card style={{margin: '40px', padding: '20px'}}>
      
          <Button variant="dark">
            <Link to="/login">
              ← Go to Login
            </Link>
          </Button>

          <h2>Signup</h2>

        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor="firstName">First Name:</Form.Label>
              <Form.Control placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor="lastName">Last Name:</Form.Label>
              <Form.Control placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor="email">Email Address:</Form.Label>
            <Form.Control placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="pwd">Password:</Form.Label>
            <Form.Control placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange} />
          </Form.Group>

          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>

        {/* <div className="container my-1">
      <Link to="/login">
        ← Go to Login
      </Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div> */}

      </Card>
    
  );

}

export default Signup;