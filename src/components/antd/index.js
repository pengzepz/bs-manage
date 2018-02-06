
import React, { Component } from 'react';
import { Input, Icon, Button, notification, Menu, Steps, Select } from 'antd';

import '../../style/antd.css';

class PIconInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  changeHandler(event) {
    let vaule = event.target.value;
    this.setState({
      vaule
    })
    this.props.onChange(vaule);
  }
  render() {
    return (
      <div className='icon-input-wrapper'>
        <Input
          {...this.props}
          prefix={<Icon type={this.props.icon} style={{color: 'rgba(0,0,0,.25)'}} />}
          value={this.state.vaule}
          onChange={this.changeHandler.bind(this)}
          ref={node => this.PInput = node}
          style={this.props.style || {}}
        />
      </div>
    );
  }
}

class PInput extends Component {
  static defaultProps = {
    onChange() {
      console.log('父组件没有提供onChange');
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  changeHandler(event) {
    let vaule = event.target.value;
    this.setState({
      vaule
    });
    this.props.onChange(vaule);
  }
  render() {
    return (
      <div className='input-wrapper'>
        <Input
          {...this.props}
          onChange={this.changeHandler.bind(this)}
        />
      </div>
    )
  }
}




class PButton extends Component {
  static defaultProps = {
    onClick() {
      console.log(`父组件没有传递onClick`);
    }
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='button-wrapper' style={this.props.style || {}}>
        <Button type="primary" className='button' onClick={this.props.onClick}>{this.props.text}</Button>
      </div>
    )
  }
}

function pnotification(props) {
  notification.open({
    message: `${props.title || '提示'}`,
    description: `${props.desc}`,
    icon: <Icon type={props.icon || "smile-circle"} style={{ color: '#108ee9' }} />,
  });
}

class PMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    }
  }
  toggleCollapsed = () => {
     this.setState({
       collapsed: !this.state.collapsed,
     });
   }
   selectHandler({ item, key, selectedKeys }) {
     this.props.onSelect(key);
   }
   componentWillMount() {
     console.log(this.props.defaultSelectedKeys,'defaultSelectedKeys');
   }
  render() {
    const SubMenu = Menu.SubMenu;
    return (
      <div className='menu-wrap'>

        <Menu
          {...this.props}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          style={{height: '100%'}}
          onSelect={this.selectHandler.bind(this)}
        >
          <Menu.Item key=""></Menu.Item>

          <Menu.Item key="control-panel">
            <Icon type="pie-chart" />
            <span>首页</span>
          </Menu.Item>
          <SubMenu key="publish-product" title={<span><Icon type="mail" /><span>发布产品</span></span>}>
            <Menu.Item key="publish-product">发布产品</Menu.Item>
          </SubMenu>
          <SubMenu key="manage-product" title={<span><Icon type="mail" /><span>管理产品</span></span>}>
            <Menu.Item key="manage-product">管理产品</Menu.Item>
          </SubMenu>
          {/* <SubMenu key="sub3" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
          </SubMenu> */}
        </Menu>
        </div>
    )
  }
}

class PSteps extends Component {
  static defaultProps = {
    s1: {
      title: '选择语言市场及类目',
      description: ''
    },
    s2: {
      title: '填写产品信息',
      description: ''
    },
    s3: {
      title: '进入审核',
      description: ''
    },
    current: 0
  }
  render() {
    const Step = Steps.Step;
    return (
      <div className='steps-wrapper' style={this.props.style}>
        <Steps progressDot current={this.props.current}>
          <Step title={this.props.s1.title} description={this.props.s1.description} />
          <Step title={this.props.s2.title} description={this.props.s2.description} />
          <Step title={this.props.s3.title} description={this.props.s3.description} />
        </Steps>
      </div>
    )
  }
}
export {
  PIconInput,
  PInput,
  PButton,
  pnotification,
  PMenu,
  PSteps
}
