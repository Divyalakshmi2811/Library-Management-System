import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link,Route } from 'react-router-dom';
import { Nav, Jumbotron, Navbar, Figure, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';



class ControlledInputs extends Component {
//    constructor(props)
//    {
//        super(props);
//        this.state=
//        {
//            FirstName:'divya',
//            LastName:'lakshmi'
//        }
//    }

//    onInputChange(event)
//    {
// console.log(event);

// this.setState({
//     [event.target.id]:[event.target.value]
// })
//    }

state={
    username:'',
    password:''
}



change = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
}
// goback=()=>{
//     this.props.history.push('/');
//   }



//     render() {
//         return (
//             <div>
//                 <div className="onchange">
//                     <h1>Form</h1>
//                 <form>
//                     <div class="form-group">
//                         <label for="formGroupExampleInput">FirstName</label>
//                         <input type="text" class="form-control" id="FirstName" placeholder="Example input" value={this.state.FirstName} />
//                     </div>
//                     <div class="form-group">
//                         <label for="formGroupExampleInput2">LastName</label>
//                         <input type="text" class="form-control" id="LastName" placeholder="Another input" value={this.state.LastName} onChange={(event)=>{this.onInputChange(event)}}/>
//                     </div>
//                 </form>
//                 </div>
//                 <Link to='/submit' className="badge badge-danger">Submit
//                 {/* <li>Shop</li> */}
//         </Link>
//             </div>
//         )
//     }

// }
// export default ControlledInputs

render() {
    const action = '/submit/'+this.state.username;
    return (
        
    <div className="login-form">
        <form action={action} >
            <h2 classNameName="text-center">Log in</h2>       
                <div className="form-group">
                    <input type="text" className="form-control" name='username' placeholder="Username" required="required" onChange={this.change}/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name='password' placeholder="Password" required="required" onChange={this.change}/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Log in</button><br></br>
                    {/* <Button onClick={this.goback}>Go Back</Button>
                    */}
                </div>
        </form>
        

    </div>                
        
    )
}
}

export default ControlledInputs;

