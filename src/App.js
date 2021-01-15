// import React, {Component} from 'react';

// export class Counter extends Component{

//   // constructor()
//   // {
//   //   this.state={
//   //     counter:0
//   //   }
//   // }

//   // onClick()
//   // {
//   //   alert("Button is clicked")
//   // }
//   render()
//   {
//     return(
//       <div>

//           counter value = {this.state.counter}
//           <button class="btn btn-primary" onClick="onClick()">Click</button>

//       </div>
//       )
//   }
// }
// export default Counter


// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import Click from './ClickExamples/Click'

// // import Event from './ClassComponent/Event'
// // import Manage from './ClassComponent/Manage'
// function App() {

//   return (
//     <div className="App">
//       <h1></h1>
//       <Click name={'HCL'} location={'Chennai'} />




//     </div>
//   );
// }



// export default App;







//Examples
// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
//  import Click from './ClickExamples/Click'
// import Array from './ClickExamples/Array'
// import Spread from './ClickExamples/Spread'
// import Counter from './ClickExamples/Counter'
// import ClassCom from './NewClass/ClassCom'
// import ComponentProps from './NewClass/ComponentProps'


// import Event from './ClassComponent/Event'
// import Manage from './ClassComponent/Manage'
// function App() {

//   return (
//     <div className="App">
//       <h1></h1>
//       {/* <Event name={'HCL'} location={'Chennai'} /> */}
//       <Array  name={'Event Management'} location={'Chennai'}/>
//       <Spread />
//       <Click />
//       <Counter />


//       <ClassCom name="Batch"  day={24} 
//       fruits={() => ["Apple" ,"Mango", "Banana", "Grapes"]} 
//       numbers={()=>[1,2,3,4,5]}
//       html={() => <h2>Passing html elements from parent to child</h2>}

//       functionProps={()=><ComponentProps/>}
//       />








//     </div>
//   );
// }



// export default App;


// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
//  import Click from './ClickExamples/Click'
// import Array from './ClickExamples/Array'
// import Spread from './ClickExamples/Spread'
// import Counter from './ClickExamples/Counter'
// import ClassCom from './NewClass/ClassCom'
// import ComponentProps from './NewClass/ComponentProps'
// import createData from './USAA/Table'

// function App() {

//      return (
//        <div className="App">
// <createData />

// </div>
//      );
// }



// export default App;




//USAA
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import React from 'react';
// import Table from './USAA/Table'
// import DenseTable from './USAA/createData'
// import Array from './ClickExamples/Array'
// import Spread from './ClickExamples/Spread'
// import Click from './ClickExamples/Click'
// import SimpleBottomNavigation from './USAA/SimpleBottomNavigation'




// function App() {

//   return (
//     <div className="App">

// <Table name="React" 
// html1={() => <h2>Passing html elements from parent to child</h2>}
// />
// <DenseTable />
// <createData />
// <Array />
// <Spread />
// <Click />
// <SimpleBottomNavigation />
// </div>
//   );
// }

// export default App;


//USAA



// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(name, calories, fat, carbs, protein,rate,quantity,quality,vitamin,availability) {
//   return { name, calories, fat, carbs, protein,rate,quantity,quality,vitamin,availability};
// }

// const rows = [
//   createData('Yoghurt', 159, 6.0, 24, 4.0,20,2,'Good',20,'Yes'),
//   createData('Icecream', 237, 9.0, 37, 4.3,34,5,'Good',34,'Yes'),
//   createData('Eclair', 262, 16.0, 24, 6.0,56,10,'Average',34,67,'No'),
//   createData('Cupcake', 305, 3.7, 67, 4.3,65,24,'Good',23,56,'Yes'),
//   createData('Gingerbread', 356, 16.0, 49, 3.9,123,24,'Good',23,56,'Yes'),
//   createData('Garlicbread', 467, 20.0, 78, 3.9,678,29,'Bad',29,556,'No'),
//   createData('BlackForest', 560, 29.0, 45, 5.4,23,29,'Bad',29,556,'No'),
//   createData('Pizza', 345, 56.0, 89, 9.9,79,35,'Good',29,556,'Yes'),
//   createData('Burger', 245, 49.0, 78, 3.9,678,29,'Bad',29,556,'No'),
//   createData('French Fries', 341, 98.0, 78, 3.9,567,88,'Bad',29,556,'No'),
// ];

