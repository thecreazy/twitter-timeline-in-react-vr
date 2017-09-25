import React from 'react';
import {AppRegistry, asset, Pano,View,Text,Image} from 'react-vr';
import CylindricalPanel from 'CylindricalPanel'

import Twtext from './components/Twtext/'
import Twtweet from './components/Twtweet/'

import twitterTimeline from './mocks/timeline.json'


export default class TwitterVR extends React.Component {
  makeBoxes(timeline){
    return boxes = timeline.map((el,index)=>{
      return (<Twtweet 
                  key={index}
                  tweet={el}
              >
              </Twtweet>
             ) 
    })
  }
  render() {
    const _width = 4096
    const _height = 720
    let boxes = this.makeBoxes(twitterTimeline)
    return (
      <View>
        <Pano source={asset('wallpaper.jpg')} />
          <CylindricalPanel layer={{
            width:_width,
            height: _height
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
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

AppRegistry.registerComponent('TwitterVR', () => TwitterVR);