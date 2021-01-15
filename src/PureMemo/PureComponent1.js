import React ,{PureComponent} from 'react'
export class PureComponent1 extends PureComponent {
    render()
    {

        console.log("Pure Component")
        return(
            <div>
                <h1>Pure Component Props Values {this.props.name}</h1>


            </div>


        )
    }
}

export default PureComponent1