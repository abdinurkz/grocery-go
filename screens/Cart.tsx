import React, { useEffect, useState } from 'react';
import {View, StyleSheet, ActivityIndicator, Text, SafeAreaView, FlatList} from 'react-native';
import { connect } from 'react-redux'
import { getUserCart } from '../store/actions'
import CartItem from './CartItem'
import LottieView from 'lottie-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Cart = ({ cart, getUserCart, navigation }) => {

  useEffect(() => {
    getUserCart()
  }, [getUserCart])


  const [data, setData] = useState(cart)
  const [state, setState] = useState({
    count: 0,
    price: 0
  })

  const onCountChange = (count) => {
    setState({
      ...state,
      count
    })
  }
  const onPriceChange = (price) => {
    setState({
      ...state,
      price
    })
  }
  const total = cart
                  .map(a => (!state.count ? a.quantity : state.count) * (!state.price ? a.product_id.price : state.price))
                  .reduce((a, b) => a + b, 0)

  const deleteItem = (index) => {
    const arr = [...cart];
    arr.splice(index, 1);
    setData(arr);
  };

  const renderItem = ({ item }) =>
      <CartItem
          price={item.product_id.price}
          name={item.product_id.name}
          quantity={item.quantity}
          image={item.product_id.image}
          key={item._id}
          onChange={onCountChange}
          onPriceChange={onPriceChange}
          handleDelete={() => deleteItem(item._id)}
      />;

  console.log(cart)

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#fff' }}>
      <Text style={styles.cart}>
        Корзина
      </Text>


      {
        cart.length ? (
            <React.Fragment>
              <FlatList
                  style={{ padding: 20 }}
                  data={cart}
                  renderItem={renderItem}
                  keyExtractor={item => item._id}
                  ItemSeparatorComponent={() => {
                    return <View style={styles.separatorLine}/>;
                  }}
              />


              <View style={styles.total}>
                <Text style={styles.totalText}>
                  Общая сумма:
                </Text>
                <Text style={styles.totalPrice}>
                  ₸ { total }
                </Text>
              </View>

              <View style={{ marginTop: 20, marginRight: 20, marginLeft: 20, marginBottom: 20 }}>
                <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 3 }}>
                  <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>
                    Оплатить
                  </Text>
                </TouchableOpacity>
              </View>
            </React.Fragment>

        ) : (
            <React.Fragment>

              <View style={{
                flex: 1,
                backgroundColor: '#fff',
                // alignItems: 'center',
                justifyContent: 'center'
              }}>
                <LottieView
                    style={{
                      width: 390,
                      // marginTop: -50
                    }}
                    source={require('../empty.json')}
                    autoPlay
                    loop
                />
                <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 10, textAlign: 'center' }}>Ваша корзина пустая</Text>

                <Text style={{ fontSize: 13, fontWeight: '600', marginBottom: 30, textAlign: 'center' }}>Сканируйте товар чтобы заполнить корзину</Text>
                <TouchableOpacity style={{ backgroundColor: '#FD5B5D', marginHorizontal: 10, padding: 15, borderRadius: 5 }} onPress={() => navigation.navigate('QR')}>
                  <Text style={{ fontSize: 15, fontWeight: '600', color: '#fff', textAlign: 'center' }}>Начать покупку</Text>
                </TouchableOpacity>
              </View>
            </React.Fragment>
        )
      }

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 20
  },
  cart: {
    fontSize: 20,
    paddingLeft: 20,
    marginBottom: 10,
    fontWeight: '700',
    borderBottomWidth: 1,
    borderColor: '#000'
  },
  scroll: {
    marginTop: 20,
  },
  total: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    display: 'flex',
    marginTop: 15,
    marginRight: 20,
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalText: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10
  },
  totalPrice: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: '600'
  },
  separatorLine: {
    height: 1,
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: 'black',
  },
});

const mapStateToProps = (store) => ({
  cart: store.Cart.cart,
  loading: store.Cart.loading
})

export default connect(mapStateToProps, {
  getUserCart
})(Cart);
