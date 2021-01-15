import React,{useState} from 'react'

function Hooksfunction()
{
    const[name,setName]=useState("Divya");
    return(
        <div>
            My name is {name}
        </div>
    )
}

export default Hooksfunction