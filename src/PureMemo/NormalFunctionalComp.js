import React from 'react'


function NormalFunctionalComp(props) {
    console.log("Normal Functional Rendering")
    const { name} = props
    return (
        <React.Fragment>
            <h4 >Normal Functional Component {name} </h4>
            
        </React.Fragment>
    )
}


export default NormalFunctionalComp