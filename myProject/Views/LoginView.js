import React, { Component } from 'react'
import {View, Button, StyleSheet, TextInput} from 'react-native';
import ConstantsColorsCodes from "../ConstantsColorsCodes";
import APIService from "../API/APIService";

export default class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            username: '',
            password: '',
            data: []
        };
        this.whenLogin = this.whenLogin.bind(this);
    }

    async whenLogin() {
        //console.log(this.state.username);
        //console.log(this.state.password);
        //await whenLogin();
        APIService.FetchFunction()
          .then(response => {
              this.setState({
                  isLoading: false,
                  data: response.data});
              return Promise.resolve()
          })
            .catch(error => console.log(error));

        //APIService.FetchFunction(this.state.username, this.state.password);
        console.log(this.state.username);
        this.props.navigation.navigate('GameTab',{actualUsername: this.state.username});
    }
    render() {
        return (
            <View style={styles.base}>
                <TextInput
                    style={styles.input}
                    placeholder='pseudo'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={(value) => this.setState({username: value})}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={(value) => this.setState({password: value})}
                />
                <Button
                    title='Login'
                    onPress={this.whenLogin}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        alignItems: 'center',
        height: 55,
        margin: 10,
        padding: 15,
        color: 'white',
        borderRadius: 14,
        borderColor: '#42A5F5',
        borderWidth: 5,
        backgroundColor: ConstantsColorsCodes.CORRECT_GREEN
    }
});
