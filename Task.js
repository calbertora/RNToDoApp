import React, { Component } from 'react'
import { Text, View, StyleSheet, Icons } from 'react-native'

export default class Task extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.item.text}</Text>
        {/*<Ionicons
            name="md-thrash"
            size={24}
            color="gray"
        />*/}
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 24
    }
  });