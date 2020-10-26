import React from 'react';
import { Text, TouchableOpacity, Dimensions, Button, StyleSheet, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

const SignInApi = async (account) => {
    const { username, password } = account;
    return await axios.post(`http://192.168.0.45:5000/auth/signin`, { username, password })
        .then(res => {
            storeData('@access_token', res.data.accessToken)
            return res;
        })
        .catch(error => console.log(error.response))
}

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem('@access_token', value)
    } catch (e) {
        // saving error
    }
}


export default function SignInScreen({ navigation }) {
    const win = Dimensions.get('window');
    const ratio = win.width / 541;
    const [username, onChangeUsername] = React.useState('jacob23');
    const [password, onChangePassword] = React.useState('Cocobean123!');

    const signAccount = async () => {
        const account = { username, password }
        const res = await SignInApi(account);
        console.log(res.data)
        if (res.data.status === 201) {
            console.log('signed in')
        }
        navigation.navigate('MyEvents')
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', borderWidth: 1, justifyContent: 'center' }}>
            <Text>Username</Text>
            <TextInput
                style={{ height: 40, width: win.width / 2, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeUsername(text)}
                value={username}
            />
            <Text>Password</Text>
            <TextInput
                secureTextEntry={true}
                style={{ height: 40, width: win.width / 2, borderColor: 'gray', borderWidth: 1, marginBottom: 5 }}
                onChangeText={text => onChangePassword(text)}
                value={password}
            />
            <Button
                title="Sign In"
                onPress={() => signAccount()}
            />
        </View>
    );
}