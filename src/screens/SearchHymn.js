import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Search from '../components/Search';
import NavTabs from '../components/NavTabs';
import { createAppContainer } from "react-navigation";
import useResults from '../hooks/useResults';
const Apps = createAppContainer(NavTabs);


const SearchHymn = ({ navigation }) => {

    let navigator = null;
    const [text, setText] = useState('');
    const [searchMode, setsearchMode] = useState(1);
    const [state, setsstate] = useState(0);
    const [searchApiWithNumbers, searchApiWithParameters, searchApiWithSubject, searchApiWithoutParameters, searchApiWithId, results, resultsSubject, errorMessage] = useResults();

    const search = (text) => {
        if (navigator.state.nav.index == 0) {           
            if (searchMode == 0) {  
                searchApiWithParameters(text.trim());
            }
            else {
               
                searchApiWithNumbers(text.trim()); 
            }
        }
        else {
            searchApiWithSubject(text.trim());
        }

    };

    const filterResultsByPrice = () => {
        return results;
    };
    const filterResultsSubject = () => {
        return resultsSubject;
    };
    handleNavigationStateChange = (prevState, newState) => {
        setsstate(newState)
    };

    setRef = (ref) => {
        //resultsHymns = results;        
        navigator = ref;
    }
    const searchMode1 = (text) => {       
        setsearchMode(text)
    }
    return (
        <View style={styles.container}>
            <Search searchMode={(text) => searchMode1(text)} text={text} style={styles.search}
                onChange={setText} onHymnSubmit={() => search(text)} >

            </Search>
            <Apps ref={this.setRef} onNavigationStateChange={this.handleNavigationStateChange}
                screenProps={{
                    results: filterResultsByPrice(), resultsSubject: filterResultsSubject(),
                    navigation: navigation
                }}></Apps>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center"
    },
    keyboard: {
        paddingLeft: 50
    },
    search: {
        borderBottomColor: "#CED0CE"
    }

});

export default SearchHymn;
