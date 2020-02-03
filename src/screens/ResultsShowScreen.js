import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import useResults from '../hooks/useResults';
import Hymn from './Hymn';
import _ from 'lodash';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
   const id = navigation.getParam('id');
    
   const searchApiWithId = async searchTerm => {
    try {
        console.log(searchTerm); 
      const events = require('../hooks/db.json').events;        
      const data = _.filter(events, event => {
        return event.number === searchTerm
      })     
      setResult(data);
    } 
    catch (err) {
      //setErrorMessage('Something went wrong');
    }
  }
  useEffect(() => {    
    searchApiWithId(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={{
        paddingVertical: 20,
        borderTopWidth: 1,
        height: 1000,
        borderColor: "#CED0CE"
    }}>
      <Text>{result.number}</Text>
      <FlatList
        data={result}
        style={styles.list}
        keyExtractor={result => result.number}
        renderItem={({ item }) => {
            return  <Hymn  event={item} />
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  },
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F3F3F3'
}
});

export default ResultsShowScreen;
