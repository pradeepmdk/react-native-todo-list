/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.useFakeTimers()
// jest.mock('react-native-gesture-handler', () => {
//     return {}
// })
// jest.mock('@react-navigation', () => {
//   return {
//       createAppContainer: jest.fn().mockReturnValue(function NavigationContainer(props: any) {return null;}),
//       createDrawerNavigator: jest.fn(),
//       createMaterialTopTabNavigator: jest.fn(),
//       createStackNavigator: jest.fn(),
//       StackActions: {
//           push: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/PUSH"})),
//           replace: jest.fn().mockImplementation(x => ({...x,  "type": "Navigation/REPLACE"})),
//       },
//       NavigationActions: {
//           navigate: jest.fn().mockImplementation(x => x),
//       }
//   }
// });

it('renders correctly', () => {
  renderer.create(<App />);
});
