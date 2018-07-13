import React, { Component } from 'react';
import BottomBtn from '../../bottom-btn';
import { PInput, PSelect } from '../../antd';

export default class TradeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      selected: '',
      list: ['价格1', '价格2', '价格3']
    }
  }
  changeHandler(value) {
    this.setState({
      price: value
    })
  }
  handlerSelectChange(value) {
    this.setState({
      selected: value
    })
  }
  render() {
    return (
      <div>
        <p style={{margin: '30px 0', textAlign: 'center', fontSize: '20px'}}>价格区间</p>

        <PInput type={`number`} onChange={this.changeHandler.bind(this, 'price')} addonBefore='价格' placeholder='输入产品价格（默认为：$）' />
        <PSelect onChange={this.handlerSelectChange.bind(this)} list={this.state.list} style={{width: '50%', marginTop: '20px'}} />
        <BottomBtn onPre={this.props.onPre} onNext={this.props.onNext} text={`提交`} />

      </div>
    )
  }
}
