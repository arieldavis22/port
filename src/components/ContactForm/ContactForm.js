import "./ContactForm.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmailHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y418teb",
        "template_8ai5ujy",
        form.current,
        "ubZdCNPycE6qeH15a"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container">
      <div className="contact-form__form">
      <h2>Contact</h2>
        <Form ref={form} onSubmit={sendEmailHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" name="from_name" id="from_name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="reply_to"
              id="reply_to"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} name="message" id="message" />
          </Form.Group>
          <Button type="submit">Send Email</Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
