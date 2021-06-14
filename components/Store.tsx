import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Store = ({text, subtitle, image}) => {
  return (
    <View style={styles.store}>
      <View style={styles.storeImg}>
        <View style={styles.storeImgView}>
        <Image source={{ uri: `${image}` }} resizeMode={'center'}  style={styles.store_image}/>
          {/* <Text style={styles.subtitle}>{subtitle}</Text> */}
        </View>
      </View>
      <View style={styles.storeView}>
        <Text style={styles.storeText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  store: {
    height: 180,
    width: 160,
    marginLeft: 20,
  },
  storeImg: {
    flex: 2,
  },
  storeImgView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  store_image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  storeView: {
    flex: 1,
    paddingTop: 10,
  },
  storeText: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Store;
