import React from 'react';
import {
    Text,
    View,
    StyleSheet, Image
} from 'react-native';
import PropTypes from 'prop-types';




const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 20,
        margin: 10,
        marginTop: 5,
        marginBottom: 5
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
    },
    Stanza: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: '5%'
    },
    date: {
        fontWeight: '200',
        fontSize: 15,
        color: '#bdbdbd',
        width: '30%',
        textAlign: 'right',
    },
    title: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left',
    },
    counterContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '5%'
    },
    counter: {
        width: '25%',
        flex: 1,
    },
    counterText: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left',
    },
    counterLabel: {
        fontSize: 13,
        fontWeight: '100',
        color: '#a3a3a3',
        textAlign: 'center',
        paddingTop: 0,
    },
});


export default function ListHymn({ event }) {

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}} />
                <Text style={styles.title}>{event.listName}</Text>
            </View>
        </View>
    );
}

ListHymn.propTypes = {
    event: PropTypes.shape({
        number: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired,
        listName: PropTypes.string.isRequired,
        Stanza1: PropTypes.string.isRequired,
        chorus: PropTypes.string.isRequired,
        Stanzas: PropTypes.array.isRequired
    }),
};