import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameFields extends Component {
  static propTypes = {
    line: PropTypes.string,
    delimiter: PropTypes.string,
  };

  /*constructor(props) {
    super(props);
  }*/

  render() {
    return (
      <p>NameFields</p>
    );
  }
}

export default NameFields;
