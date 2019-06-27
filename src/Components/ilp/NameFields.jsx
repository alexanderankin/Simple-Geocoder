import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameFields extends Component {
  static propTypes = {
    line: PropTypes.string,
    delimiter: PropTypes.string,
    setField: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      fields: []
    };
  }
  /*      <ul>
          {this.props.line.split(this.props.delimiter).map((field, idx) => {
            return <li key={idx}>
              {field}
            </li>;
          })}
        </ul>
  */

  render() {
    return (
      <div>
        <p>NameFields</p>
        {/*<pre>{JSON.stringify(this.props, null, 2)}</pre>*/}
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: '10%' }}>Use</th>
              <th style={{ width: '45%' }}>Value</th>
              <th style={{ width: '45%' }}>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.line.split(this.props.delimiter).map((field, idx) => {
              return <tr key={idx}>
                <td>
                  <input
                    type="checkbox"
                    checked={false}
                    onChange={() => {}}
                    />
                </td>
                <td>{field}</td>
                <td>
                  {/*<input className="btn btn-secondary btn-lg|sm" type="button" value="Input" />*/}
                  <input
                    tabIndex={idx + 10}
                    type="text"
                    className="form-control"
                    placeholder={field}
                    value={this.state.fields[idx] || ''}
                    onChange={(e) => {
                      var value = e.target.value;
                      var newFields = Object.assign(this.state.fields, { [idx]: value });
                      this.setState({ fields: newFields });
                      this.props.setField(idx, value);
                    }}
                    />
                </td>
              </tr>
            })}
          </tbody>
        </table>
        <p>Output:</p>
        <ul>
          {this.state.fields.map((field, idx) => {
            return <li key={idx}>
              {field}
            </li>;
          })}
        </ul>
        <p>Properties:</p>
        <ul>
          {this.props.line.split(this.props.delimiter).map((field, idx) => {
            return <li key={idx}>
              {field}
            </li>;
          })}
        </ul>
      </div>
    );
  }
}

export default NameFields;
