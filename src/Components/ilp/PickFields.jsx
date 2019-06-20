import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PickFields extends Component {
  static propTypes = {
    line: PropTypes.string,
    delimiter: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.fields = this.props.line.split(this.props.delimiter);

    var checked = [];
    this.fields.forEach(() => checked.push(false));
    this.state = {
      checked
    };
  }

  render() {
    return (
      <div>
        <p>PickFields</p>
        <ul>
          {this.fields.map((field, i) => {
            return <li key={i}>
              <input type="checkbox"
                checked={this.state.checked[i]}
                onChange={() => { this.setState(state => { state.checked[i] = !state.checked[i]; return state; }); }}
                />
              {field}
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default PickFields;
