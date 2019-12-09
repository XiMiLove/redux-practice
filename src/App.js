import React, { Component } from 'react';
import './App.css';
import CreateItem from './components/create_item';
import TodoList from './components/todo_list';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  addItem = todoItem => {
    const items = [...this.state.items];
    items.unshift({
      key: Date.now(),
      value: todoItem.newItemValue,
      done: false
    })
    this.setState({items});
  }

  removeItem = index => {
    const items = [...this.state.items];
    items.splice(index, 1)
    this.setState({items});
  }

  markItemStatus = index => {
    let item = this.state.items[index];
    let items = [...this.state.items];
    items.splice(index, 1);
    item.done = !item.done;
    item.done ? items.push(item) : items.unshift(item);
    this.setState({items});
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <CreateItem addItem={this.addItem}/>
        <TodoList items={this.state.items} removeItem={this.removeItem} markItemStatus={this.markItemStatus}/>
      </div>
    );
  }
}

export default App;
