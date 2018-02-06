
import React, { Component } from 'react';
import { PMenu } from '../antd';
import '../../style/panel-left-menu.css';
import { browserHistory } from 'react-router';
export default class Menu extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      nowRoute: ''
    }
  }
  componentWillMount() {
    let nowRoute = browserHistory.getCurrentLocation().pathname.split('/').pop();
    this.setState({
      nowRoute
    })
  }
  selectHandler(value) {
    console.log(`fa= ${value}`);
    browserHistory.push(`/pmt/${value}`);
    this.setState({
      selected: value
    })
  }
  render() {
    return (
      <div className='menu-wrapper'>
        <PMenu onSelect={this.selectHandler.bind(this)} defaultSelectedKeys={[this.state.nowRoute]} defaultOpenKeys={[this.state.nowRoute]} />
        <div className='right-children'>
          {this.props.children}
        </div>
      </div>
    )

  }
}
