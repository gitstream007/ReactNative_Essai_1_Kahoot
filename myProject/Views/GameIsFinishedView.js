import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default class GameIsFinishedView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.base}>
                <Text style={styles.itemText}>Game Is Over </Text>
                <Text style={styles.itemText}>Your final score :</Text>
            </View>
        );
    }

    componentWillMount() {
        // check
        const {finalScore} = this.props.navigation.state.finalScore;
    }
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    itemText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
});
