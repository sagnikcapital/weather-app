import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './home.css';

function Home(){
  const [latitude, setLatitude] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    // Allow only numbers and a single decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setLatitude(value);
    }
  };
  return (
    <div class="contenir">
      <input
        type="text"
        className="search"
        id="search-inp"
        placeholder="Latitude"
        value={latitude}
        onChange={handleChange}
      />
      <button class="search-btn"  id="search-inp-btn">&#x027A4;</button>
    </div>
    
  );
}

export default Home;