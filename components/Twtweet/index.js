import React from 'react';
import {View, Text, Image} from 'react-vr';

export default class Twtweet extends React.Component {
    render() {
        let props = this.props.tweet
        return (
            <View style={{ margin: 16, width: 600, height:75, backgroundColor: '#CF3C7E'}}>
               <Image source={{uri: props.user.profile_image_url_https }} />
               <Text style={{fontSize: 14, textAlign: 'center'}}>@{props.user.screen_name}</Text>
               <Text style={{fontSize: 14, textAlign: 'center'}}>@{props.text}</Text>
            </View>
        );
      }
    };


