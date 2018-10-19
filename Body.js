import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Body extends React.Component {
  constructor(){
    super();
    this.state = { 
      task: []
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Body</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#b5ccc8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
