import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import InputCSV from './Components/InputCSV';
import InputLineParser from './Components/InputLineParser';
import GeoCoder from './Components/GeoCoder';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addressLines: [],
      delimiter: ',',
      addresses: []
    };

    this.addAddressLines = this.addAddressLines.bind(this);
    this.setAddresses = this.setAddresses.bind(this);
    this.setDelimiter = this.setDelimiter.bind(this);
  }

  addAddressLines(addressLines) {
    console.log("Added", addressLines.length, "addresses.");
    this.setState({ addressLines });
  }

  setAddresses(addresses) {
    this.setState({ addresses });
  }

  setDelimiter(delimiter) { this.setState({ delimiter }); }

  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-12">
            <h1>CSV Geocoder</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <InputCSV
              add={this.addAddressLines}
            ></InputCSV>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <InputLineParser
              addressLines={this.state.addressLines}
              setAddresses={this.setAddresses}
              setDelimiter={this.setDelimiter}
              delimiter={this.state.delimiter}
              />
          </div>
          <div className="col-md-6">
            <GeoCoder
              rows={this.state.addresses}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
