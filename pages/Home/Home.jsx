// REACT NATIVE
import { Text, View } from 'react-native';

// EXPO
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
} from 'expo-location';

// STYLES
import { styles } from './Home.style';

// COMPONENTS
import Meteo_basic from '../../components/Meteo_basic/Meteo_basic';

// REACT
import { useEffect, useState } from 'react';
import { MeteoAPI } from '../../api/meteo';

export default function Home() {
    // STATES
    const [coords, setCoords] = useState();
    const [weather, setWeather] = useState();

    // USE EFFECT
    // Récupérations des coordonnées
    useEffect(() => {
        getUserCoords();
    }, []);

    // Récupération des données
    useEffect(() => {
        if (coords) {
            fetchWeather(coords);
        }
    }, [coords]);

    // FUNCTIONS
    // Récupéraion des coordonnées GPS
    async function getUserCoords() {
        let { status } = await requestForegroundPermissionsAsync();

        // On vérifie que l'utilisateur accèpte la géoloc
        if (status === 'granted') {
            const location = await getCurrentPositionAsync();
            setCoords({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            });

            // Sinon on ajoute des valeurs par defaut
        } else {
            setCoords({
                lat: '48.8555555',
                lng: '2.35',
            });
        }

        // console.log('Permission :', status);
    }
    // console.log('Location : ', coords);

    // Fetch de la météo
    async function fetchWeather(coordinates) {
        console.log('FETCH WEATHER');
        const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(
            coordinates
        );
        setWeather(weatherResponse);
    }
    // console.log('Weather : ', weather);

    const temp = weather?.current_weather?.temperature;
    // console.log('TEMP : ', temp);

    return (
        <View style={styles.container}>
            <Meteo_basic temp={temp ? temp : '-'} />
            <View style={styles.searchbar}>
                <Text style={styles.text}>Search Bar</Text>
            </View>
            <View style={styles.meteo_advanced}>
                <Text style={styles.text}>Details</Text>
            </View>
        </View>
    );
}
