
import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home/index';
// import AboutUs from './Components/AboutUs/index'
import ContactUs from './Components/ContactUs/index'

import './App.css';
function App() {
  return (
    <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
    </Routes>
    
  );
}

export default App;
