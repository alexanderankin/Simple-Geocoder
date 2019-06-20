import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MultiDragSelect extends Component {
  static propTypes = {
    fields: PropTypes.arrayOf(PropTypes.string),
  };

  constructor(props) {
    super(props);

    this.state = {
      mouseDown: false
    }
  }

  render() {
    return (
      <p>Hello from {this.constructor.name}</p>
    );
  }
}

export default MultiDragSelect;
