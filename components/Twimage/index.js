import React from 'react';
import {Image} from 'react-vr';
import style from './style'

export default class Twimage extends React.Component {
    render() {
        return (
          <Image 
            style={style.default} 
            source={this.props.source}
           />
        );
      }
    };