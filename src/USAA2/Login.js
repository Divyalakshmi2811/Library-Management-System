import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Col, Row } from 'react-bootstrap';



function Login() {
  return (
    <div>
      <form>

        <Form.Group controlId="formGroupEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Enter Username" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Link to='/submit' className="badge badge-danger">Submit
                {/* <li>Shop</li> */}
        </Link>
      </form>

    </div>
  );
}
export default Login;