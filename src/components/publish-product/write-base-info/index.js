import React, { Component } from 'react';
import { PInput, PSelect, PButton, PUploadImg } from '../../antd';
import PEditor from '../../editor';
import BottomBtn from '../../bottom-btn';
import '../../../style/write-base-info.css';
// import sampleImg from '../../../assets/images/loading_img.png';
class TextAndSelect extends Component {
  static defaultProps = {
    list: [1,2,3]
  }
  selectedHandler(value) {
    this.props.onChange(value);
  }
  render() {
    return (
      <div style={{width: '50%', marginTop: '20px', display: 'flex', alignItems: 'center'}}>
        <span style={{width: '90px'}}>{`${this.props.title}：`}</span>
        <PSelect list={this.props.list} onChange={this.selectedHandler.bind(this)} style={{width: '100%'}} />
      </div>
    )
  }
}

class UploadImg extends Component {
  render() {
    return (
      <div className='upload-img-wrapper'>

        <div className='upload-img-header'>
          <p className='title'>产品图片上传</p>
          <p className='description'>单张不超过5M，支持jpeg, jpg, png</p>
          <p className='description'>建议图片大于640 * 640</p>
        </div>
        <PUploadImg />
        {/* <div className='btn-upload-img-wrapper'>
          <span className='btn-upload-img'>上传图片</span>
          </div>

          <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '50px'}}>
          <img src={sampleImg} style={{width: '200px', height: '200px'}} alt='' />
          <img src={sampleImg} style={{width: '200px', height: '200px'}} alt='' />
          <img src={sampleImg} style={{width: '200px', height: '200px'}} alt='' />
          <img src={sampleImg} style={{width: '200px', height: '200px'}} alt='' />
        </div> */}
      </div>
    )
  }
}



export default class WriteBaseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      productGroup: '',
      productMaterial: '',
      productCategory: '',
      list: ['分组一', '分组二', '分组三', '分组四']
    }
  }
  changeHandler(key,value) {
    this.setState({
      [key]: value
    });
    console.log(`${key} = ${value}`);
  }
  render() {
    return (
      <div className='write-base-info'>
        <PInput onChange={this.changeHandler.bind(this,'productName')} addonBefore='产品名称' placeholder='输入产品名称' />

        <TextAndSelect title={`产品分组`} list={this.state.list} onChange={this.changeHandler.bind(this,'productGroup')} />
        <PInput onChange={this.changeHandler.bind(this,'productName')} addonBefore='型号' placeholder='输入产品型号' />
        <PInput onChange={this.changeHandler.bind(this,'productName')} addonBefore='品牌' placeholder='输入产品品牌' />
        <PInput onChange={this.changeHandler.bind(this,'productName')} addonBefore='产地' placeholder='输入产品产地' />
        <TextAndSelect title={`材质`} list={this.state.list} onChange={this.changeHandler.bind(this,'productMaterial')} />
        <TextAndSelect title={`种类`} list={this.state.list} onChange={this.changeHandler.bind(this,'productCategory')} />
        <hr className='boundary' />
        <UploadImg />
        <div style={{marginTop: '100px'}}>
          <PEditor image={false} video={false} audio={false} urls={false} fullScreen={false} />
        </div>

        <BottomBtn onPre={this.props.onPre} onNext={this.props.onNext} />
      </div>
    )
  }
}
