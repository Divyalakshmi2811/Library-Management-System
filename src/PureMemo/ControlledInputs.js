import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class ControlledInputs extends Component {
   constructor(props)
   {
       super(props);
       this.state=
       {
           FirstName:'divya',
           LastName:'lakshmi'
       }
   }

   onInputChange(event)
   {
console.log(event);

this.setState({
    [event.target.id]:[event.target.value]
})
   }



    render() {
        return (
            <div>
                <div className="onchange">
                    <h1>Form</h1>
                <form>
                    <div class="form-group">
                        <label for="formGroupExampleInput">FirstName</label>
                        <input type="text" class="form-control" id="FirstName" placeholder="Example input" value={this.state.FirstName} />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">LastName</label>
                        <input type="text" class="form-control" id="LastName" placeholder="Another input" value={this.state.LastName} onChange={(event)=>{this.onInputChange(event)}}/>
                    </div>
                </form>
                </div>

            </div>
        )
    }

}
export default ControlledInputs



