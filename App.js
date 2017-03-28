import React from 'react';
import { StyleSheet, Text, View, AlertIOS, TouchableHighlight, Image } from 'react-native';
export default class App extends React.Component {
  state = {
      imageFailed: false
    }
  render() {
    console.log("Hello")
    return (
    <View style ={{backgroundColor:'powderblue', paddingTop:50, flex:1}}>
      <Text>Image placeholder</Text>
      {!this.state.imageFailed?<Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://d.github.io/react/img/logo_og.png'}}
          onError={() => this.setState({imageFailed: true})}
        />:<Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          onError={() => this.setState({imageFailed: true})}
        />}
    </View>
    );
  }
}
