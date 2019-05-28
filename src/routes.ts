import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

const drawerNavigator = createDrawerNavigator({
  LoginScreen,
  ProfileScreen,
});

export default createAppContainer(drawerNavigator);
