import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import Hymn from './Hymn';
import { withNavigation } from 'react-navigation';
import _ from 'lodash';
import useResults from '../hooks/useResults';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    },
});

const Hymns = ({results, navigation}) => {
   
    return (
        <View
            style={{
                paddingVertical: 20,
                borderTopWidth: 1,
                height: 1000,
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
                            console.log(item.number);
                          navigation.navigate('ResultsShow', { id: item.number })
                        }
                        }
                      >
                        <Hymn event={item} />
                      </TouchableOpacity>
                    );
                  }}
                keyExtractor={result => result.number}
            />
        </View>
    );
}
export default Hymns;