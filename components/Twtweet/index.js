import React from 'react';
import {View, Text} from 'react-vr';
import Twimage from '../Twimage/'
import Twtext from '../Twtext/'
import style from './style'


export default class Twtweet extends React.Component {
    render() {
        let props = this.props.tweet
        return (
            <View style={style.default}>
               <Twimage source={{uri: props.user.profile_image_url_https }} />
               <Twtext type={'top'} message={'@'+props.user.screen_name} />
               <Twtext type={'bottom'} message={props.text} />
            </View>
        );
      }
    };


