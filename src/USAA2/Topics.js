import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Route } from 'react-router-dom';
import { Nav, Jumbotron, Navbar, Figure, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';
import TopicsItem from './TopicsItem';

//  const Topic=({match})=>(
//      <div>
//         <h3>{match.params.topicId}</h3>
//     </div>
//  );
const Topics = ({ match }) => {
    return (
        <div className="jumbo" >
            <h1>Various Books</h1>
            <ul>
                <Link className="badge badge-danger" to={`${match.url}/propsdrilling`} >Props Drilling</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="badge badge-danger" to={`${match.url}/spreadoperator`} >Spread Operator</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link className="badge badge-danger" to={`${match.url}/purecomponent`} >Pure Component</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Link className="badge badge-danger" to={`${match.url}/conditionalrendering`} >Conditional Rendering</Link>

            </ul>
            <Route path={`${match.url}/:topicId`} component={TopicsItem} />

        </div>
    )
}
export default Topics;
