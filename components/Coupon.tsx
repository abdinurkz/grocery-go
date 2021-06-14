import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Coupon = ({title, subtitle}) => {
  return (
    <View style={styles.store}>
      <View style={styles.storeImgView}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  store: {
    height: 150,
    width: 255,
    marginLeft: 20,
  },
  storeImgView: {
    flex: 1,
    backgroundColor: '#4584FF',
    borderRadius: 10,
    padding: 16,
  },
  title: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 50,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Coupon;
