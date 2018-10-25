import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default class Task extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.item.text}</Text>
        <TouchableOpacity onPress={() =>this.props.delTask(this.props.item.key)}>
            <Ionicons name="ios-remove-circle" size={24} color="red" />
        </TouchableOpacity>
                
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: 16
    },
    text: {
        fontSize: 24
    }
  });