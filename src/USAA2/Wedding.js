import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link,Route } from 'react-router-dom';
import { Nav,Col,Row,Image,Container, Jumbotron, Navbar, Figure, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';



class Wedding extends Component {
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
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOlEl4_oubebpfpY_q0e_jKzf-3WEir71cA&usqp=CAU"
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
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbcmx1IoRt3q3NeW3_d-Mz1DZLpAmrot6aA&usqp=CAU"
  />
  <Figure.Caption>
  Anna Centenary Library
  </Figure.Caption>
</Figure>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


<Figure>
  <Figure.Image
    width={300}
    height={300}
    alt="171x180"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQuL80Vxxu3aIlrc_wrUf8ybMEkiL4jv6mg&usqp=CAU"
  />
  <Figure.Caption>
  Connemara Public Library
  </Figure.Caption>
</Figure>
</div>
<p>A library is a curated collection of sources of information and similar resources, selected by experts and made accessible to a defined community for reference or borrowing, often in a quiet environment conducive to study. </p>
<Button onClick={this.goback}>Logout</Button>
                   
        </div>
    )
}
}

export default Wedding;

