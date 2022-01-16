import React, {useEffect, useState} from "react";
import * as Location from 'expo-location';
import axios from "axios";

import {StatusBar} from 'expo-status-bar';
import { StyleSheet, View, Alert } from 'react-native';
import Loader from './components/Loader';
import Weather from "./components/Weather";


export default function App() {

    const API_KEY = "07b3b6ca7d773fcd1a5042028c60f664";

    const [loading, setLoading] = useState(true);
    const [weatherData, setWeatherData] = useState([]);

    const getWeather = async (latitude, longitude) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
        await setWeatherData(response.data);
        await setLoading(false);
    }

    const getLocation = async () => {
        try {
            await Location.requestForegroundPermissionsAsync();
            const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000});
            getWeather(latitude, longitude);
        } catch (error) {
            Alert.alert('Не могу определить местоположение', 'Проверьте включена ли геолокация');
        }
    }

    useEffect(() => {
        getLocation();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            { loading ? <Loader/> : <Weather weatherData={weatherData}/>}
            {/*<Loader/>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
