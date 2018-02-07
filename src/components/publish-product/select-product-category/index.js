import React, { Component } from 'react';
import { PSelect, PButton } from '../../antd';
import '../../../style/select-product-category.css';
export default class SelectProductCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['one','two', 'three'],
      selected: ''
    }
  }
  changeHandler(selected) {
    this.setState({
      selected
    });
    this.props.onChange(selected);
  }

  render() {
    return (
      <div className='select-product-category'>
        <PSelect style={{width: '80%'}} list={this.state.list} onChange={this.changeHandler.bind(this)} />
        <PButton text={`确定`} onClick={this.props.onNext} />
      </div>
    )
  }
}
