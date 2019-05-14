/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import ReactotronConfig from './ReactotronConfig';

AppRegistry.registerComponent(appName, () => {
  ReactotronConfig.start('192.168.25.5');
  return App;
});
