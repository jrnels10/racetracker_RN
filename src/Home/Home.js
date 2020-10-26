import React from 'react';
import { Text, TouchableOpacity, Button, StyleSheet, View, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome to RaceTrackr</Text>
            <Button
                title="Sign In"
                onPress={() => navigation.navigate('SignIn')}
            />
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    );
}