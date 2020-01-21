import * as types from '../actions/types';

const todos = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ];
    case types.TOGGLE_TODO:
      return state.map(todo => 
        (todo.id === action.id) ? {...todo, done: !todo.done} : todo
      );
    case types.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

export default todos;