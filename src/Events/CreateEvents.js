import React, { useEffect } from 'react';
import { Text, TouchableOpacity, Dimensions, Button, StyleSheet, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import BaseHttpService from '../services/base-http.service';
import EventsService from '../services/events.service';
import axios from 'axios';



const CreateEventsApi = async (event) => {
    const { title, description, location } = event;
    const token = await AsyncStorage.getItem('@access_token');
    return await axios.post(`http://192.168.0.45:5000/event`, {
        title, description, location, registration: 'OPEN'
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then(res => {
        console.log(res)
        return res;
    }).catch(error => console.log(error))
}

export default function SignInScreen({ navigation }) {
    const win = Dimensions.get('window');
    const ratio = win.width / 541;
    const [title, onTitle] = React.useState('Sonoran 100');
    const [description, onDescription] = React.useState('A race in the Sonoran desert');
    const [location, onLocation] = React.useState('Tucson, AZ');
    // const [myEvents, setMyevents] = React.useState('MyEvents');
    const service = new EventsService();

    const CreateEvent = async () => {
        const event = { title, description, location };
        const res = await CreateEventsApi(event);
        console.log(res.data)

        if (res.data.status === 200 && !res.data.length) {
            console.log('No events!');
            setMyevents('No events listed')
        }
        else if (res.data.status === 200 && res.data.length) {
            // setEvents([...res.data])
            console.log(events);
            navigation.navigate('MyEvents')
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', borderWidth: 1, justifyContent: 'center' }}>
            <Text>Title</Text>
            <TextInput
                style={{ height: 40, width: win.width / 2, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onTitle(text)}
                value={title}
            />
            <Text>Description</Text>
            <TextInput
                style={{ height: 40, width: win.width / 2, borderColor: 'gray', borderWidth: 1, marginBottom: 5 }}
                onChangeText={text => onDescription(text)}
                value={description}
            />
            <Text>Location</Text>
            <TextInput
                style={{ height: 40, width: win.width / 2, borderColor: 'gray', borderWidth: 1, marginBottom: 5 }}
                onChangeText={text => onLocation(text)}
                value={location}
            />
            <Button
                title="Create"
                onPress={() => CreateEvent()}
            />
        </View>
    );
}