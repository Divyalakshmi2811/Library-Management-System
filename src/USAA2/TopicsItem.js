import React from 'react'
const TopicsItem=({match})=>{
    let item=null;
    if(match.params.topicId==="spreadoperator"){
        item=<p> The spread operator allows us to spread the value of an array (or any iterable) across zero or more arguments in a function or elements in an array (or any iterable). The rest parameter allows us to pass an indefinite number of parameters to a function and access them in an array.</p>
    }

    if(match.params.topicId==="propsdrilling"){
        item=<p> Prop Drilling is the process by which you pass data from one part of the React Component tree to another by going through other parts that do not need the data but only help in passing it around. ... This may continue until the data gets to the ComponentNeedingProps .</p>
    }

    if(match.params.topicId==="purecomponent"){
        item=<p>Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values. If the value of the previous state or props and the new state or props is the same, the component is not re-rendered</p>
    }

    if(match.params.topicId==="conditionalrendering"){
        item=<p>Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them. This example renders a different greeting depending on the value of isLoggedIn prop.</p>
    }
    return(

        <div>
            <h3>{match.params.topicId}</h3>
            {item}
        </div>

)
}

export default TopicsItem;