import React, { Component } from 'react';
import './style/Header.css';

export default class header extends Component {
  setDate() {
    const date = new Date();
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${day} ${monthNames[monthIndex]} ${year}`;
  }

  render() {
    return (
      <div className="header">
        <h1 className="header__title">My To-Do List</h1>
        <h2 className="header__subtitle">{this.setDate()}</h2>
      </div>
    );
  }
}
