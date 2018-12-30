import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './Weather';

export default class App extends Component {
  state = {
    isLoaded: true
  }
  render() {
    const {isLoaded} = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? <Weather/> : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather</Text>
            </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: 10 
  },
  loadingText: {
    fontSize: 30,
    marginBottom: 100
  }
});
