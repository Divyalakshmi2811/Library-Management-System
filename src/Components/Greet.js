import React from 'react'
import Welcome from './Welcome'

function Greet(props) {
    const { name } = props
    return (
        <React.Fragment>
            <h1>Hello {name}</h1>
            <Welcome name={name}/>
        </React.Fragment>
    )
}

//export const Greet=() =><h1>Hello Divya Appasani</h1>

export default Greet