// export default function DenseTable() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow >
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//             <TableCell align="right">Rate&nbsp;(g)</TableCell>
//             <TableCell align="right">Quantity&nbsp;(g)</TableCell>
//             <TableCell align="right">Quality&nbsp;(g)</TableCell>
//             <TableCell align="right">Vitamin&nbsp;(g)</TableCell>
//             <TableCell align="right">Availability&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//               <TableCell align="right">{row.rate}</TableCell>
//               <TableCell align="right">{row.quantity}</TableCell>
//               <TableCell align="right">{row.quality}</TableCell>
//               <TableCell align="right">{row.vitamin}</TableCell>
//               <TableCell align="right">{row.availability}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }





// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';

// import ParentComp from './PureMemo/ParentComp'



// function App() {

//   return (
//     <div className="App">
//       <ParentComp />
//     </div> 
//   );
// }

// export default App;



// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import React, { Component } from 'react';
// import PureComponent1 from './PureMemo/PureComponent1'
// import MemoComponent from './PureMemo/MemoComponent'
// import NormalClassComp from './PureMemo/NormalClassComp';
// import NormalFunctionalComp from './PureMemo/NormalFunctionalComp';
// import ControlledInputs from './PureMemo/ControlledInputs';


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'Example',
//       isMinor: true

//     }
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ name: 'Example' })
//     }, 5000);
//   }
//   render() {
//     return (
//       <div className="App">

// <ControlledInputs/>
//         {this.state.name === "Example" ? <NormalClassComp name={this.state.name} />
//           : ''}

//         {this.state.name === "Example" && <NormalClassComp name={this.state.name} />
//         }

//         <div className={this.state.name ? 'minor' :'major'} >
//           {this.state.isMinor ? <span>
//             You have passed the Examination
//       </span>
//             : <span> You hava failed the Examination
//       </span>
//           }
//           </div>


//         <PureComponent1 name={this.state.name} />
//         <MemoComponent name={this.state.name} />
//         <NormalClassComp name={this.state.name} />

//         {this.state.isMinor && <b>This is minor candidate</b>}



//         <NormalFunctionalComp name={this.state.name} />
//       </div>
//     );
//   }
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// // Put any other imports below so that CSS from your
// // components takes precedence over default styles.

// function App() {
//   return (
//     <div class="wrapper">
//     <div class="sidebar">
//         <h2>Sidebar</h2>
//         <ul>
//             <li><a href="#"><i class="fas fa-home"></i>Home</a></li>
//             <li><a href="#"><i class="fas fa-user"></i>Profile</a></li>
//             <li><a href="#"><i class="fas fa-address-card"></i>About</a></li>
//             <li><a href="#"><i class="fas fa-project-diagram"></i>portfolio</a></li>
//             <li><a href="#"><i class="fas fa-blog"></i>Blogs</a></li>
//             <li><a href="#"><i class="fas fa-address-book"></i>Contact</a></li>
//             <li><a href="#"><i class="fas fa-map-pin"></i>Map</a></li>
//         </ul> 
//         <div class="social_media">
//           <a href="#"><i class="fab fa-facebook-f"></i></a>
//           <a href="#"><i class="fab fa-twitter"></i></a>
//           <a href="#"><i class="fab fa-instagram"></i></a>
//       </div>
//     </div>
//     <div class="main_content">
//         <div class="header">Welcome!! Have a nice day.</div>  
//         <div class="info">
//           <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed nobis ut exercitationem atque accusamus sit natus officiis totam blanditiis at eum nemo, nulla et quae eius culpa eveniet voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio perferendis itaque alias sint, beatae non maiores magnam ad, veniam tenetur atque ea exercitationem earum eveniet totam ipsam magni tempora aliquid ullam possimus? Tempora nobis facere porro, praesentium magnam provident accusamus temporibus! Repellendus harum veritatis itaque molestias repudiandae ea corporis maiores non obcaecati libero, unde ipsum consequuntur aut consectetur culpa magni omnis vero odio suscipit vitae dolor quod dignissimos perferendis eos? Consequuntur!</div>


//       </div>
//     </div>
// </div>

//   );
// }

// export default App;


