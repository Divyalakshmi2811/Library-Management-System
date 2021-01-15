import React, { Component } from 'react'
import { loginUser } from './Services'
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { Table} from 'react-bootstrap';
import { fetchUsers } from './Services'
 
class LoginUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             empId:0,
             empName:'',
             empAddress:''
        }
    }
    handleChange=(event)=>{
        //console.log(event)
        this.setState({
            [event.target.name]:event.target.value
        })
 
    }

    goback=()=>{
        this.props.history.push('/userpage');
      }
    handleSubmit=(e)=>{
        e.preventDefault();
        const userObj={
            "empId":this.state.empId,
            "empName":this.state.empName,
            "empAddress":this.state.empAddress
          }
        loginUser(userObj,this.validate);
    }

    handleClick = () => {
        fetchUsers();
    }
    validate = (employeedetails,serverdata) => {
        console.log(employeedetails);
        console.log(serverdata);
        if(employeedetails.empName === serverdata.empName){
            this.props.history.push("/loginuser");
            alert("Validate User Successful");
        }else{
            alert("failed");
        }
    }
   
    render() {
        return (
            <div className="loginpage">
                
               <form  onSubmit={this.handleSubmit}>
                    <div>
                        <label>Emp Id</label>
                        <input type='text' name="empId" value={this.state.username} onChange={this.handleChange}placeholder="Enter unique ID" required/>
                    </div>
                    <div>
                        <label>Emp Name:</label>
                        <input type='text' name="empName" value={this.state.username} onChange={this.handleChange}placeholder="Enter Username" required/>
                    </div>
                    <div>
                        <label>Emp Address    :</label>&nbsp;&nbsp;
                        <input type='password' name="empAddress" value={this.state.username} onChange={this.handleChange} placeholder="Enter valid Password" required/>
                    </div>
                    <div>
                        {/* <label>Submit</label> */}
                        <button type='submit' class="btn btn-primary" onChange={(e) =>this.handleSubmit(e)}   >Login</button>&nbsp;&nbsp;&nbsp;
                        
                        
                       
                        
                {/* <Button onClick={this.goback}>Go Back</Button> */}
                    </div>
                </form>
               
            </div>
        
        )
    }
}
 
export default LoginUser




