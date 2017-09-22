import React from 'react';
import {AppRegistry, asset, Pano,View,Text,Image} from 'react-vr';
import CylindricalPanel from 'CylindricalPanel'

import Twtext from './components/Twtext/'
import Twtweet from './components/Twtweet/'

import twitterTimeline from './mocks/timeline.json'


export default class WelcomeToVR extends React.Component {
  render() {
    const _width = 4096
    const _height = 720
    let boxes = twitterTimeline.map((el,index)=>{
      return (<Twtweet 
                  key={index}
                  tweet={el}
              >
              </Twtweet>
             ) 
    })
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
          <CylindricalPanel layer={{
            width:_width,
            height: _height
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 1,
              width:_width,
              height: _height
            }}
          >
            {boxes}
          </View>
        </CylindricalPanel>
      </View>
    )
  }
}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);