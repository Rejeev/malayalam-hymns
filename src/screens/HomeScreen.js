import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  
  return (
    <View>
      <Text style={styles.text}>Malayalam Hymns!</Text>      
       <Button style={styles.button}
        title="Search Malayalam Hymns"
        onPress={() => navigation.navigate('Tabs')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    marginTop: 100        
  }
});

export default HomeScreen;
