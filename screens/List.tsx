import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import ToDo from '../components/ToDo';

const list = [
  {
    id: 1,
    checked: false,
    name: 'Bread',
  },
  {
    id: 2,
    checked: true,
    name: 'Eggs',
  },
  {
    id: 3,
    checked: false,
    name: 'Yogurt',
  },
  {
    id: 4,
    checked: true,
    name: 'Milk',
  },
  {
    id: 5,
    checked: false,
    name: 'Cheese',
  },
  {
    id: 6,
    checked: false,
    name: 'Butter',
  },
  {
    id: 7,
    checked: true,
    name: 'Vegetable oil',
  },
  {
    id: 8,
    checked: false,
    name: 'Chicken',
  },
];

const List = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.title}>
        <Text style={styles.cart}>
          Продуктовый список
        </Text>
        <TouchableOpacity>
          <Text style={styles.addListBtn}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.view}>
          <ToDo list={list} />
          <ToDo list={list} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  title: {
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    paddingBottom: 10
  },
  addListBtn: {
    fontSize: 25,
    color: 'blue'
  },
  cart: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default List;
