import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './home.css';
import Header from '../Layout/Header/Header';
import { Container,Row,Col } from 'react-bootstrap';

function Home(){
  const [latitude, setLatitude] = useState('');
  const [longitude, setlongitude] = useState('');
  const [latitudeError, setLatitudeError] = useState('');
  const [longitudeError, setLongitudeError] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    // Allow only numbers and a single decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setLatitude(value);
    }
  };

  const handleLongitude = (e) => {
    const { value } = e.target;
    if (/^\d*\.?\d*$/.test(value)) {
      setlongitude(value);
    }
  };

  const handleSubmit = () => {
    if (latitude.trim() === '') {
      setLatitudeError('Latitude cannot be blank');
    }
    if (longitude.trim() === '') {
      setLongitudeError('Longitude cannot be blank');
    }
  };

  useEffect(() => {
    const errorTimeout = setTimeout(() => {
      setLatitudeError('');
      setLongitudeError('');
    }, 1000); // Set timeout to 2000 milliseconds (2 seconds)

    return () => clearTimeout(errorTimeout); // Cleanup function to clear timeout
  }, [latitudeError, longitudeError]);


  return (
    <>
    {/* <Header></Header> */}
    <Container>
      <Row>
        <Col>
          <div className="contenir">
            <div className="input-wrapper">
              <input
                type="text"
                className="search"
                id="search-inp"
                placeholder="Latitude"
                value={latitude}
                onChange={handleChange}
              />
              {latitudeError && <div className="error-message">{latitudeError}</div>}
            </div>  
            <span className="pipe">|</span> {/* Pipe character */}
            <div className="input-wrapper">
              <input
                type="text"
                className="search"
                id="search-inp"
                placeholder="Longitude"
                value={longitude}
                onChange={handleLongitude}
              />
              {longitudeError && <div className="error-message">{longitudeError}</div>}
            </div>  
            <button class="search-btn" onClick={handleSubmit}  id="search-inp-btn">&#x027A4;</button>
          </div>
        </Col>
      </Row>
    </Container>  
    </>
  );
}

export default Home;