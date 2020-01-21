import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ data, onClickToggle, onClickRemove }) => (
  <li className="todo-item">
    <div className={data.done ? "item-done" : "item-undone"}>
      <span className="check-icon" onClick={onClickToggle}></span>
      {data.text}
      <button type="button" className="btn-close" onClick={onClickRemove}>X</button>
    </div>
  </li>
);

Todo.prototype = {
  data: PropTypes.object.isRequired,
  onClickToggle: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired
};

export default Todo;