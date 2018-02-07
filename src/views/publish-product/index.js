
import React, { Component } from 'react';
import '../../style/publish-product.css';
import TopSteps from '../../components/publish-product/TopSteps';
import SelectProductCategory from '../../components/publish-product/select-product-category';
import WriteBaseInfo from '../../components/publish-product/write-base-info';
import TradeInfo from '../../components/publish-product/trade-info';
export default class PublishProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowCategory: '',
      productName: '',
      showContent: 'WriteBaseInfo'
    }
  }
  changeHandler(key, value) {
    this.setState({
      [key]: value
    });
    console.log(value,'productName');
  }
  handleSelectChange(selected) {
    this.setState({
      nowCategory: selected
    })
  }
  next(path) {
    this.setState({
      showContent: path
    });
  }
  pre(path) {
    this.setState({
      showContent: path
    });
  }
  _showContentFn(showContent) {
    switch (showContent) {
      case 'SelectProductCategory':
        return <SelectProductCategory onChange={this.handleSelectChange.bind(this)} onNext={this.next.bind(this,'WriteBaseInfo')} />
        break;
      case 'WriteBaseInfo':
        return <WriteBaseInfo onPre={this.pre.bind(this,'SelectProductCategory')} onNext={this.next.bind(this,'TradeInfo')} />
        break;
      case 'TradeInfo':
        return <TradeInfo onPre={this.pre.bind(this,'WriteBaseInfo')} onNext={this.next.bind(this,'TradeInfo')} />
        break;

      default:
      return <SelectProductCategory onChange={this.handleSelectChange.bind(this)} onNext={this.next.bind(this,'WriteBaseInfo')} />
    }
  }
  _stepCurrentFn(stepCurrent) {
    switch (stepCurrent) {
      case 'SelectProductCategory':
        return 0
        break;
      case 'WriteBaseInfo':
        return 1
        break;
      case 'TradeInfo':
        return 2
        break;
      // default:

    }
  }
  _reelectCategory() {
    this.setState({
      showContent: 'SelectProductCategory'
    });
  }
  render() {

    return (
      <div className='publish-product'>
        <TopSteps style={{marginTop: '30px',marginBottom: '30px'}} current={this._stepCurrentFn(this.state.showContent)} />
        <div className='result-now-category'>
          <p>{`您当前选择的分类是：${this.state.nowCategory}`} </p><span onClick={this._reelectCategory.bind(this)}>重选类目</span>
        </div>

        <div className='publish-product-body'>
          {this._showContentFn(this.state.showContent)}
        </div>
      </div>
    )
  }
}
