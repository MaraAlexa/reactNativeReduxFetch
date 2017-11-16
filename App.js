/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableHighlight,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { connect } from 'react-redux'
import { fetchPeopleFromAPI } from './actions'

let styles

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText,
    alignLeft,
  } = styles

  const { people, isFetching } = props.people;
  console.log('people:', props.people)

  return (
    <View style={container}>
      <Text>React Native Redux Fetching Data</Text>
      <TouchableHighlight style={button} onPress={() => props.getPeople()}>
        <Text style={buttonText}>Load People</Text>
      </TouchableHighlight>
      {
        isFetching && <Text>Loading</Text>
      }
      {
        people.length ? (
          people.map((person, i) => {
            return <View key={i}>
              <Text>Name: {person.name}</Text>
              <Text>Birth Year: {person.birth_year}</Text>
            </View>
          })
        ) : null
      }
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  button: {
    backgroundColor: '#0b7eff',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonText: {
    color: 'white',
  },
})

// connect the app with the state and actions
function mapStateToProps(state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPeople: () => dispatch(fetchPeopleFromAPI())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
