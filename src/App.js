import React from "react";
// import logo from './logo.svg';
import './App.css';
import ListItems from "./ListItems";
import{library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  };
   /* Here declare the Add function*/
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    // console.log(newItem);
    if (newItem.text!== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  };
  /* Here declare the delete function*/
  deleteItem(key){
     const filteredItems = this.state.items.filter(item =>
      item.key!==key);
      this.setState ({
        items:filteredItems
      })
  }

  /*Here declare the edit and update function*/
  setUpdate(text, key){
    const items = this.state.items;
    items.map(item =>{
      // console.log(item);
      if(item.key===key){
        item.text=text;
      }
      else this.setState({
        items:items
      })
      // console.log(item);
    });
    
  };
  render() {
    
    return (
  
      <div className="App">
       <h1>To-Do-List</h1> 
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter text"
              value={this.state.currentItem.text}
              onChange={this.handleInput} />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems items = {this.state.items}
        deleteItem = {this.deleteItem}
        setUpdate = {this.setUpdate}></ListItems>

      </div>
    );
  };

};

export default App;
