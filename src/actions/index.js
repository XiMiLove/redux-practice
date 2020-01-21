import * as types from './types';

let nextId = 0;
export const addTodo = text => ({
  type: types.ADD_TODO,
  id: nextId++,
  text
});

export const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  id
});

export const removeTodo = id => ({
  type: types.REMOVE_TODO,
  id
});