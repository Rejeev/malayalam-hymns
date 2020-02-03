import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Hymns from './Hymns';

const SearchByHymn = (props) => {
  return (
    <View>
      <Hymns navigation={props.screenProps.navigation} results={props.screenProps.results}></Hymns>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchByHymn;
