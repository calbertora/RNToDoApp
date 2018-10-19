import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = { 
      tasks: [],
      text: ''
    }
  }

  addText = (text) => {
    this.setState({
      text: text
    })
  }

  saveTask = (task) => {
    console.log(task);
    this.setState({
      tasks: [...this.state.tasks,task],
      text: '',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header 
          addTask = {this.saveTask}
          data = {this.state.text}
          addText = {this.addText}
        />
        <Text>{this.state.text}</Text>
        {/*<Text>{this.state.tasks}</Text>*/}
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
