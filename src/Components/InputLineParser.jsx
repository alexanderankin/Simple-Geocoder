import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HaveHeadersCheckbox from './ilp/HaveHeadersCheckbox';
import NameFields from './ilp/NameFields';
import PickFields from './ilp/PickFields';


class InputLineParser extends Component {
  static propTypes = {
    addressLines: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      useHeaders: true,
      delimiterEscape: ','
    };
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
        <div className="card-header bg-transparent border-success">Parse CSV Fields</div>
        <div className="card-body text-success">
          <h5 className="card-title">Success card title</h5>

          <HaveHeadersCheckbox
            value={this.state.useHeaders}
            setValue={() => this.setState({ useHeaders: !this.state.useHeaders })}
            />

          <p className="card-text">{fieldsMessage}</p>

          {this.props.addressLines && this.props.addressLines.length
            ? <FieldsComponent
                line={this.props.addressLines[0]}
                delimiter={this.state.delimiterEscape}
                />
            : null}

        </div>
        {/*<div className="card-footer bg-transparent border-success">Footer</div>*/}
      </div>
    );
  }
}

export default InputLineParser;
