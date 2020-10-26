import React from 'react';
import { Text, TouchableOpacity, Dimensions, Button, StyleSheet, View, TextInput } from 'react-native';
import axios from 'axios';

const CreateAccountApi = async (account) => {
    const { username, email, password } = account;
    return await axios.post(`http://192.168.0.45:5000/auth/signup`, { username, email, password })
        .catch(error => console.log(error.response))
}




export default function HomeScreen({ navigation }) {
    const win = Dimensions.get('window');
    const ratio = win.width / 541;
    const [username, onChangeUsername] = React.useState('jacob23');
    const [password, onChangePassword] = React.useState('Cocobean123!');
    const [email, onChangeEmail] = React.useState('jrnels40@gmail.com');

    const createAccount = async () => {
        const account = { username, email, password }
        const res = await CreateAccountApi(account);
        console.log(res.data)
        if (res.data.status === 201) {
            console.log('account created')
        }
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', borderWidth: 1, justifyContent: 'center' }}>
            <Text>Email</Text>
            <TextInput
                style={{ height: 40, width: win.width / 2, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeEmail(text)}
                value={email}
            />
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
                title="Create Account"
                onPress={() => createAccount()}
            />
        </View>
    );
}