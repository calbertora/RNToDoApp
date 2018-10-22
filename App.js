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

  saveTask = () => {
    this.setState({
      tasks: [...this.state.tasks,{key:Date.now().toString(), text: this.state.text}],
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
        <Body
          data = {this.state.tasks}
        />
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
