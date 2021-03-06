import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Header extends React.Component {
  constructor(){
    super();
    this.state = { 
      task: []
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
            placeholder="Task to add.."
            style={styles.text}
            onChangeText={this.props.addText}
            onSubmitEditing={this.props.addTask}
            value = {this.props.data}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#52b7bd',
    justifyContent: 'center'
  },
  text: {
      padding: 16,
      fontSize: 24
  }
});
