import React from 'react';
import {View, StyleSheet, ScrollView, Text, SafeAreaView} from 'react-native';
import LottieView from 'lottie-react-native';


const Account = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.cart}>
        Профиль
      </Text>
      <View style={styles.view}>
        <Text>
          kuatbekabdinur@gmail.com
        </Text>
      </View>
      <LottieView
          source={require('../yoga.json')}
          autoPlay
          loop
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 20,
  },
  cart: {
    fontSize: 20,
    paddingLeft: 20,
    fontWeight: '700',
  },
});

export default Account;
