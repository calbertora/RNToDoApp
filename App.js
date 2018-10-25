import React from 'react';
import { StyleSheet, View, AsyncStorage, Button } from 'react-native';
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

  deleteTask = (taskID) =>{
    const tasksTMP = this.state.tasks.filter((task) =>{
      return task.key !== taskID;
    });

    this.setState({
      tasks: tasksTMP
    });
  }

  saveLocaly = () => {
    AsyncStorage.setItem('@AppCli:task',JSON.stringify(this.state.tasks))
      .then((value) => console.log(value))
      .catch((error) => console.log(error));
  }
  
  getLocaly = () => {
    AsyncStorage.getItem('@AppCli:task')
      .then((value) => this.setState({
        tasks: JSON.parse(value)
      }))
      .catch((error) => console.log(error));
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
          delTask = {this.deleteTask}
        />
        <Button
          title = "Save"
          onPress = {() =>{  this.saveLocaly(); } }
        />
        <Button
          title = "Get data"
          onPress = {() =>{  this.getLocaly(); } }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff00F'
  }
});
