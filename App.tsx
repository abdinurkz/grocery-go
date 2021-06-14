import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import { StackNavigator } from './routes/StackNavigator';
import { configureStore } from './store/index';

const App = () => {
  return (
    <Provider store={configureStore()}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

