import React from 'react';
class ClassExample extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            count:0
        }
    }
    
    componentDidMount()
    {
        let countIncrement=this.state.count +1;
        this.setState({count: countIncrement })
    }
    render() {
        const{name}=this.props;
        const{count}=this.state;
        return (
            <React.Fragment>

                <h3>Class Component Example !!{name}</h3>
                <p>The count is {count}</p>
               
               
            </React.Fragment>





        )
    }
}
export default ClassExample;