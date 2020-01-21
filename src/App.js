import React, { Component } from 'react';
import './App.css';
import Todos from './components/todos/todos';
import TodoApp from './components/TodoApp'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div className="App">
        <Todos />
        <TodoApp />
      </div>
    );
  }
}

export default App;
