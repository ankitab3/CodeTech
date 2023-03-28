import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from './Navbar';
import './bootstrap.min.css';
import Footer from './Footer'

import {BrowserRouter,
  Routes,
  Route,
 
  Link

} from 'react-router-dom';
import Services from './Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
    
 
         
        <Routes>   
           <Route exact path="/" element={<Home />} />   
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
</Routes>
<Footer />
     
    </div>
  );
}

export default App;
