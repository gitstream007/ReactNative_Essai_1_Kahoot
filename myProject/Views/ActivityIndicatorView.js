import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class ActivityIndicatorView extends Component {
    state = { animating: true };
    closeActivityIndicator = () => setTimeout(() => this.setState({
        animating: false }), 3000);

    componentDidMount = () => this.closeActivityIndicator();
    render() {
        const animating = this.state.animating;
        return (
            <View style = {styles.container}>
                <ActivityIndicator
                    animating = {animating}
                    color = 'red'
                    size = "large"
                    style = {styles.activityIndicator}/>
            </View>
        )
    }
}
export default ActivityIndicatorView;

const styles = StyleSheet.create ({
    container: {
        flex: 0.25,
    },
    activityIndicator: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black",
    }
});