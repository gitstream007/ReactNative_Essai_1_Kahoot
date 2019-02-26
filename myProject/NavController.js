import { createSwitchNavigator } from 'react-navigation';
import NavLoggedOut from './NavLoggedOut';
import NavLoggedIn from './NavLoggedIn';
import QuestionScreen from "./Views/QuestionScreen";
import IncorrectAnswerScreen from "./Views/IncorrectAnswerScreen";
import CorrectAnswerScreen from "./Views/CorrectAnswerScreen";

export const NavController = (isLoggedIn = false) => createSwitchNavigator(
    {
        LoggedOut: {
            screen: NavLoggedOut
        },
        LoggedIn: {
            screen: NavLoggedIn
        },
        QuestionScreen: {
            screen: QuestionScreen
        },
        IncorrectAnswerScreen: {
            screen: IncorrectAnswerScreen
        },
        CorrectAnswerScreen: {
            screen: CorrectAnswerScreen
        },
    },
    {
        initialRouteName: isLoggedIn ? 'LoggedIn' : 'LoggedOut'
    }
);
