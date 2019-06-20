import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GeoCoder extends Component {
  static propTypes = {
    rows: PropTypes.arrayOf(PropTypes.object),
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <pre>{JSON.stringify(this.props.rows, null, 2)}</pre>
    );
  }
}

export default GeoCoder;
