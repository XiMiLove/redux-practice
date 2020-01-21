
import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const TodoApp = () => (
  <div>
    <h1>Todo List using Redux</h1>
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default TodoApp;