import React from 'react';
import web from '../src/images/about.jpg';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
function Common(props) {
  return (
    <div>
     <section id="header" className='d-flex align-items-center'>
     <div className="container-fluid ">
        <div className="row">
        <div className="col-10 mx-auto">
          <div className='row'>
      <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
        <h1>
          {props.name}
           <strong className='brand-name'> CodeTech</strong>
        </h1>
        <h2 className='my-3'> We are the team of talented developer making websites</h2>
    <div className='mt-3'>
      <Nav.Link as={Link} to={props.visit} className=" btn-get-started">{props.btname}</Nav.Link>
    </div>
      </div>

    <div className='col-lg-6 order-1 order order-lg-2 header-img'>
      
      <img src={props.imgsrc} className='img-fluid animated' alt='Common image' />
    </div>
    </div>
        </div>
        </div>
        </div>

     </section>
    </div>
  );
}

export default Common;
