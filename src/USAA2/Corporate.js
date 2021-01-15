import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link,Route } from 'react-router-dom';
import { Nav,Col,Row,Image,Container, Jumbotron, Navbar, Figure, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';



class Corporate extends Component {

    goback=()=>{
        this.props.history.push('/');
      }
render() {
   
    return (
        
    <div className="jumbo">

        <h1>LIBRARY</h1>

<div className="wed">
<Figure>
  <Figure.Image
    width={300}
    height={300}
    alt="171x180"
    src="https://upload.wikimedia.org/wikipedia/commons/2/21/Biblioth%C3%A8que_de_l%27Assembl%C3%A9e_Nationale_%28Lunon%29.jpg"
  />
  <Figure.Caption>
  National Library
  </Figure.Caption>
</Figure>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


<Figure>
  <Figure.Image
    width={300}
    height={300}
    alt="171x180"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9KcMGeBMT9j7wHsQfhewPISMFXtyz9HfLQ&usqp=CAU"
  />
  <Figure.Caption>
  Connemara Public Library
  </Figure.Caption>
</Figure>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


<Figure>
  <Figure.Image
    width={300}
    height={300}
    alt="171x180"
    src="https://upload.wikimedia.org/wikipedia/commons/2/21/Biblioth%C3%A8que_de_l%27Assembl%C3%A9e_Nationale_%28Lunon%29.jpg"
  />
  <Figure.Caption>
  Anna Centenary Library
  </Figure.Caption>
</Figure>
</div>
<p>A library is a curated collection of sources of information and similar resources, selected by experts and made accessible to a defined community for reference or borrowing, often in a quiet environment conducive to study.</p>
<Button onClick={this.goback}>Logout</Button>
        </div>
    )
}
}

export default Corporate;