// import logo from './logo.svg';
// import React,{useState} from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Nav,Navbar,NavDropdown,Button,Collapse,Accordion,Card} from 'react-bootstrap';
// import { withRouter } from "react-router";
// import { Link } from 'react-router-dom';



// // Put any other imports below so that CSS from your
// // components takes precedence over default styles.

// function App() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="App">
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//        <Navbar.Brand href="#home">Event Management</Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//       <Navbar.Collapse id="responsive-navbar-nav">
//        <Nav className="mr-auto">
//       <Nav.Link href="#features">Logo</Nav.Link>
//       <Nav.Link href="#pricing">Status</Nav.Link>
//       <NavDropdown title="Events" id="collasible-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Wedding</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Corporate</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Social</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//       </Nav>
//       <Nav>
//       <Nav.Link href="#deets">Sign up</Nav.Link>
//       <Nav.Link eventKey={2} href="#memes">
//         Login
//       </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
//    </Navbar>

//       <h1>EVENT MANAGEMENT</h1>
// <div className="hello">
// <Nav defaultActiveKey="/home"  width="30%"  className="flex-column">
//   <Nav.Link href="/home" >Home</Nav.Link>

//   <Nav.Link eventKey="link-1" >About</Nav.Link>
//   <Nav.Link eventKey="link-1">Profile</Nav.Link>
//   <Nav.Link eventKey="link-1">Logo</Nav.Link>
//   <Nav.Link eventKey="link-2">Contact</Nav.Link>
//   <Nav.Link eventKey="disabled" disabled>
//     Disabled
//   </Nav.Link>
// </Nav>
// </div> 








// <div className="coll">

// <Accordion defaultActiveKey="0">
//   <Card>
//     <Card.Header>
//       <Accordion.Toggle as={Button} variant="link" eventKey="0">
//         Wedding Events
//       </Accordion.Toggle>
//     </Card.Header>
//     <Accordion.Collapse eventKey="0">
//       <Card.Body>This is wedding invitation </Card.Body>
//     </Accordion.Collapse>
//   </Card>
//   <Card>
//     <Card.Header>
//       <Accordion.Toggle as={Button} variant="link" eventKey="1">
//         Corporate Events
//       </Accordion.Toggle>
//     </Card.Header>
//     <Accordion.Collapse eventKey="1">
//       <Card.Body>This is corporate invitation</Card.Body>
//     </Accordion.Collapse>
//   </Card>
// </Accordion>
// </div>




// <div className="foot">
//     <footer>
//     <p>Author: Divyalakshmi<br></br>
//     <a href="mailto:divya@example.com">divya@example.com</a></p>
// </footer>
//     </div>








//     </div>





//   );
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Nav, Navbar, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';
// import { withRouter } from "react-router";
// import { Link } from 'react-router-dom';
// import createData from './USAA/Table';
// import Navi from './USAA2/Navi';
// import About from './USAA2/About';
// import Shop from './USAA2/Shop';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Login from './USAA2/Login';
// import Submit from './USAA2/Submit';
// import ControlledInputs from './USAA2/ControlledInputs';
// import Table from './USAA2/Table';
// import Name from './USAA2/Name';
// import Topics from './USAA2/Topics';
// import Toast from './USAA2/Toast';
// import Wedding from './USAA2/Wedding';
// import Corporate from './USAA2/Corporate';
// import Signup from './USAA2/Signup';
// import Counter from './USAA2/Counter';

// import CreateUser from './USAA2/CreateUser';
// // import {​​fetchUsers}​​ from './Services';
// // import fetchComments from './USAA2/services';
// // import TopicsItem from './USAA2/TopicsItem';




// function App() {
  
//   return (
    
//     <div className="new">
   
//       <Router>

//         <Navi />
//         <Switch>
//           {/* <Route path="/" exact component={Home} /> */}
//           <Route path="/about" component={About} />
//           <Route path="/shop" component={Shop} />
//           <Route path="#" component={Home} />
//           <Route path="/login" component={Login} />
//           <Route path="/submit/:username" component={Submit} />
//           <Route path="/controlledinputs" component={ControlledInputs} />
//           <Route path="/topics" component={Topics} />
//           {/* <Route path="/topicsitem" component={TopicsItem} /> */}

//           <Route path="/toast" component={Toast} />
//           <Route path="/signup" component={Signup} />
          
