import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  const onSubmit = e => {
    e.preventDefault();
    const value = input.value;
    if (!value.trim()) {
      return
    }

    dispatch(addTodo(value));
    input.value = '';
  };

  return (
    <div className="addItemDiv">
      <form className="addItemForm" onSubmit={onSubmit}>
        <input type="text" ref={node => input = node} placeholder="add a new todo..." className="addItemInput" />
        <button type="submit" className="addItemBtn">ADD</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);