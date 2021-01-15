import React, { Component } from 'react'
 
class NormalClassComp extends Component {
    render() {
        console.log('Normal component rendering')
        return (
            <div>
                <h3>Normal Class Component{this.props.name}</h3>


                Normal Class Component with conditional rendering
            </div>
        )
    }
}
 
export default NormalClassComp