import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Search from '../components/Search';
import NavTabs from '../components/NavTabs';
import { createAppContainer } from "react-navigation";
import useResults from '../hooks/useResults';
const Apps = createAppContainer(NavTabs);


const SearchHymn = ({ navigation }) => {

    let navigator = null;
    const [text, setText] = useState('');
    const [searchApiWithParameters, searchApiWithSubject, searchApiWithoutParameters, searchApiWithId, results, resultsSubject,errorMessage] = useResults();
  
    const search = (text) => {
        if (navigator.state.nav.index == 0) {
            searchApiWithParameters(text.trim());
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
    //   // console.log(newState.index)
    //     if (newState.index == 1) {
    //         if(!resultsSubject) {
    //             searchApiWithSubject('ക്രിസ്തൻ');    
    //         }            
    //         //results =  resultsSubject;
    //     }
    //     else {
    //         // results = resultsHymns;
    //     }

    };

    setRef = (ref) => {
        //resultsHymns = results;        
        navigator = ref;       
    }

    return (
        <View style={styles.container}>
            <Search text={text} onChange={setText} onHymnSubmit={() => search(text)} ></Search>
            <Apps ref={this.setRef} onNavigationStateChange={this.handleNavigationStateChange}
                screenProps={{ results: filterResultsByPrice(), resultsSubject: filterResultsSubject(), 
                                 navigation: navigation }}></Apps>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center"
    }
});

export default SearchHymn;
