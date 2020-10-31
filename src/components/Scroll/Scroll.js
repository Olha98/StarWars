import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class CustomScrollbars extends Component {
  render() {
    return (
      <Scrollbars
        renderThumbHorizontal={props => <div {...props} className="thumb-horizontal" />}
        renderThumbVertical={props => <div {...props} className="thumb-vertical" />}
        {...this.props}
      />
    );
  }
}

export default CustomScrollbars;
