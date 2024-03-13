import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Details({ open, onClose }) {
  return (
      <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Refer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Weather Details!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default Details;