import React from 'react'
import Manage from './Manage'

function Event(props) {
    const { name,location } = props
    return (
        <React.Fragment>
            <h1>Hi Welcome to {name} - {location}</h1>
            <Manage name ={name}/>
        </React.Fragment>
    )
}


export default Event