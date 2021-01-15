import React, { Component } from 'react'
import { Info } from './Info'

class Manage extends Component{
    constructor(props){
        super(props);
        this.state={
           founded : 1976,
           founder:'Shiv Nadar'

        }

    }
    render(){
        const { name }=this.props
        const { founded,founder}=this.state
        return(
            <React.Fragment>
                <h2> Class Component </h2>
                <p> {name} was founded on {founded}. The founder of {name} was {founder}</p>
                <Info name={this.props.name} />
            </React.Fragment>
        
        
        )
    }
}
export default Manage