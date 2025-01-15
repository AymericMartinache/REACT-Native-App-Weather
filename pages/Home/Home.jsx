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
import Meteo_advanced from '../../components/Meteo_advanced/Meteo_advanced';

// REACT
import { useEffect, useState } from 'react';
import { MeteoAPI } from '../../api/meteo';

// SERVICES
import { getWeatherInterpretation } from '../../services/meteo-service';

export default function Home() {
    // STATES
    const [coords, setCoords] = useState();
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();

    // USE EFFECT
    // Récupérations des coordonnées
    useEffect(() => {
        getUserCoords();
    }, []);

    // Récupération des données
    useEffect(() => {
        if (coords) {
            fetchCity(coords);
            fetchWeather(coords);
        }
    }, [coords]);

    const currentWeather = weather?.current_weather;

    // Récupéraion des coordonnées GPS
    async function getUserCoords() {
        console.log('GET PERMISSIONS');

        let { status } = await requestForegroundPermissionsAsync();

        // On vérifie que l'utilisateur accèpte la géoloc
        if (status === 'granted') {
            const location = await getCurrentPositionAsync();
            setCoords({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            });

            console.log('Permission => ', status);
            // Sinon on ajoute des valeurs par defaut
        } else {
            setCoords({
                lat: '48.8555555',
                lng: '2.35',
            });
        }
    }

    // Fetch de la météo
    async function fetchWeather(coordinates) {
        console.log('FETCH WEATHER');
        const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(
            coordinates
        );
        setWeather(weatherResponse);
    }

    // Fetch de la ville
    async function fetchCity(coordinates) {
        console.log('FETCH CITY');
        const cityResponse = await MeteoAPI.fetchCityFromCoords(coordinates);
        setCity(cityResponse);
    }

    return currentWeather ? (
        <View style={styles.container}>
            <Meteo_basic
                temp={Math.round(currentWeather?.temperature)}
                city={city}
                interpretation={getWeatherInterpretation(
                    currentWeather.weathercode
                )}
                style={styles.basic}
            />

            <View style={styles.searchbar}>
                <Text style={styles.text}>Search Bar</Text>
            </View>

            <View style={styles.meteo_advanced}>
                <Meteo_advanced
                    wind={currentWeather.windspeed}
                    dusk={weather.daily.sunrise[0].split('T')[1]}
                    down={weather.daily.sunset[0].split('T')[1]}
                />
            </View>
        </View>
    ) : null;
}
