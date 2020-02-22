import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import ListHymn from './ListHymn';
import { withNavigation } from 'react-navigation';
import _ from 'lodash';
import useResults from '../hooks/useResults';

const styles = StyleSheet.create({
    list: {     
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    }
});

const ListHymns = ({results, navigation}) => {
     
    return (
        <View
            style={{
                paddingVertical: 20,
                borderTopWidth: 1,               
                borderColor: "#CED0CE"
            }}
        >
            <FlatList
                key="flatlist"
                data={results}
                style={styles.list}               
                renderItem={({ item }) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {                          
                          navigation.navigate('ResultsShow', { id: item.number })
                        }
                        }
                      >
                        <ListHymn event={item} />
                      </TouchableOpacity>
                    );
                  }}
                keyExtractor={result => result.number}
            />
        </View>
    );
}
export default ListHymns;