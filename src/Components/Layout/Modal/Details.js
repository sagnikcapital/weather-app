import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Details({ open, onClose, data }) {
  return (
      <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Refer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {data && (
          <div>
            <p>Location: {data.name}</p>
            <p>Country: {data.sys.country}</p>
            <p>Temperature: {data.main.temp}F</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Wind Speed: {data.wind.speed}Km/Hr</p>
          </div>
        )}
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