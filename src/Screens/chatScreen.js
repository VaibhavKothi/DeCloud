import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class chatScreen extends React.Component {
  static navigationOptions = {
    title : 'Chat',
    headerStyle: {
      backgroundColor: '#212121',
    },
    headerTintColor: '#efefef',
  };
  render(){
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'Guest');
    const channelName = navigation.getParam('channelName', 'Chat');
    return (
      <View style={styles.full}>
        <Text style={styles.channel}>{JSON.stringify(channelName)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: 'flex-start',
    height: 100,
    width: 400,
    backgroundColor: '#212121',
  },
  channel: {
    textAlign: 'left',
    color: '#efefef',
    fontSize: 25,
    padding: 10,
    backgroundColor: '#000000',
  }
});