//           <Route path="/wedding" component={Wedding} />
//           <Route path="/corporate" component={Corporate} />
//           <Route path="/counter" component={Counter} />

//           {/* fetchComments(); */}

//         </Switch>
//       </Router>

//       <div className="Appsnew">
// <CreateUser />

//         <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
//           <Navbar.Brand href="/about">Event Management</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="mr-auto">
//               <Nav.Link href="/toast">Logo</Nav.Link>
//               <Nav.Link href="/counter">Status</Nav.Link>
//               <NavDropdown title="Events" id="collasible-nav-dropdown">
//                 <NavDropdown.Item href="/wedding">Wedding</NavDropdown.Item>
//                 <NavDropdown.Item href="/corporate">Corporate</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Social</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//             <Nav>
//               <Nav.Link href="/signup">Sign up</Nav.Link>
//               <Nav.Link href="/login">
//                 Login
//       </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//         </div>
//         <div class="wrapper">

//           <div class="sidebar">
//             <h2>Events</h2>
//             <ul>
//               <li><a href="/about"><i class="fas fa-home"></i>Home</a></li>
//               <li><a href="#"><i class="fas fa-user"></i>Profile</a></li>
//               <li><a href="#"><i class="fas fa-address-card"></i>About</a></li>
//               <li><a href="#"><i class="fas fa-project-diagram"></i>portfolio</a></li>
//               <li><a href="#"><i class="fas fa-blog"></i>Blogs</a></li>
//               <li><a href="#"><i class="fas fa-address-book"></i>Contact</a></li>
//               <li><a href="#"><i class="fas fa-map-pin"></i>Map</a></li>
//             </ul>
//             <div class="social_media">
//               <a href="#"><i class="fab fa-facebook-f"></i></a>
//               <a href="#"><i class="fab fa-twitter"></i></a>
//               <a href="#"><i class="fab fa-instagram"></i></a>
//             </div>
//           </div>
//           <div class="main_content">
//             <div class="header"><h1>Hi Welcome to Event Management!!</h1></div>
//             <div class="info">
//               <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed nobis ut exercitationem atque accusamus sit natus officiis totam blanditiis at eum nemo, nulla et quae eius culpa eveniet voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio perferendis itaque alias sint, beatae non maiores magnam ad, veniam tenetur atque ea exercitationem earum eveniet totam ipsam magni tempora aliquid ullam possimus? Tempora nobis facere porro, praesentium magnam provident accusamus temporibus! Repellendus harum veritatis itaque molestias repudiandae ea corporis maiores non obcaecati libero, unde ipsum consequuntur aut consectetur culpa magni omnis vero odio suscipit vitae dolor quod dignissimos perferendis eos? Consequuntur!</div>

//               <Carousel >
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JInG1uGlKMUIPew7kF0afhNPpi7sxZJQLw&usqp=CAU"
//                     alt="First slide"
//                     width={600} height={200}
//                   />
//                   <Carousel.Caption>
//                     <h3>React</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src="https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg"
//                     alt="Third slide"
//                     width={600} height={200}
//                   />

//                   <Carousel.Caption>
//                     <h3>React with Bootstrap</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src="https://i2.wp.com/www.csscodelab.com/wp-content/uploads/2019/11/stripe-hero-background-effect-html-css.png?fit=1062%2C631&ssl=1"
//                     alt="Third slide"
//                     width={600} height={200}
//                   />

//                   <Carousel.Caption>
//                     <h3>React with Material UI</h3>
//                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//               </Carousel>







//             </div>


//           </div>



//         </div>


//       {/* </div> */}



//      </div>
  
//   )
  
  
// }

// const Home = () => (
//   <div>
//     <h1>Home Page</h1>
//   </div>
// );
// export default App;



// import CreateUser from  './USAA2/CreateUser';
// import React,{Component} from 'react';
// import {fetchUsers,insertUser,deleteUser} from './USAA2/Services';
// // import {fetchComments,SaveComments} from './USAA2/Services';
// import DeleteUser from  './USAA2/DeleteUser';
// import Hooksfunction from  './USAA2/Hooksfunction';
// class App extends Component {
// componentDidMount(){
// const value=fetchUsers();
// //   const del=deleteUser(1);
// // console.log(del);
// }
// render(){
// return (
 
