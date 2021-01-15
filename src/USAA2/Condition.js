import React, { useState } from "react";
import { Nav, Tab, Col, ListGroup, Row, Navbar, Figure, Form, Table, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';
export default function Condition() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="withouturl">

            {loggedIn ? (
                <div>
                    <div className="imag">
                        <div className="jumbo">
                            <h1>LISTS OF BOOKS</h1>
                            <div className="home">




                                <ListGroup>
                                    <ListGroup.Item variant="danger">Machine Learning</ListGroup.Item>
                                    <ListGroup.Item variant="primary">Big Data</ListGroup.Item>
                                    <ListGroup.Item variant="secondary">Story Books</ListGroup.Item>
                                    <ListGroup.Item variant="success">Cloud Computing</ListGroup.Item>
                                    <ListGroup.Item variant="danger">College Books</ListGroup.Item>
                                    <ListGroup.Item variant="warning">School Books</ListGroup.Item>
                                    <ListGroup.Item variant="info">TNPSC</ListGroup.Item>
                                    <ListGroup.Item variant="primary">Aptitude</ListGroup.Item>
                                    <ListGroup.Item variant="dark">Gate</ListGroup.Item>
                                </ListGroup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


<ListGroup>
                                    <ListGroup.Item variant="danger">Machine Learning</ListGroup.Item>
                                    <ListGroup.Item variant="primary">Big Data</ListGroup.Item>
                                    <ListGroup.Item variant="secondary">Story Books</ListGroup.Item>
                                    <ListGroup.Item variant="success">Cloud Computing</ListGroup.Item>
                                    <ListGroup.Item variant="danger">College Books</ListGroup.Item>
                                    <ListGroup.Item variant="warning">School Books</ListGroup.Item>
                                    <ListGroup.Item variant="info">TNPSC</ListGroup.Item>
                                    <ListGroup.Item variant="primary">Aptitude</ListGroup.Item>
                                    <ListGroup.Item variant="dark">Gate</ListGroup.Item>
                                </ListGroup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<ListGroup>
                                    <ListGroup.Item variant="danger">Machine Learning</ListGroup.Item>
                                    <ListGroup.Item variant="primary">Big Data</ListGroup.Item>
                                    <ListGroup.Item variant="secondary">Story Books</ListGroup.Item>
                                    <ListGroup.Item variant="success">Cloud Computing</ListGroup.Item>
                                    <ListGroup.Item variant="danger">College Books</ListGroup.Item>
                                    <ListGroup.Item variant="warning">School Books</ListGroup.Item>
                                    <ListGroup.Item variant="info">TNPSC</ListGroup.Item>
                                    <ListGroup.Item variant="primary">Aptitude</ListGroup.Item>
                                    <ListGroup.Item variant="dark">Gate</ListGroup.Item>
                                </ListGroup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


<ListGroup>
                                    <ListGroup.Item variant="danger">Machine Learning</ListGroup.Item>
                                    <ListGroup.Item variant="primary">Big Data</ListGroup.Item>
                                    <ListGroup.Item variant="secondary">Story Books</ListGroup.Item>
                                    <ListGroup.Item variant="success">Cloud Computing</ListGroup.Item>
                                    <ListGroup.Item variant="danger">College Books</ListGroup.Item>
                                    <ListGroup.Item variant="warning">School Books</ListGroup.Item>
                                    <ListGroup.Item variant="info">TNPSC</ListGroup.Item>
                                    <ListGroup.Item variant="primary">Aptitude</ListGroup.Item>
                                    <ListGroup.Item variant="dark">Gate</ListGroup.Item>
                                </ListGroup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


<ListGroup>
                                    <ListGroup.Item variant="danger">Machine Learning</ListGroup.Item>
                                    <ListGroup.Item variant="primary">Big Data</ListGroup.Item>
                                    <ListGroup.Item variant="secondary">Story Books</ListGroup.Item>
                                    <ListGroup.Item variant="success">Cloud Computing</ListGroup.Item>
                                    <ListGroup.Item variant="danger">College Books</ListGroup.Item>
                                    <ListGroup.Item variant="warning">School Books</ListGroup.Item>
                                    <ListGroup.Item variant="info">TNPSC</ListGroup.Item>
                                    <ListGroup.Item variant="primary">Aptitude</ListGroup.Item>
                                    <ListGroup.Item variant="dark">Gate</ListGroup.Item>
                                </ListGroup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />











                            </div>
                        </div>
                    </div>





                </div>

            ) : (
                    <div>
                        <h2> Various Books List</h2>
                    </div>
                )}

            <button onClick={() => setLoggedIn(!loggedIn)} class="btn btn-primary">
                {loggedIn ? "Log out" : "Books List"}
            </button>


            
        </div>
    );
}
