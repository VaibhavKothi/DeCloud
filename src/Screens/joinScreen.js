import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  ScrollView,
  Keyboard,
  Text,
  TextInput,
  Alert,
  TouchableWithoutFeedback,} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class joinScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
    channelName : '' };
  }

  static navigationOptions = {
    title: 'DeCloud',
    headerStyle: {
      backgroundColor: '#212121',
    },
    headerTintColor: '#efefef',
  };

  navigateToChat = (navigation) => {
    navigation.navigate("Chat");
  }

  render() {
  const { navigation } = this.props;
   return (
     <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.full}>
        <View style={styles.input}>
          <Text style={{color: '#000000',
            fontSize: 25,
            padding: 4,
            marginBottom: 35,
            textAlign: 'center'}}>Welcome to DeCloud</Text>
          <View style={styles.username}>
            <Text style={{color: '#212121', fontSize: 15, padding: 4,}}>Username</Text>
            <TextInput  style={styles.textBox}
              placeholder="eg. Tony Stark"
              onChangeText={name => this.setState({ name })}
              value = {this.state.name}/>
          </View>
          <View style={styles.channel}>
            <Text style={{color: '#212121', fontSize: 15, padding: 4,}}>Channel Name</Text>
            <TextInput style={styles.textBox}
              placeholder="eg. Fun Talk"
              onChangeText={channelName => this.setState({ channelName })}
              value = {this.state.channelName}/>
          </View>
          <Button color='#000000'
            title="Join Network"
            onPress={() => this.props.navigation.navigate('Chat', {
            name: this.state.name,
            channelName: this.state.channelName,  
            })
          }/>
        </View>
      </View>
    </TouchableWithoutFeedback>
    );
  }

}
const styles = StyleSheet.create({
  full: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 100,
    width: 400,
    backgroundColor: '#212121',
  },
  textBox: {
    height: 50,
    width: 300,
    paddingLeft: 10,
    fontSize: 20,
    color: '#7a7a7a',
    backgroundColor: '#efefef',
    borderWidth: 4,
    borderColor: '#000000',
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#000000',
    padding: 40,
    paddingLeft: 25,
    paddingRight: 25,
  },
  username: {
    height: 80,
    paddingBottom: 100,
  },
  channel: {
    height: 80,
    paddingBottom: 125,
  }
});