//     <div className="App">
//       {/* <Hooksfunction /> */}
//       <CreateUser/><br/>
//       <DeleteUser />
    
      
      
 
        
       
//       </div>
    
//   );
// }
// }
 
// export default App;


 
// change = (event)=>{
//         const name = event.target.name;
//         const value = event.target.value;
//         this.setState({
//             [name]:value
//         })
// }







// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import { Nav, Navbar, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';
// import { withRouter } from "react-router";
// import { Link } from 'react-router-dom';
// import createData from './USAA/Table';
// import Navi from './USAA2/Navi';
// import About from './USAA2/About';
// import Shop from './USAA2/Shop';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Login from './USAA2/Login';
// import Submit from './USAA2/Submit';
// import ControlledInputs from './USAA2/ControlledInputs';
// import Table from './USAA2/Table';
// import Name from './USAA2/Name';
// import Topics from './USAA2/Topics';
// import Toast from './USAA2/Toast';
// import Wedding from './USAA2/Wedding';
// import Corporate from './USAA2/Corporate';
// import Signup from './USAA2/Signup';
// import Counter from './USAA2/Counter';
// import Search from './USAA2/Search';
// import Condition from './USAA2/Condition';
// import DisplayEmployees from './USAA2/displayEmployees';

// import UserPage from './USAA2/UserPage';
// import UserBooks from './USAA2/UserBooks';
// // import bookTable from './USAA2/bookTable';

// import CreateUser from './USAA2/CreateUser';
// // import {​​fetchUsers}​​ from './Services';
// // import fetchComments from './USAA2/services';
// // import TopicsItem from './USAA2/TopicsItem';




// function App() {
  
//   return (
    
//     <div className="new">
   
//       <Router>

//         <Navi />
        
//         {/* <bookTable /> */}
       
//         <Switch>

       
//           {/* <Route path="/" exact component={Home} /> */}
//           <Route path="/about" component={About} />
//           <Route path="/shop" component={Shop} />
//           <Route path="#" component={Home} />
//           <Route path="/login" component={Login} />
//           <Route path="/submit/:username" component={Submit} />
//           <Route path="/controlledinputs" component={ControlledInputs} />
//           <Route path="/topics" component={Topics} />
//           <Route path="/createuser" component={CreateUser} />
//           {/* <Route path="/topicsitem" component={TopicsItem} /> */}
//           <Route path="/condition" component={Condition} />
//           <Route path="/toast" component={Toast} />
//           <Route path="/signup" component={Signup} />
//           <Route path="/search" component={Search} />
//           <Route path="/userpage" component={UserPage} />
          
//           <Route path="/wedding" component={Wedding} />
//           <Route path="/corporate" component={Corporate} />
//           <Route path="/counter" component={Counter} />
//           <Route path="/userbooks" component={UserBooks} />

//           {/* fetchComments(); */}

//         </Switch>
//       </Router>

//       <div className="Appsnew">
// {/* <CreateUser /> */}

//         <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
//           <Navbar.Brand href="/about">Library Management</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="mr-auto">
//               <Nav.Link href="#">Logo</Nav.Link>
//               <Nav.Link href="#">Status</Nav.Link>
//               <NavDropdown title="Library" id="collasible-nav-dropdown">
//                 <NavDropdown.Item href="/wedding">National Library</NavDropdown.Item>
//                 <NavDropdown.Item href="/corporate">Connemara Public Library</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Anna Centenary Library</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//             <Nav>
//               <Nav.Link href="/signup">Sign up</Nav.Link>
//               <Nav.Link href="/login">
//                 Login
//       </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//         </div>
//         <div class="wrapper">

