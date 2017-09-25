import React from 'react';
import {Text} from 'react-vr';
import style from './style'

export default class Twtext extends React.Component {
    render() {
        return (
          <Text 
            style={style[this.props.type]}>
            {this.props.message}
          </Text>
        );
      }
    };