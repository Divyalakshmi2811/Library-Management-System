import React from 'react'
class ClassCom extends React.Component {
  constructor(props)
  {
      super(props);
      this.state=
      {
          newArray:[100,200,300,400,500]
      }
  }
  onClick=()=>{
      const {newArray}=this.state;
      alert("you have clicked");
      
      for(const newArr of newArray)
      {
          console.log(newArr);//prints 100,200,300,400,500
      }
  }

    render() {
        

        const array = this.props.fruits();
        const num = this.props.numbers();
        const fruitslist = [];
        const fruitslist1 = [];
        const fruitspop = [];



        for (const arraynew of array) //values
        {
            fruitslist.push(<li key={arraynew}>{arraynew}</li>)
        }

        for (const arraynew in array)//index
        {
            fruitslist1.push(<li key={arraynew}>{arraynew}</li>)
        }
        for (const arraynew of array) //values
        {
            fruitspop.pop(<li key={arraynew}>{arraynew}</li>)
        }

        const numbersmap = num.map((number) => number * 2);//Map()
        console.log(numbersmap);//return 2,4,6,8,10


        const listItems = num.map((number) =>
            <li>{number}</li>//prints 1,2,3,4,5
        );

        const numberfilter = num.filter((number) => number >= 3);
        console.log(numberfilter);//return 3,4,5

        const numberincludes = num.includes(3);
        console.log(numberincludes);//return true

        const findnumber = num.find((number) => number > 4);
        console.log(findnumber);//prints 5

        var myslice = array.slice(1, 3);//end value will not be included
        console.log(myslice);//prints mango, Banana

          return (
            <div>
                ----------------------------------------------
                <h1> Welcome React {this.props.name}</h1>
                <h2>The total days of training: {this.props.day}</h2>


                {fruitslist}
                {fruitslist1}
                {fruitspop}
                   ------------
                {listItems}
                -------------
                {this.props.html()}
                {this.props.functionProps()}

                <button type="submit" onClick={this.onClick}>Click </button>


            </div>


        )
    }
}
export default ClassCom
