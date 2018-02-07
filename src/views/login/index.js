/**
 * @flow
 *
 */
import React, { Component } from 'react';
import '../../style/login.css';
import { PIconInput, PButton, pnotification } from '../../components/antd';
import { browserHistory } from 'react-router';
export default class Login extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: ''
    }
  }
  inputHandler(key,value) {
    this.setState({
      [key]: value
    })
  }
  clickHandler() {
    console.log(this.state,'state');
    pnotification({
      desc: '登陆成功!'
    })
    setTimeout(() => {
      browserHistory.push('/pmt/control-panel');
    }, 1000);
  }
  render() {
    return (
      <div className='login'>
        <div className='login-window'>
          <p className='login-title'>PMT ADMIN</p>
          <PIconInput icon='user' placeholder='输入账号' type="text" maxLength={12} onChange={this.inputHandler.bind(this, 'account')} />
          <PIconInput icon='lock' placeholder='输入密码' type='password' maxLength={6} onChange={this.inputHandler.bind(this, 'password')} />
          <PButton text='登陆' style={{bottom: '20%'}} onClick={this.clickHandler.bind(this)}/>
        </div>
      </div>
    )

  }
}
