/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: '欢迎来到安卓世界,\n' +
    '多姿多彩',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          安卓
        </Text>
        <Text style={styles.instructions}>
          blue RN开发起步
        </Text>
        <Text style={styles.instructions}>
          {instructions}
          <Text style={styles.inline}>
            这是行内式的样式
          </Text>  
        </Text>
        <Text>
          开始了，起步
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inline:{
    color:'#f33',
    fontSize:20,
    fontWeight:'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
