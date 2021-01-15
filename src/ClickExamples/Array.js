import React from 'react'
function Array(props) {
    const alphabet = [10, 20, 3,56,89,45,24,28,5];
    const [a, b,c,d] = alphabet;
    console.log(a);//Prints 10
    console.log(b);//Prints 20
    console.log(d);//prints 56

    var [first, second, third] = ["D", "L", "R"]; //without destructuring
    console.log(first); //prints D
    console.log(second);// prints L
    console.log(third); //prints R
    var firstName = "Divya",    MiddleName = "Lakshmi",    LastName = "M"; //with destructuring
    console.log(firstName); //Prints Divya
    console.log(MiddleName);//Prints Lakshmi
    console.log(LastName);//Prints M

    var a1, b1;
    [a1, , b1] = ["HCL", "Crown", "Tech"]; //Ignoring values
    console.log(a1);//prints HCL


    const { name, location } = props
    return (
        <React.Fragment>
            <h1> {name} {location}</h1>


        </React.Fragment>

    );
}
export default Array