
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';


import {Button,Accordion,Card,Collapse,Badge,Breadcrumb,Carousel,Nav} from 'react-bootstrap';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

function Table(props) {
    const { name } = props
  return (
    <div className="Table">


        


<Breadcrumb>
  <Breadcrumb.Item href="C:\Users\mdivyalakshmi\my-app\src\USAA\React.html">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    About
  </Breadcrumb.Item>
  <Breadcrumb.Item >Contact</Breadcrumb.Item>
</Breadcrumb>

<Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JInG1uGlKMUIPew7kF0afhNPpi7sxZJQLw&usqp=CAU"
      alt="First slide"
      width={600} height={200}
    />
    <Carousel.Caption>
      <h3>React</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg"
      alt="Third slide"
      width={600} height={200}
    />

    <Carousel.Caption>
      <h3>React with Bootstrap</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i2.wp.com/www.csscodelab.com/wp-content/uploads/2019/11/stripe-hero-background-effect-html-css.png?fit=1062%2C631&ssl=1"
      alt="Third slide"
      width={600} height={200}
    />

    <Carousel.Caption>
      <h3>React with Material UI</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


<div class="seperate">
<h1>Welcome to {name}</h1>
<Button href="https://react-bootstrap.github.io/" variant="danger" size="lg" >
    React-Bootstrap
  </Button><br/><br/>
  </div>

<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        React
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>{name} is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        BootStrap
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>


<h1>Table using Material-UI</h1>










</div>
  );
}

export default Table;
