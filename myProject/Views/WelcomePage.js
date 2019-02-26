import React, { Component } from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {NavController} from "../NavController";

export default class WelcomePage extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            showIndicator: true,
            loggedIn: false,
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({showIndicator: false}), 3000);
    }

    render() {
        return(
        <View style={styles.base}>
            <Text>Bienvenue !</Text>
            <Text>Merci d'attendre le début de la partie ...</Text>

            <ActivityIndicator
                size="small"
                animating={this.state.showIndicator}
                style={this.state.showIndicator ? null : {height: 0}}/>
                      {this.state.showIndicator ? null : this.props.navigation.navigate('QuestionScreen') }
        </View>
            );
        const RootNavigator = NavController(this.state.loggedIn);
        return <RootNavigator />
    }
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
