import {getBooks} from "./Services";

import {React, Component } from "react";

export default class bookTable extends Component{

  constructor(props){
    super(props);
    this.state = {
      books : []
    }
  }

  setBooks = (books) => {
    this.setState({books : books});
  }


  render  = () => <>
    <table>
      {this.state.books.map(p => <tr><td>{p.id}</td><td>{p.bookname}</td><td>{p.status}</td><td>
        <button >Reserve</button></td><td><button>Checkout </button></td></tr>)}
    </table>
  </>


componentDidMount = () => {
  getBooks(this.setBooks);
} 
}

