import { createBottomTabNavigator } from 'react-navigation';
import GameTab from './Views/WelcomePage';
import LogoutTab from './Views/LogoutView';

const NavLoggedIn = createBottomTabNavigator({
    GameTab: {
        screen: GameTab
    },
    LogoutTab: {
        screen: LogoutTab
    }
});

export default NavLoggedIn;
