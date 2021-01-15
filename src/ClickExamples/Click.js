import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class Click extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
    
      // change code below this line
    
      increment() {
        this.setState({
          count: this.state.count + 1  //increment
        });
      };
      
    handleClick =()=>{
        this.setState(alert("You have submitted successfully")); //normal click
    }


    
    render()
    {
        return(
            <div>
            
            <button className='inc' onClick={(e) => this.increment(e)}>Syllabus</button>
            <h1>Total syllabus: {this.state.count}</h1>

            <button class="btn btn-danger" onClick={this.handleClick} style={this.state}>Submit</button><br/><br/>
         </div>
        )
    }
    
}
export default Click



