import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home/index';
// import AboutUs from './Components/AboutUs/index'
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Home></Home>
    // <Router>
    //   <Routes> {/* Use Routes instead of div as the top-level component */}
    //     <Route path="/" element={<Home />} /> {/* Use 'element' prop instead of 'component' */}
    //     <Route path="/about" element={<AboutUs />} /> {/* Use 'element' prop instead of 'component' */}
    //   </Routes>
    // </Router>
  );
}

export default App;
