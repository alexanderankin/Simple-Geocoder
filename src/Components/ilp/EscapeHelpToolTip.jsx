import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactTooltip from 'react-tooltip';
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EscapeHelpToolTip extends Component {
  // static propTypes = {
  //   className: PropTypes.string,
  // };

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    // https://github.com/wwayne/react-tooltip#2-hide-tooltip-when-getcontent-returns-undefined
    return (
      <div>
        {/*<p ref={ref => this.myRef = ref} data-tip='tooltip'></p>*/}
        <ReactTooltip
          id="escape-help-rtt"
          place="top"
          type="info"
          effect="solid"
          />
          {/*<button type="button" class="btn btn-link">Link</button>*/}

        <button
          type="button"
          className="btn btn-link"
          onClick={(e) => e.preventDefault()}>
          <FontAwesomeIcon
            data-tip='Use html escapes (tab is %09)' data-for="escape-help-rtt"
            className="ml-2"
            icon={faQuestion}
            />
        </button>
      </div>
    );
  }
}

export default EscapeHelpToolTip;
