// import React from "react";

// class Text extends React.Component {

// }

import { Component } from 'react';

import './Text.css';

// const Name = 'Text';

class TextBlock extends Component {

    render () {
      const { text } = this.props;

      // const Name = 'Text';
      return <div className='text'>{text}</div>
      // return <div className='text'>{Name} {text}</div>
    }
}

export default TextBlock;