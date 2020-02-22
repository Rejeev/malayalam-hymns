import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';



const Search = ({  searchMode, text, onChange, onHymnSubmit }) => {
    const [keyboard, setkeyboard] = useState('phone-pad');
    const [searchPlaceHolderText, setsearchPlaceHolderText] = useState('Enter Hymn No.');
   
    likeImage = () => {       
        if (keyboard == 'default') {
            setkeyboard('phone-pad')
            searchMode(1)
            setsearchPlaceHolderText('Enter Hymn No.')          
        }
        else {
            setkeyboard('default')
            searchMode(0)
            setsearchPlaceHolderText('Enter Search Text')
        }
    }
   
    return (
        <View style={styles.container}>
            <View style={styles.inputWrap}>
                <TextInput keyboardType={keyboard}
                    placeholder={searchPlaceHolderText} placeholderTextColor="#dddddd"
                    placeholderTextColor="#dddddd"
                    autoCapitalize="none"
                    ref={ref => this.textInput = ref}
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
            <View style={styles.inputWrap}>
                <TouchableOpacity>
                    <Button onPress={likeImage} style={styles.button} title="KEYBOARD"></Button>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    button: {
        backgroundColor: "#CED0CE"
    },
    inputWrap: {
        flex: 1
    },
});

export default Search;
