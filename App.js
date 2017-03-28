import React from 'react';
import { StyleSheet, Text, View, AlertIOS, TouchableHighlight, Image } from 'react-native';
export default class App extends React.Component {
  state = {
      imageFailed: false
    }
  render() {
    const URI = 'https://d.github.io/react/img/logo_og.png'
    console.log("Hello")
    return (
    <View style ={{backgroundColor:'powderblue', paddingTop:50, flex:1}}>
      <Text>Image placeholder</Text>
     <Image
          style={{width: 50, height: 50}}
          source={{uri: !this.state.imageFailed?URI:'https://facebook.github.io/react/img/logo_og.png' }}
          onError={() => { console.log("Img load error")
          this.setState({imageFailed: true})}}
        />
    </View>
    );
  }
}
