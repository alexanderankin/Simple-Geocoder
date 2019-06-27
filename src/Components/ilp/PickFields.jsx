import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FieldList from './pf/FieldList';

class PickFields extends Component {
  static propTypes = {
    line: PropTypes.string,
    delimiter: PropTypes.string,
    setField: PropTypes.func,
  };

  constructor(props) {
    super(props);
    console.log("delimiter changed", this.props.delimiter);
  }

  render() {
    var fields = this.props.line.split(this.props.delimiter);
    var checked = [];
    fields.forEach(() => checked.push(false));

    return (
      <div>
        <p>PickFields</p>
        <ul>
          {fields.map((field, i) => {
            return <li key={i}>
              <FieldList
                name={field}
                index={i}
                onChange={() => {}}
                />
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default PickFields;
