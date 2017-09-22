import React from 'react';
import {Text} from 'react-vr';

export default class Twtext extends React.Component {
    render() {
        return (
          <Text 
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0, -5]}],
            }}>
            {this.props.message}
          </Text>
        );
      }
    };