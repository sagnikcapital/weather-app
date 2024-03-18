import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

function Details({ open, onClose, data }) {
  return (
      <Modal show={open} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Refer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {!!data ? (
          <div>
            <p>Location: {data?.name}</p>
            <p>Country: {data?.sys?.country}</p>
            <p>Temperature: {data?.main?.temp}F</p>
            <p>Humidity: {data?.main?.humidity}%</p>
            <p>Wind Speed: {data?.wind?.speed}Km/Hr</p>
          </div>
        ) : (
          <p>No data available</p>
        )}
        </Modal.Body>
        <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={data.sys.country}
            viewBox={`0 0 256 256`}
          />
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default Details;