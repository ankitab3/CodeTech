import React from "react";
import './App.js';

import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div>
      <div className="container-fluid nav-bg">
        <div className="row">
        <div className="col-12 mx-auto">


        
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Nav.Link as={Link} className="navbar-brand" to="/">CodeTech</Nav.Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Nav.Link as={Link} className="nav-link active" aria-current="page" to="/">Home</Nav.Link>
         
        </li>
        <li className="nav-item">
        <Nav.Link as={Link} className="nav-link" to="/about">About</Nav.Link>
        
        </li>
        
        <li className="nav-item">
        <Nav.Link as={Link} className="nav-link" to="/services">Services</Nav.Link>
     
        </li>
        <li className="nav-item">
        <Nav.Link as={Link} className="nav-link" to="/contact">Contact</Nav.Link>
          
        </li>
       
      </ul>
     
    </div>
  </div>
</nav> 
</div>
        </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;