import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FieldList extends Component {
  static propTypes = {
    name: PropTypes.string,
    index: PropTypes.number,
    onChange: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.props.onChange(!this.state.checked);
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <div>
      <input
        type="checkbox"
        checked={this.state.checked}
        onChange={this.onChange}
        />
      {this.props.name}
      </div>
    );
  }
}

export default FieldList;
