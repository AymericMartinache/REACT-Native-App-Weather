// EXPO
import { StatusBar } from 'expo-status-bar';

// REACT NATIVE
import { ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// STYLES
import { styles } from './App.style';

// ASSETS
import background from './assets/img/background-app.png';

// COMPONENTS
import Home from './pages/Home/Home';

export default function App() {
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
