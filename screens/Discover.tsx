import * as React from 'react';
import {View, ScrollView, StyleSheet, Text, SafeAreaView} from 'react-native';
import Store from '../components/Store';
import Coupon from '../components/Coupon';
import ToDo from '../components/ToDo';
import { getStores } from '../store/actions'
import { connect } from 'react-redux'
import { host } from '../api/config'

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

const Discover = ({ getStores, stores }) => {

  React.useEffect(() => {
    getStores()
  }, [getStores])


  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.view}>
          <Text style={styles.cart}>
            Супермаркеты
          </Text>
          <View style={styles.stores}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {
                stores && stores.map(store => (
                    <Store text={`${store.name} Store`} image={host + store.image} key={store._id}/>
                ))
              }
            </ScrollView>
          </View>
          <Text style={styles.coupons}>
            Акции и купоны
          </Text>
          <View style={styles.stores}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Coupon
                  title="GROCERYGO"
                  subtitle="Get 20% SALE for first purchase"
              />
              <Coupon title="John’s Store" subtitle="10% Off for November" />
              <Coupon title="Amazon" subtitle="10% Off for November" />
              <Coupon title="Express" subtitle="10% Off for November" />
            </ScrollView>
          </View>
          <Text style={styles.coupons}>
            Последние покупки
          </Text>
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
  stores: {
    height: 180,
    marginTop: 20,
    backgroundColor: '#eee'
  },
  coupons: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 20
  },
  cart: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 20
  }
});

const mapStateToProps = (store) => ({
  stores: store.Store.stores
})

export default connect(mapStateToProps, {
  getStores
})(Discover);