//           <div class="sidebar">
//             <h2>Library</h2>
//             <ul>
//               <li><a href="/about"><i class="fas fa-home"></i>Home</a></li>
//               <li><a href="#"><i class="fas fa-user"></i>Profile</a></li>
//               <li><a href="#"><i class="fas fa-address-card"></i>About</a></li>
//               <li><a href="#"><i class="fas fa-project-diagram"></i>portfolio</a></li>
//               <li><a href="#"><i class="fas fa-blog"></i>Blogs</a></li>
//               <li><a href="#"><i class="fas fa-address-book"></i>Contact</a></li>
//               <li><a href="#"><i class="fas fa-map-pin"></i>Map</a></li>
//             </ul>
//             <div class="social_media">
//               <a href="#"><i class="fab fa-facebook-f"></i></a>
//               <a href="#"><i class="fab fa-twitter"></i></a>
//               <a href="#"><i class="fab fa-instagram"></i></a>
//             </div>
//           </div>
//           <div class="main_content">
//             <div class="header"><h1>LIBRARY MANAGEMENT SYSTEM</h1></div>
//             <div class="info">
//               <div>A library is a curated collection of sources of information and similar resources, selected by experts and made accessible to a defined community for reference or borrowing, often in a quiet environment conducive to study. dolor sit, amet consectetur adipisicing elit. A sed nobis ut exercitationem atque accusamus sit natus officiis totam blanditiis at eum nemo, nulla et quae eius culpa eveniet voluptatibus repellat illum tenetur, facilis porro. A library is a curated collection of sources of information and similar resources, selected by experts and made accessible to a defined community for reference or borrowing.A library is a curated collection of sources of information and similar resources, selected by experts and made accessible to a defined community for reference or borrowing, often in a quiet environment conducive to study.</div>
//                 {/* <DisplayEmployees /> */}
//               <Carousel >
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOlEl4_oubebpfpY_q0e_jKzf-3WEir71cA&usqp=CAU"
//                     alt="First slide"
//                     width={600} height={200}
//                   />
//                   <Carousel.Caption>
//                     <h3>Allahabad Public Library</h3>
//                     <p>Allahabad, Uttar Pradesh</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbcmx1IoRt3q3NeW3_d-Mz1DZLpAmrot6aA&usqp=CAU"
//                     alt="Third slide"
//                     width={600} height={200}
//                   />

//                   <Carousel.Caption>
//                     <h3>Anna Centenary Library</h3>
//                     <p>Chennai, Tamil Nadu</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQuL80Vxxu3aIlrc_wrUf8ybMEkiL4jv6mg&usqp=CAU"
//                     alt="Third slide"
//                     width={600} height={200}
//                   />

//                   <Carousel.Caption>
//                     <h3>Connemara Public Library</h3>
//                     <p>Chennai, Tamil Nadu</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//               </Carousel>







//             </div>


//           </div>



//         </div>


//       {/* </div> */}



//      </div>
  
//   )
  
  
// }

// const Home = () => (
//   <div>
//     <h1>Home Page</h1>
//   </div>
// );
// export default App;













// import CreateUser from  './USAA2/CreateUser';
// import React,{Component} from 'react';
// import {fetchUsers,insertUser,deleteUser} from './USAA2/Services';
// // import {fetchComments,SaveComments} from './USAA2/Services';
// import DeleteUser from  './USAA2/DeleteUser';
// import Hooksfunction from  './USAA2/Hooksfunction';
// class App extends Component {
// componentDidMount(){
// const value=fetchUsers();
// //   const del=deleteUser(1);
// // console.log(del);
// }
// render(){
// return (
 
//     <div className="">
//       {/* <Hooksfunction /> */}
//       <CreateUser/><br/>
//       <DeleteUser />
    
      
      
 
        
       
//       </div>
    
//   );
// }
// }
 
// export default App;






















// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import DisplayEmployees from './React-Rest/displayEmployees';
// import DeleteUser from './React-Rest/DeleteUser';
// import CreateUser from './React-Rest/CreateUser';
// import UserPage from './React-Rest/UserPage';
// import LoginUser from './React-Rest/LoginUser';
// import { Nav, Navbar, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';

// import { withRouter } from "react-router";
// import { Link } from 'react-router-dom';

// import Navi from './React-Rest/Navi';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



// function App() {
  
//   return (
// <div className="Task">
// <div className="header">



//   <h1> EMPLOYEE PORTAL</h1>
  

//   <Router>
//     <Navi />
//     <Switch>
//       <Route path="/userpage" component={UserPage} />
//       <Route path="/deleteuser" component={DeleteUser} />
//       <Route path="/createuser" component={CreateUser} />
//       <Route path="/loginuser" component={LoginUser} />
//     </Switch>
//   </Router>
  
//     {/* <DisplayEmployees />
//     <DeleteUser />
//     <CreateUser />
//     <UserPage /> */}

//     <div className="bg">
//     <div class="main_content">
           
