/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import News from './src/news'

AppRegistry.registerComponent(appName, () => News);
