import React, { useEffect } from 'react';
import { Text, TouchableOpacity, Dimensions, Button, StyleSheet, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import BaseHttpService from '../services/base-http.service';
import EventsService from '../services/events.service';
import axios from 'axios';



const GetEventsApi = async (account) => {
    const token = await AsyncStorage.getItem('@access_token');
    return await axios.get(`http://192.168.0.45:5000/event`, {
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
    const [events, setEvents] = React.useState([]);
    const [myEvents, setMyevents] = React.useState('MyEvents');
    const service = new EventsService();

    const GetEvents = async () => {

        const res = await GetEventsApi();
        console.log(res.data)

        if (res.data.status === 200 && !res.data.length) {
            console.log('No events!');
            setMyevents('No events listed')
        }
        else if (res.data.status === 200 && res.data.length) {
            setEvents([...res.data])
            console.log(events)
        }
    }
    useEffect(() => {
        GetEvents()
    }, []);
    return (
        <View style={{ flex: 1, alignItems: 'center', borderWidth: 1, justifyContent: 'center' }}>
            <Text>{myEvents}</Text>
            <Button
                title="Create Event"
                onPress={() => navigation.navigate('CreateEvent')}
            />
        </View>
    );
}