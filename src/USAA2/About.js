import React from 'react';
import { Nav, Navbar, Figure, Form, Table, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';

function About() {


  return (
    <div className="home">

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Age</th>
            <th>Address</th>
            <th>Qualification</th>
            <th>College Name</th>
            <th>Highest Degree</th>
            <th>Date of Birth</th>
            <th>Marks</th>
            <th>Feedback</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Divya</td>
            <td>Lakshmi</td>
            <td>divya@gmail.com</td>
            <td><Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Age</Form.Label>
              <Form.Control type="email" placeholder="Age" />
            </Form.Group></td>
            <td>Chennai</td>
            <td>B.E</td>
            <td> <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>College Name</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group></td>
            <td>B.E</td>
            <td>28/11/98</td>
            <td>98</td>
            <td><Button variant="warning">Good</Button>{' '}</td>
            <td>
              <Form.Group controlId="formBasicRange">
                <Form.Label>Range</Form.Label>
                <Form.Control type="range" />
              </Form.Group></td>
          </tr>
          <tr>
            <td>Viji</td>
            <td>Murali</td>
            <td>vijim@gmail.com</td>
            <td><Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Age</Form.Label>
              <Form.Control type="email" placeholder="Age" />
            </Form.Group></td>
            <td>Chennai</td>
            <td>B.E</td>
            <td> <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>College Name</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group></td>
            <td>B.E</td>
            <td>28/11/98</td>
            <td>98</td>
            <td><Button variant="danger">Good</Button>{' '}</td>
            <td><Form.Group controlId="formBasicRange">
              <Form.Label>Range</Form.Label>
              <Form.Control type="range" />
            </Form.Group></td>
          </tr>
          <tr>
            <td>Uma</td>
            <td>Sreejith</td>
            <td>umapr@gmail.com</td>
            <td><Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Age</Form.Label>
              <Form.Control type="email" placeholder="Age" />
            </Form.Group></td>
            <td>Chennai</td>
            <td>B.E</td>
            <td> <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>College Name</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group></td>
            <td>B.E</td>
            <td>28/11/98</td>
            <td>98</td>
            <td><Button variant="primary">Good</Button>{' '}</td>
            <td><Form.Group controlId="formBasicRange">
              <Form.Label>Range</Form.Label>
              <Form.Control type="range" />
            </Form.Group></td>
          </tr>

          <tr>
            <td>Varun</td>
            <td>Rajesh</td>
            <td>Rajesh@gmail.com</td>
            <td><Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Age</Form.Label>
              <Form.Control type="email" placeholder="Age" />
            </Form.Group></td>
            <td>Chennai</td>
            <td>B.E</td>
            <td> <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>College Name</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group></td>
            <td>B.E</td>
            <td>28/11/98</td>
            <td>98</td>
            <td><Button variant="success">Good</Button>{' '}</td>
            <td><Form.Group controlId="formBasicRange">
              <Form.Label>Range</Form.Label>
              <Form.Control type="range" />
            </Form.Group></td>
          </tr>
          <tr>
            <td>Rithwik</td>
            <td>Sreejith</td>
            <td>rithu@gmail.com</td>
            <td><Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Age</Form.Label>
              <Form.Control type="email" placeholder="Age" />
            </Form.Group></td>
            <td>Chennai</td>
            <td>B.E</td>
            <td> <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>College Name</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group></td>
            <td>B.E</td>
            <td>28/11/98</td>
            <td>98</td>
            <td><Button variant="info">Good</Button>{' '}</td>
            <td><Form.Group controlId="formBasicRange">
              <Form.Label>Range</Form.Label>
              <Form.Control type="range" />
            </Form.Group></td>
          </tr>
        </tbody>
      </Table>
      <div className="newcard">
        {/* <div className="card"> */}

        {/* 
                <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="https://www.villadicapo.com/wp-content/uploads/2017/08/event-management2.jpg"
  />
  <Figure.Caption>
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  </Figure.Caption>
</Figure> */}


      </div>

      {/* </div> */}







     

      



    </div>
  );
}
export default About;









// import React,{Component} from 'react';
// import Sonnet from 'react';
// import { Nav,Tab,Col,ListGroup,Row, Navbar, Figure, Form, Table, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';

// // function About() {
//   class About extends Component{

// render(){
//   return (

//     <div className="imag">
//     <div className="jumbo">
//       <h1>LISTS OF BOOKS</h1>
//     <div className="home">
      
    
     

// <ListGroup>
//   <ListGroup.Item variant="danger">Machine Learning</ListGroup.Item>
//   <ListGroup.Item variant="primary">Big Data</ListGroup.Item>
//   <ListGroup.Item variant="secondary">Story Books</ListGroup.Item>
//   <ListGroup.Item variant="success">Cloud Computing</ListGroup.Item>
//   <ListGroup.Item variant="danger">College Books</ListGroup.Item>
//   <ListGroup.Item variant="warning">School Books</ListGroup.Item>
//   <ListGroup.Item variant="info">TNPSC</ListGroup.Item>
//   <ListGroup.Item variant="primary">Aptitude</ListGroup.Item>
//   <ListGroup.Item variant="dark">Gate</ListGroup.Item>
// </ListGroup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


// <ListGroup>
//   <ListGroup.Item variant="danger">Machine Learning</ListGroup.Item>
//   <ListGroup.Item variant="primary">Big Data</ListGroup.Item>
//   <ListGroup.Item variant="secondary">Story Books</ListGroup.Item>
//   <ListGroup.Item variant="success">Cloud Computing</ListGroup.Item>
//   <ListGroup.Item variant="danger">College Books</ListGroup.Item>
//   <ListGroup.Item variant="warning">School Books</ListGroup.Item>
//   <ListGroup.Item variant="info">TNPSC</ListGroup.Item>
//   <ListGroup.Item variant="primary">Aptitude</ListGroup.Item>
//   <ListGroup.Item variant="dark">Gate</ListGroup.Item>
// </ListGroup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

// <ListGroup>
//   <ListGroup.Item variant="danger">Machine Learning</ListGroup.Item>
//   <ListGroup.Item variant="primary">Big Data</ListGroup.Item>
//   <ListGroup.Item variant="secondary">Story Books</ListGroup.Item>
//   <ListGroup.Item variant="success">Cloud Computing</ListGroup.Item>
//   <ListGroup.Item variant="danger">College Books</ListGroup.Item>
//   <ListGroup.Item variant="warning">School Books</ListGroup.Item>
//   <ListGroup.Item variant="info">TNPSC</ListGroup.Item>
//   <ListGroup.Item variant="primary">Aptitude</ListGroup.Item>
//   <ListGroup.Item variant="dark">Gate</ListGroup.Item>
// </ListGroup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


// <ListGroup>
//   <ListGroup.Item variant="danger">Machine Learning</ListGroup.Item>
//   <ListGroup.Item variant="primary">Big Data</ListGroup.Item>
//   <ListGroup.Item variant="secondary">Story Books</ListGroup.Item>
//   <ListGroup.Item variant="success">Cloud Computing</ListGroup.Item>
//   <ListGroup.Item variant="danger">College Books</ListGroup.Item>
//   <ListGroup.Item variant="warning">School Books</ListGroup.Item>
//   <ListGroup.Item variant="info">TNPSC</ListGroup.Item>
//   <ListGroup.Item variant="primary">Aptitude</ListGroup.Item>
//   <ListGroup.Item variant="dark">Gate</ListGroup.Item>
// </ListGroup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


// <ListGroup>
//   <ListGroup.Item variant="danger">Machine Learning</ListGroup.Item>
//   <ListGroup.Item variant="primary">Big Data</ListGroup.Item>
//   <ListGroup.Item variant="secondary">Story Books</ListGroup.Item>
//   <ListGroup.Item variant="success">Cloud Computing</ListGroup.Item>
//   <ListGroup.Item variant="danger">College Books</ListGroup.Item>
//   <ListGroup.Item variant="warning">School Books</ListGroup.Item>
//   <ListGroup.Item variant="info">TNPSC</ListGroup.Item>
//   <ListGroup.Item variant="primary">Aptitude</ListGroup.Item>
//   <ListGroup.Item variant="dark">Gate</ListGroup.Item>
// </ListGroup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;











//     </div>
//     </div>
//     </div>
    
//   );
// }

// }
// export default About;