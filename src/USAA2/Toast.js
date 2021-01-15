import React,{useState,render} from 'react';
import {  Nav,Col,Row, Navbar, Figure, Tab,Tabs,Form, Table, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';
import { Router } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';



function Toast() {
   
  
    return (

      <div className="coll">
      <h1>Various Events</h1>




      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Wedding Events
             </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>This is wedding invitation </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Corporate Events
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>This is corporate invitation</Card.Body>
          </Accordion.Collapse>
        </Card>


        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Social Events
</Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>This is social invitation</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>


     
     

    </div>
      
    );
  }
  


  export default Toast;