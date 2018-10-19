import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = { 
      task: [],
      text: ''
    }
  }

  saveTask = (task) => {
    console.log(task);
    this.setState({
      task: [...this.state.task,task],
      text: '',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header 
          addTask = {this.saveTask}
          data = {this.state.text}
        />
        
        <Body/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff00F'
  },
});
