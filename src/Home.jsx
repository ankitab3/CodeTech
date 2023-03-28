import React from 'react';
import web from '../src/images/about.jpg';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Common from './Common';
function Home() {
  return (
    <div>
   
  
    <Common  name='Grow Your Business with' 
    imgsrc={web} 
    visit='/services'
     btname='Get Started'/>
    </div>
  );
}

export default Home;
