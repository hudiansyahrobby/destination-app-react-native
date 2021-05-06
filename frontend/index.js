import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
export { default } from './storybook';

AppRegistry.registerComponent(appName, () => App);
