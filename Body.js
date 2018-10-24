import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Task from './Task';

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
        <FlatList
          data={this.props.data}
          renderItem = { ({item}) => <Task item={item}/> }  
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#eed484',
    alignItems: 'center',
    justifyContent: 'center',
  },
});