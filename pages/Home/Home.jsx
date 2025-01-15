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

export default function Home() {
    // STATES
    const [coords, setCoords] = useState();

    // USE EFFECT
    // Récupérations des coordonnées
    useEffect(() => {
        getUserCoord();
    }, []);

    useEffect(() => {
        fetchWeather();
    }, [coords]);

    // Récupéraion des coordonnées GPS
    async function getUserCoord() {
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
                lng: '2,35',
            });
        }

        console.log('Permission :', status);
    }

    console.log('Location : ', coords);

    // Fetch de la météo
    async function fetchWeather(coordinates) {
        // fetch
        console.log('FETCH WEATHER');
    }

    return (
        <View style={styles.container}>
            <Meteo_basic />
            <View style={styles.searchbar}>
                <Text style={styles.text}>Search Bar</Text>
            </View>
            <View style={styles.meteo_advanced}>
                <Text style={styles.text}>Details</Text>
            </View>
        </View>
    );
}
