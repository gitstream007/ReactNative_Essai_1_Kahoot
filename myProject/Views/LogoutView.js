import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { whenLogout } from '../API/AuthenticationClass';

export default class LogoutView extends Component {
    constructor(props) {
        super(props);
        this.whenLogout = this.whenLogout.bind(this);
    }

    async whenLogout() {
        await whenLogout();
        this.props.navigation.navigate('LoginScreen');
    }

    render() {
        return (
            <View style={styles.base}>
                <Button
                    title='Logout'
                    onPress={this.whenLogout} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
