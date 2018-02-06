import React, { Component } from 'react';
import { PSteps } from '../../antd';

export default class TopSteps extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <PSteps />
      </div>
    )
  }
}
