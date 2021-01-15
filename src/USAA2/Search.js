import React from 'react';
import {Link} from 'react-router-dom';

import { Nav,Form,FormControl,InputGroup, Jumbotron, Navbar, Figure, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';

function Search()
{
    return(
        <div>
           <Navbar className="bg-light justify-content-between">
  <Form inline>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  </Form>
  <Form inline>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
    <Button type="submit">Submit</Button>
  </Form>
</Navbar>
            </div>
    );
}
export default Search;