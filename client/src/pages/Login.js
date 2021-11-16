import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth";
import { Form,Button,Card } from 'react-bootstrap';


function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
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
            <Link to="/signup">
              ← Go to Signup
            </Link>
          </Button>

          <h2>Signup</h2>

        <Form onSubmit={handleFormSubmit}>

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

          {
            error ? <div>
              <p className="error-text" >The provided credentials are incorrect</p>
            </div> : null
          }

          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>

      {/* <div className="container my-1">
        <Link to="/signup">
          ← Go to Signup
        </Link>

        <h2>Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label htmlFor="email">Email address:</label>
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
          {
            error ? <div>
              <p className="error-text" >The provided credentials are incorrect</p>
            </div> : null
          }
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


export default Login;