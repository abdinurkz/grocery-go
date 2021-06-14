import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const Splash = ({ navigation }) => {
    return (
      <View style={styles.splash}>
        <Text 
            style={styles.title} 
            // onPress={() => navigation.navigate('Login')}
        >
          GROCERYGO
        </Text>
      </View>
    );
};

const styles = StyleSheet.create({
    splash: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FF6646',
    },
    title: {
      fontSize: 48,
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  
  export default Splash;