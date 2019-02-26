import React from "react";
import { Text, View, Animated, Easing } from "react-native";

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: "title"
    };

    constructor(props) {
        super(props);
        this.state = {
            content: "",
        };
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Text>ok</Text>
            </View>
        );
    }
}

const screenStyles = {
    progressText: {
        fontSize: 18,
        color: "#efefef",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20
    },
};
