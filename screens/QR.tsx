import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const QR = ({ navigation }) => {


  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff' }}>
      <Text style={styles.title}>GROCERYGO</Text>
      <Ionicons style={styles.qr} name="qr-code-outline" size={250} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Scan')}>
        <Text style={styles.btnText}>Сканировать</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FF6645',
    textAlign: 'center'
  },
  qr: {
    marginTop: 30,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#FD5B5D',
    marginHorizontal: 10,
    marginTop: 20,
    padding: 15,
    borderRadius: 5
  },
  btnText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center'
  },
});
export default QR;
