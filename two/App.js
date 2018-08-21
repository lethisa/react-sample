import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import DsPlatform from './src/ds_platform/ds_platform';
import AnimOne from './src/animations/animation_one';
import AnimTwo from './src/animations/animation_two';
import Articles from './src/articles'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <DsPlatform/> */}

        {/* <AnimOne/> */}
        {/* <AnimTwo/> */}

        <Articles/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
