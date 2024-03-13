import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Details() {
  const [showModal, setShowModal] = useState(false);

  return (
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Refer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Weather Details!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default Details;