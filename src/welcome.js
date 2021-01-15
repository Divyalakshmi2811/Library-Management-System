import React, { Component } from 'react'
import { Info } from './Info'

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={
           experience : 5,
           interest:'photography'

        }

    }
    render(){
        const { name }=this.props
        const { experience ,interest}=this.state
        return(
            <React.Fragment>
                <h2> Class Component example </h2>
                <p>my name is {name} and i am interested in {interest}. I have {experience} years of experience.</p>
                <Info name={this.props.name} />
            </React.Fragment>
        
        
        )
    }
}
export default Welcome