import React,{useState} from 'react'




export default function Name({match}) {
   
    const [count,setCount] = useState(()=>{
        return 0
    })

   function decrementCart() {
        if(count>0)
        setCount(prevCount=>prevCount-1)
    }

    function incrementCart(){
        setCount(prevCount=>prevCount+1)
    }

    return (
         <div className="kk">
            <h1>Welcome {match.params.username}</h1>
            <h4>Cart <span class="badge badge-secondary">{count}</span></h4>
            <br></br>
            <div className="card" style={{width: "18rem"}}  id='prod'>
                <div className="card-body">
                    <h5 className="card-title">Apple</h5>
                    <p className="card-text">This is the Apple you Eat not the Apple you Use!wkwkwk</p>
                    <button className='btn btn-primary' id='btnn' onClick={incrementCart}>Add to Cart</button>
                    <button className='btn btn-primary' id='btnn'onClick={decrementCart}>Remove from Cart</button>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}} id='prod'>
                <div className="card-body">
                    <h5 className="card-title">Lichie</h5>
                    <p className="card-text">Lichie is never Itchy!wkwkwk</p>
                    <button className='btn btn-primary' id='btnn' onClick={incrementCart}>Add to Cart</button>
                    <button className='btn btn-primary' id='btnn' onClick={decrementCart}>Remove from Cart</button>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}  id='prod'>
                <div className="card-body">
                    <h5 className="card-title">Hawaiin Papaya</h5>
                    <p className="card-text">Just a Papaya with a Green Card!wkwkwk</p>
                    <button className='btn btn-primary' id='btnn' onClick={incrementCart}>Add to Cart</button>
                    <button className='btn btn-primary' id='btnn' onClick={decrementCart}>Remove from Cart</button>
                </div>
            </div>
        </div>
    )
}