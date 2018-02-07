import React, { Component } from 'react';
import { PButton } from '../antd';


export default class BottomBtn extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'space-between',margin: '50px 0'}}>
        <PButton text={`pre`} onClick={this.props.onPre} style={{width: '20%'}} />
        <PButton text={ this.props.text || `next`} onClick={this.props.onNext}  style={{width: '20%'}} />
      </div>
    )
  }
}