//             <div class="info">
//               <div>An employee is a term for workers and managers working for a company, organization or community. These people are the staff of the organization. In general, any person hired by an employer to do a particular job in exchange for payment is an employee, but there are different kinds of employees. In some countries, employers are required by law to do certain things, like obey minimum wage laws, provide a safe workplace, and sometimes pay a tax. Employers also have to give their official employees benefits, like paying for health insurance. Because of this, some employers like to hire independent contractors to do work instead of regular employees. In the United States, a worker is an employee if their employer gets to tell them what do do, how to do it, and when to do it in a material way and an independent contractor if they get to make their own decisions about how to do what the employer wants</div>
//                 {/* <DisplayEmployees /> */}
//               <Carousel >
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src="data:image/jpeg;base64,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"
//                     alt="First slide"
//                     width={600} height={400}
//                   />
//                   <Carousel.Caption>
//                     <h3>HCL TECHNOLOGIES</h3>
//                     <p>CHENNAI</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFG7EyoEr9RaKTcVLSL6WJetsjQA55yZa_dA&usqp=CAU"
//                     alt="Third slide"
//                     width={600} height={400}
//                   />

//                   <Carousel.Caption>
//                     <h3>HCL TECHNOLOGIES</h3>
//                     <p>BANGALORE</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <img
//                     className="d-block w-100"
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafoOqHrRvspM2PBkMxMayCy5IXYQKXRO6kw&usqp=CAU"
//                     alt="Third slide"
//                     width={600} height={400}
//                   />

//                   <Carousel.Caption>
//                     <h3>HCL TECHNOLOGIES</h3>
//                     <p>NOIDA</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//               </Carousel>







//             </div>


//           </div>

//       </div>
// </div>
    
//     </div>
//   )}
//   export default App;











import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import UserBooks from './Library/UserBooks';

import CreateUser from './Library/CreateUser';
import UserPage from './Library/UserPage';
import RegisterPage from './Library/RegisterPage';

import { Nav, Navbar, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';

import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

import Navi from './Library/Navi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  
  return (
<div className="Task">
<div className="header">



  <h1>LIBRARY MANAGEMENT SYSTEM</h1>
  

  <Router>
    <Navi />
    <Switch>
      <Route path="/userpage" component={UserPage} />
      <Route path="/userbooks" component={UserBooks} />
      <Route path="/createuser" component={CreateUser} />
      <Route path="/registerpage" component={RegisterPage} />


    </Switch>
  </Router>
  
    

    <div className="bg">
    <div class="main_content">
           
            <div class="info">
              <div>A library is a curated collection of sources of information and similar resources, selected by experts and made accessible to a defined community for reference or borrowing, often in a quiet environment conducive to study. dolor sit, amet consectetur adipisicing elit. A sed nobis ut exercitationem atque accusamus sit natus officiis totam blanditiis at eum nemo, nulla et quae eius culpa eveniet voluptatibus repellat illum tenetur, facilis porro. A library is a curated collection of sources of information and similar resources, selected by experts and made accessible to a defined community for reference or borrowing.A library is a curated collection of sources of information and similar resources, selected by experts and made accessible to a defined community for reference or borrowing, often in a quiet environment conducive to study.</div>
                {/* <DisplayEmployees /> */}
              <Carousel >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                   src="https://image.shutterstock.com/image-photo/books-new-modern-library-stuttgart-600w-674867536.jpg"
                    alt="First slide"
                    width={600} height={400}
                  />
                  <Carousel.Caption>
                    <h3>ANNA LIBRARY</h3>
                    <p>CHENNAI</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbcmx1IoRt3q3NeW3_d-Mz1DZLpAmrot6aA&usqp=CAU"
                    alt="Third slide"
                    width={600} height={400}
                  />

                  <Carousel.Caption>
                    <h3>NATIONAL LIBRARY</h3>
                    <p>BANGALORE</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbcmx1IoRt3q3NeW3_d-Mz1DZLpAmrot6aA&usqp=CAU"
                    alt="Third slide"
                    width={600} height={400}
                  />

                  <Carousel.Caption>
                    <h3>CENTRAL LIBRARY</h3>
                    <p>NOIDA</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>







            </div>


          </div>

      </div>
</div>
    
    </div>
  )}
  export default App;