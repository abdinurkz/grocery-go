import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({text}) => <Text style={styles.viewTitle}>{text}</Text>;

const styles = StyleSheet.create({
  viewTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 50,
    // paddingLeft: 20,
  },
});

export default Title;
