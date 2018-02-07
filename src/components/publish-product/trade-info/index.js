import React, { Component } from 'react';
import BottomBtn from '../../bottom-btn';


export default class TradeInfo extends Component {
  render() {
    return (
      <div>
        trade info
        <BottomBtn onPre={this.props.onPre} onNext={this.props.onNext} text={`提交`} />

      </div>
    )
  }
}
