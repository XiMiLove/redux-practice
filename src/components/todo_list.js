import React, { Component } from 'react';
import TodoItem from './todo_item';

class TodoList extends Component {
  render() {
    const items = this.props.items.map((item, index) => {
      return (
        <TodoItem 
          key={item.key} 
          item={item} 
          index={index} 
          removeItem={this.props.removeItem}
          markItemStatus={this.props.markItemStatus}/>
      );
    });
    return (
      <ul className="todo-list">{items}</ul>
    );
  }
}

export default TodoList;