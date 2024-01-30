import React, { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";

const ContactForm: FC = () => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("contact: ", contact);
  };

  return (
    <Form onSubmit={handleOnSubmit} className="contact-form">
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          className="firstName"
          name="firstName"
          value={contact.firstName}
          type="text"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          className="lastName"
          name="lastName"
          value={contact.lastName}
          type="text"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          className="phone"
          name="phone"
          value={contact.phone}
          type="number"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="submit">
        <Button variant="primary" type="submit" className="submit-btn">
          Add Contact
        </Button>
      </Form.Group>
    </Form>
  );
};

export default ContactForm;
