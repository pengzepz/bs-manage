import React, { Component } from 'react';
import LzEditor from 'react-lz-editor';

export default class PEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownContent: ''
    }
  }
  receiveMarkdown() {

  }
  render() {
    return (
        <LzEditor
          {...this.props}
          active={true}
          importContent={this.state.markdownContent}
          cbReceiver={this.receiveMarkdown}
          image={false}
          video={false}
          audio={false}
        convertFormat="markdown"/>
    )
  }
}
