import { AsyncStorage } from 'react-native';
import TokenService from '@around25/jwt-utils';

const Token = new TokenService({
    storageSystem: AsyncStorage
});

const whenLogin = (credentials) => {
    const myToken = credentials.token;
    return Token.store(myToken);
};

const isLoggedIn = async () => {
    const token = await Token.get();
    return !!token;
};

const whenLogout = () => {
    return Token.remove();
};

export { whenLogin, isLoggedIn, whenLogout };


