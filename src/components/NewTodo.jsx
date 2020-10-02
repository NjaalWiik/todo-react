import React, { Component } from 'react';
import './style/NewTodo.css';

export default class NewTodo extends Component {
  state = {
    title: '',
    description: '',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state.title, this.state.description);
    this.setState({
      title: '',
      description: '',
    });
  };

  render() {
    return (
      <section className="form">
        <form onSubmit={this.onSubmit}>
          <input
            autoComplete="off"
            className="form__item"
            maxLength="25"
            name="title"
            onChange={this.onChange}
            placeholder="Title"
            type="text"
            value={this.state.title}
          />
          <input
            autoComplete="off"
            className="form__item2"
            maxLength="32"
            name="description"
            onChange={this.onChange}
            placeholder="Description"
            type="text"
            value={this.state.description}
          />
          <button type="submit" className="form__button">
            Add new to-do
          </button>
        </form>
      </section>
    );
  }
}
