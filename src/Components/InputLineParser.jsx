import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HaveHeadersCheckbox from './ilp/HaveHeadersCheckbox';
import NameFields from './ilp/NameFields';
import PickFields from './ilp/PickFields';
import EscapeHelpToolTip from './ilp/EscapeHelpToolTip';


class InputLineParser extends Component {
  static propTypes = {
    addressLines: PropTypes.arrayOf(PropTypes.string).isRequired,
    setAddresses: PropTypes.func.isRequired,
    setDelimiter: PropTypes.func.isRequired,
    delimiter: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    var fieldNames = [];
    var numberOfFieldNames = (this.props.addressLines[0] || '')
      .split(this.props.delimiter).length;
    for (var idx = 0; idx < numberOfFieldNames; idx++) {
      fieldNames.push('');
    }

    this.state = {
      useHeaders: false,
      fieldNames: fieldNames
    };

    this.done = this.done.bind(this);
  }

  render() {
    var fieldsMessage = "Pick fields to keep and use as address.";
    var FieldsComponent = PickFields;
    if (!this.state.useHeaders) {
      fieldsMessage = "Specify and name fields to include in output";
      FieldsComponent = NameFields;
    }

    return (
      <div className="card border-success mb-3">
        <div className="card-header bg-transparent border-success">Parse CSV Fields (ilp)</div>
        <div className="card-body text-success">
          <h5 className="card-title">CSV Import Options</h5>

          <form className="form-inline mt-2 mb-2">
            <div className="form-group">
              <label className="mr-2" htmlFor="exampleInputName2">Enter delimiter escape:</label>
              <input
                type="text"
                className="form-control"
                name="exampleInputName2"
                id="exampleInputName2"
                value={this.props.delimiter}
                onChange={(e) => {
                  var delimiterEscape = e.target.value;
                  try {
                    var delimiter = decodeURIComponent(delimiterEscape);
                    this.props.setDelimiter(delimiter);
                  } catch (error) {
                    this.props.setDelimiter(delimiterEscape);
                  }
                }}
                />
                {/*placeholder=","*/}
              <EscapeHelpToolTip />
            </div>
          </form>

          <HaveHeadersCheckbox
            value={this.state.useHeaders}
            setValue={() => this.setState({ useHeaders: !this.state.useHeaders })}
            />

          <p className="card-text">{fieldsMessage}</p>

          {this.props.addressLines && this.props.addressLines.length
            ? <FieldsComponent
                line={this.props.addressLines[0]}
                delimiter={this.props.delimiter}
                setField={(index, value) => { this.setState({ fieldNames: Object.assign(this.state.fieldNames, { [index]: value }) }) }}
                />
            : null}

          <button
            type="button"
            className="btn btn-success float-right"
            onClick={this.done}
            >
            Done
          </button>
        </div>
        {/*<div className="card-footer bg-transparent border-success">Footer</div>*/}
      </div>
    );
  }

  done() {
    var addressLines  =  this.props.addressLines;
    var delimiter     =  this.props.delimiter;
    var skipFirstLine = !this.state.useHeaders;
    var fieldNames    =  this.state.fieldNames;
    console.log(addressLines, skipFirstLine, delimiter, fieldNames);
  }
}

export default InputLineParser;
