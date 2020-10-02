import React, { Component } from 'react';
import './App.css';

// components
import Board from './components/Board.jsx';
import Header from './components/Header.jsx';
import NewTodo from './components/NewTodo.jsx';

export default class App extends Component {
  state = {
    todos: [],
  };

  // Add a new todo
  addNewTodo = (title, description, id) => {
    const newTodo = {
      id: this.state.todos.length
        ? this.state.todos.reduce((a, b) => (a.id > b.id ? a : b)).id + 1
        : 0,
      done: false,
      title,
      description,
    };
    this.setState({ todos: [...this.state.todos, newTodo] }, () =>
      this.orderTodos()
    );
  };

  // Toggle done
  markDone = id => {
    this.setState(
      {
        todos: this.state.todos.map(todo => {
          if (id === todo.id) {
            todo.done = !todo.done;
          }
          return todo;
        }),
      },
      () => this.orderTodos()
    );
  };

  removeTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)],
    });
  };

  orderTodos() {
    const todoList = this.state.todos;
    todoList.sort((a, b) => a.id - b.id);
    const todo = todoList.filter(todo => todo.done === false);
    const done = todoList.filter(todo => todo.done === true);
    this.setState({
      todos: todo.concat(done),
    });
  }
  componentDidMount() {
    this.orderTodos();
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <div id="todo__app" className="todo__app">
            <NewTodo addNewTodo={this.addNewTodo} />
            <Board
              todos={this.state.todos}
              markDone={this.markDone}
              removeTodo={this.removeTodo}
              orderTodos={this.orderTodos}
            />
          </div>
        </div>
      </div>
    );
  }
}
