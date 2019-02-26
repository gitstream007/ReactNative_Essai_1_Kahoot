import React, { Component } from 'react';
import {View, Button, StyleSheet, Text, ActivityIndicator} from 'react-native';
import ConstantsColorsCodes from "../ConstantsColorsCodes";

export default class IncorrectAnswerScreen extends Component {
    static navigationOptions = {
        title: 'IncorrectAnswerScreen'
    };
    constructor(props) {
        super(props);
        this.state = {
            showIndicator: true,
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({showIndicator: false}), 4000);
    }

    render() {
        const { navigation } = this.props;
        const tempScore2 = navigation.getParam('tempScore');
        return (
            <View style={styles.base}>
                <Text style={styles.itemName}>La réponse est incorrecte !</Text>
                <Text>Votre score temporaire est de :{JSON.stringify(tempScore2)}</Text>
                <Text style={styles.itemName}>Attente d'une nouvelle question </Text>
                <ActivityIndicator
                    size="small"
                    animating={this.state.showIndicator}
                    style={this.state.showIndicator ? null : {height: 0}}/>
                {this.state.showIndicator ? null : this.props.navigation.navigate('QuestionScreen')
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ConstantsColorsCodes.INCORRECT_RED,
    },
    itemName: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
});
//QuestionScreen.isTimeToReturnToQuestionView ? true : this.props.navigation.navigate('QuestionScreen');
