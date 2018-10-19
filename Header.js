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
        <Text>Header</Text>
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
    backgroundColor: '#aaaebc',
    justifyContent: 'center'
  },
  text: {
      padding: 16
  }
});
