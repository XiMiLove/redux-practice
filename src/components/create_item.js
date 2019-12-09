import React, { Component } from 'react';

class CreateItem extends Component {
  componentDidMount() {
    this.refs.newItem.focus();
  }

  onSubmit = e => {
    e.preventDefault();
    const newItemValue = this.refs.newItem.value;

    if (newItemValue) {
      this.props.addItem({newItemValue});
      this.refs.form.reset();
    }
  };

  render() {
    return (
      <div className="addItemDiv">
        <form ref="form" className="addItemForm" onSubmit={this.onSubmit}>
          <input type="text" ref="newItem" placeholder="add a new todo..." className="addItemInput" />
          <button type="submit" className="addItemBtn">ADD</button>
        </form>
      </div>
    );
  }
}

export default CreateItem;