import React, { Component } from 'react';

// Components
import TodoCard from './TodoCard.jsx';

export default class Board extends Component {
  render() {
    return (
      <section className="cards">
        <ul>
          {this.props.todos.map(todo => (
            <TodoCard
              key={todo.id}
              todo={todo}
              markDone={this.props.markDone}
              removeTodo={this.props.removeTodo}
            />
          ))}
        </ul>
      </section>
    );
  }
}
