import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("Your contact form has been submitted to our customer service team. They will contact you shortly via email. Thank you 😃");
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div class="formStyling">
      <Form id="contact-form" onSubmit={handleSubmit}>
        <h3 data-testid="h1tag">Contact Us</h3>
        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Name</Form.Label> */}
          <Form.Control type="text" name="name" defaultValue={name} onBlur={handleChange} placeholder="Full Name *" />
        </Form.Group>
        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="email" name="email" defaultValue={email} onBlur={handleChange} placeholder="Email Address *" />
        </Form.Group>
        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label>Message</Form.Label> */}
          <Form.Control as="textarea" rows={1} name="message" defaultValue={message} onBlur={handleChange} placeholder="Message *" />
        </Form.Group>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
