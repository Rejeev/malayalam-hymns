import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListSubjects from './ListSubjects';

const SearchBySubject = (props) => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <ListSubjects navigation={props.screenProps.navigation} resultsSubject={props.screenProps.resultsSubject}></ListSubjects>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default SearchBySubject;
