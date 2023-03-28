import React from 'react';
import web from '../src/images/about.jpg';

import Common from './Common';
function About() {
  return (
    <div>
     <Common  name='Welcome to About page' 
     imgsrc={web} 
     visit='/contact'
      btname='Contact now'/>
    </div>
  );
}

export default About;
