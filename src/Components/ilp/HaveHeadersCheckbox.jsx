import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HaveHeadersCheckbox extends Component {
  static propTypes = {
    value: PropTypes.bool,
    setValue: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      checked: props.value
    };

    this.changeUseHeaders = this.changeUseHeaders.bind(this);
  }

  changeUseHeaders(e) {
    this.props.setValue(!this.state.checked);
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <form>
        <div className="form-group row">
          {/*<label className="col-sm-2">Use Headers</label>*/}
          <div className="col-sm-12">
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={this.state.checked}
                  onChange={this.changeUseHeaders}
                  />
                  Use Headers
              </label>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default HaveHeadersCheckbox;
