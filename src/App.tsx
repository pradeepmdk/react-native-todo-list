/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import 'react-native-gesture-handler'
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store';
import Navigation from './Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = { 
    backgroundColor: '#fff',
    flex: 1,
  };

  console.log("sdfsf")

  return (
    <GestureHandlerRootView>
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
          {/* <Toast /> */}
        </PersistGate>
      </Provider>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
