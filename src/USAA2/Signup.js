import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link,Route } from 'react-router-dom';
import { Nav,Col,Row,Image,Dropdown,DropdownButton,ButtonGroup,Container,InputGroup,FormControl, Jumbotron, Navbar, Figure, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';



class Signup extends Component {
    

render() {
   
    return (
        
    <div className="newthing">
<div className="jumbo">
<h1>Sign Up Form</h1>
</div>
<InputGroup className="mb-3">
  <InputGroup.Prepend>
    <InputGroup.Text>First and last name</InputGroup.Text>
  </InputGroup.Prepend>
  <FormControl />
  <FormControl />
</InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>

  <label htmlFor="basic-url">Your vanity URL</label>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon3">
        https://react.com/users/
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>Rating</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Append>
      <InputGroup.Text>/10</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>

  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Feedback</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

 
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with checkbox"  placeholder="Please check or uncheck the box"/>
  </InputGroup>
  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Radio aria-label="Radio button for following text input" />
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with radio button" placeholder="Please check the box"/>
  </InputGroup>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Enter mentor name"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-primary">Allot Mentor</Button>
    </InputGroup.Append>
  </InputGroup>


  <InputGroup className="mb-3">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Tamilnadu</Dropdown.Item>
      <Dropdown.Item href="#">Kerala</Dropdown.Item>
      <Dropdown.Item href="#">Andhra</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Others</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1"  placeholder="Please select and enter the state name"/>
  </InputGroup>

<div className="jumbo">
  <ButtonGroup className="mb-2">
    <Button>Signup</Button>
    <Button>Cancel</Button>
    <Button>Login</Button>
  </ButtonGroup>
  </div>

</div>
                   
        
    )
}
}

export default Signup;

