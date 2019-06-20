import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputCSV extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      usedOnce: false
    };

    this.exampleAdd = this.exampleAdd.bind(this);
    setImmediate(this.exampleAdd)//();
  }

  exampleAdd() {
    this.props.add(`"First","Last","Address"
"John","Doe","3307 Ward St Pittsburgh PA 15213"
"John","Doe","3308 Ward St Pittsburgh PA 15213"
"John","Doe","3309 Ward St Pittsburgh PA 15213"
"John","Doe","3310 Ward St Pittsburgh PA 15213"
"John","Doe","3311 Ward St Pittsburgh PA 15213"
"John","Doe","3312 Ward St Pittsburgh PA 15213"
"John","Doe","3313 Ward St Pittsburgh PA 15213"
"John","Doe","3314 Ward St Pittsburgh PA 15213"
"John","Doe","3315 Ward St Pittsburgh PA 15213"
`.split('\n'));
    this.setState({ usedOnce: true });
  }

  render() {
    if (this.state.usedOnce) {
      return <button
        type="button"
        className="btn btn-info"
        onClick={() => {
          if (window.confirm('Reload? Data will be lost.')) {
            window.location.reload();
          }
        }}>
        Reload to Add More
        </button>;
    }
    return (
      <div>
        <p>"Upload stuff here"</p>
        <button type="button" className="btn btn-dark" onClick={this.exampleAdd}>Example Add List</button>
      </div>
    );
  }
}

export default InputCSV;
