import React, { Component } from 'react';
import './style/TodoCard.css';

export default class TodoCard extends Component {
  render() {
    const { id, title, description } = this.props.todo;
    return (
      <li>
        <input
          type="checkbox"
          className="cards__checkbox"
          onClick={this.props.markDone.bind(this, id)}
        />
        <p className="cards__title">{title}</p>{' '}
        <p className="cards__subtitle">{description}</p>
        <button
          className="cards__delete"
          onClick={this.props.removeTodo.bind(this, id)}
        >
          x
        </button>
      </li>
    );
  }
}
