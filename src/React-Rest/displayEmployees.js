import {fetchUsers} from "./Services";
import React,{Component} from "react";

export default class DisplayEmployee extends Component{
    constructor(props){
    super(props);
     this.state = {
         employees : [],
         show : true
     }   
    }

    handleClick = () => {
        if(this.state.employees.length > 0){
            this.setState({
                employees : [],
                show: false
            })
        }else{
            fetchUsers(this.setEmployee);
        }
    }
    setEmployee = (data)=> {
        this.setState({
            employees : data
        })
    }
    render = () => {
       return <>{this.state.employees.map(p =><div>
            {JSON.stringify(p)}
        </div> )}
        <button class="btn btn-primary" onClick = {() => this.handleClick()}>Display Employee Details</button></>
    }
}
