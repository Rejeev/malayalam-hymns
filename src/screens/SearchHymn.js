import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Search from '../components/Search';
import NavTabs from '../components/NavTabs';
import { createAppContainer } from "react-navigation";
import useResults from '../hooks/useResults';
const Apps = createAppContainer(NavTabs);

const SearchHymn = ({navigation}) => {

    const [text, setText] = useState('');
    const [searchApiWithParameters, searchApiWithoutParameters, searchApiWithId, results, errorMessage] = useResults();

    const filterResultsByPrice = () => {             
        return results; 
      };

    return (
        <View style={styles.container}>
            <Search text={text} onChange={setText} onHymnSubmit={() => searchApiWithParameters(text)} ></Search>
            <Apps screenProps={{ results: filterResultsByPrice(), navigation: navigation }}></Apps>
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
