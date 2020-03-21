/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countActions from './redux/actions/counts';

class App extends Component {
  decrementCount() {
    let { count, actions } = this.props;
    count--;
    actions.changeCount(count)
  }

  incrementCount() {
    let { count, actions } = this.props;
    count++;
    actions.changeCount(count)
  }

  render() {
    const { count } = this.props;
    return (
      <View styles={styles.container}>
        <Button title="increment" onPress={() => this.incrementCount()}/>
        <Text style={styles.textCenter}>{count}</Text>
        <Button title="decrement" onPress={() => this.decrementCount()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCenter: {
    fontSize: 50,
    fontWeight: '700',
    marginVertical: 10,
    textAlign: 'center'
  }
})

const mapStateToProps = state => ({
  count: state.count.count,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, countActions), dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)