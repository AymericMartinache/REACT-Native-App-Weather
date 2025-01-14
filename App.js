// EXPO
import { StatusBar } from 'expo-status-bar';
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
} from 'expo-location';

// REACT NATIVE
import { ImageBackground, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// STYLES
import { styles } from './App.style';

// ASSETS
import background from './assets/img/background-app.png';

// COMPONENTS
import Home from './pages/Home/Home';
import { useEffect, useState } from 'react';

export default function App() {
    // STATES
    const [coords, setCoords] = useState();

    // USE EFFECT
    useEffect(() => {
        getUserCoord();
    }, []);

    // Récupéraion des coordonnées GPS
    async function getUserCoord() {
        let { status } = await requestForegroundPermissionsAsync();
        if (status === 'granted') {
            const location = await getCurrentPositionAsync();
            setCoords({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            });
        } else {
            setCoords({
                lat: '48.8555555',
                lng: '2,35',
            });
        }
        console.log('Permission :', status);
    }
    console.log('Location : ', coords);

    return (
        <ImageBackground
            source={background}
            style={styles.background_img}
            imageStyle={styles.img}
        >
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                    <StatusBar style="dark" />
                    <Home />
                </SafeAreaView>
            </SafeAreaProvider>
        </ImageBackground>
    );
}
