import * as React from 'react';
import Cart from './Cart';
import Discover from './Discover'
import QR from './QR';
import List from './List';
import Account from './Account';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Discover') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'ios-cart' : 'ios-cart-outline';
          } else if (route.name === 'QR') {
            iconName = focused ? 'qr-code' : 'qr-code-outline';
          } else if (route.name === 'List') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="QR" component={QR} />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default Home;
