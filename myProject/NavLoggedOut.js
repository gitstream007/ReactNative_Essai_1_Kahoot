import { createStackNavigator } from 'react-navigation';
import LoginScreen from './Views/LoginView';

const NavLoggedOut = createStackNavigator({
    LoginScreen: { screen: LoginScreen }
});

export default NavLoggedOut;
