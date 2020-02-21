import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';



const Search = ({ text, onChange, onHymnSubmit }) => {
    
    return (
        <View style={styles.containerNavbar}>          
            <TextInput 
                placeholder="Search" placeholderTextColor="#dddddd"
                placeholderTextColor="#dddddd"
                autoCapitalize="none"
                autoCorrect={false}
                style={{
                    backgroundColor: '#2f363c',
                    height: 50,
                    fontSize: 20,
                    padding: 10,
                    color: 'white',
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#7d90a0'
                }}   
                value={text}            
                onChangeText={onChange}
                onEndEditing={onHymnSubmit}
            />
           
        </View>
    );
};

const styles = StyleSheet.create({});

export default Search;
