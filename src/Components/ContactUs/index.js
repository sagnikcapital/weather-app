import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Layout/Header/Header';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ContactUs() {
  return (
    <>
      <Header></Header>
      <section className="section">
      <Container>
        <h1 className="title">Please contact Us</h1>
        <Row>
          <Col lg={6}>
            <Form action="#" method="post">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" placeholder="Your Message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}

export default ContactUs;