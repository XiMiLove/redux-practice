import React, { Component } from 'react';

class TodoItem extends Component {
  onClickDone = () => {
    this.props.markItemStatus(parseInt(this.props.index, 10));
  }

  onClickRemove = () => {
    this.props.removeItem(parseInt(this.props.index, 10));
  }

  render() {
    var itemStatus = this.props.item.done ? "item-done" : "item-undone";
    return (
      <li className="todo-item">
        <div className={itemStatus}>
          <span className="check-icon" onClick={this.onClickDone}></span>
          {this.props.item.value}
          <button type="button" className="btn-close" onClick={this.onClickRemove}>X</button>
        </div>
      </li>
    );
  }
}

export default TodoItem;