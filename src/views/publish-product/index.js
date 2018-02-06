
import React, { Component } from 'react';
import TopSteps from '../../components/publish-product/TopSteps';
import '../../style/publish-product.css';
import { PInput } from '../../components/antd';
export default class PublishProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepCurrent: 0,
      nowCategory: 'default',
      productName: ''
    }
  }
  changeHandler(key, value) {
    this.setState({
      [key]: value
    });
    console.log(value,'productName');
  }
  render() {
    return (
      <div className='publish-product'>
        <TopSteps style={{marginTop: '30px',marginBottom: '30px'}} current={this.state.stepCurrent} />
        <div className='result-now-category'>
          <p>{`您当前选择的分类是：${this.state.nowCategory}`} </p><span>重选类目</span>
        </div>
        <div className='publish-product-body'>
          <PInput onChange={this.changeHandler.bind(this,'productName')} addonBefore='产品名称' placeholder='输入产品名称' />
        </div>
      </div>
    )
  }
}
