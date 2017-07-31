import { AppRegistry, UIManager } from 'react-native';
import app from './elements/app';

UIManager.setLayoutAnimationEnabledExperimental
&& UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent('powerpiapp', () => app);
