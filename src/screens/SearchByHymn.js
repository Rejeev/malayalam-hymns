import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListHymns from './ListHymns';

const SearchByHymn = (props) => {
  return (
    <View>
       <ListHymns navigation={props.screenProps.navigation} results={props.screenProps.results}></ListHymns>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchByHymn;
