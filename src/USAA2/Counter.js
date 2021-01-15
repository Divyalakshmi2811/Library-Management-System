import React,{Component} from 'react'
class Counter extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state={count:0}
        this.handleClick=this.handleClick.bind(this)//without arrow function
    }
    handleClick()
    {
        this.setState({count:this.state.count+1}) //Button increment
    }

    onClickme=()=>{  //with arrow function
        this.setState({
            count:this.state.count+1,
            
        })
        
    }

    onClickminus=()=>{  //with arrow function
        this.setState({
            count:this.state.count-1,
            
        })
        
    }

    
    render()
    {
        return(
            <div className="jumbo">
            <button onClick={this.handleClick}>Counter {this.state.count}</button><br/><br/>
            <button className='btn btn-warning' onClick={this.onClickme}>Increment</button>&nbsp;&nbsp;&nbsp;
            <button className='btn btn-warning' onClick={this.onClickminus}>Deccrement</button>
            </div>
        )
    }
}
export default Counter