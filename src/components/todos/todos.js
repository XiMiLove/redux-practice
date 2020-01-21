import React, { Component } from 'react';
import CreateItem from './create_item';
import TodoList from './todo_list';

class Todos extends Component {
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
      <div>
        <h1>Todo List</h1>
        <CreateItem addItem={this.addItem}/>
        <TodoList items={this.state.items} removeItem={this.removeItem} markItemStatus={this.markItemStatus}/>
      </div>
    );
  }
}

export default Todos;
