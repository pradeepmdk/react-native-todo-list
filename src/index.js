import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import { enableLegacyWebImplementation } from 'react-native-gesture-handler';
enableLegacyWebImplementation(true);



// Use prebuilt version of RNVI in dist folder
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

const AppWeb = () => {
  return (
    <GestureHandlerRootView>
      <App/>
    </GestureHandlerRootView>)
}

// Inject stylesheet
document.head.appendChild(style); 
AppRegistry.registerComponent('App', () => AppWeb);
AppRegistry.runApplication('App', {rootTag: document.getElementById('root')});