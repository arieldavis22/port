import "./ContactForm.css";
import React, { useRef, useState } from "react";

import { useSelector } from "react-redux";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import emailjs from "@emailjs/browser";

import Slide from "@mui/material/Slide";
import ContactFormModel from "./ContactFormModel";

const ContactForm = () => {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const slide = useSelector((state) => state.direction);
  const form = useRef();

  const sendEmailHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_y418teb",
        "template_8ai5ujy",
        form.current,
        "ubZdCNPycE6qeH15a"
      )
      .then(
        (result) => {
          setData(result);
          setModalShow(true);
          setIsLoading(false);
          form.current.reset();
        },
        (error) => {
          setData(error);
          setModalShow(true);
          setIsLoading(false);
        }
      );
  };
  return (
    <>
      <Slide direction={slide} in={true} mountOnEnter unmountOnExit>
        <div className="container">
          <div className="contact-form__form">
            <h2>Contact</h2>
            <Form ref={form} onSubmit={sendEmailHandler} id="contact-form">
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
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  id="message"
                />
              </Form.Group>
              <Button type="submit">
                {!isLoading && "Send Email"}
                {isLoading && (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
              </Button>
            </Form>
          </div>
        </div>
      </Slide>
      <ContactFormModel
        data={data}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ContactForm;
