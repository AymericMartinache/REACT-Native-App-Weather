// EXPO
import { StatusBar } from 'expo-status-bar';

// REACT NATIVE
import { ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// STYLES
import { styles } from './App.style';

// EXPO FONTS
import { useFonts } from 'expo-font';
import AlataRegular from './assets/fonts/Alata-Regular.ttf';

// ASSETS
import background from './assets/img/background-app.png';

// COMPONENTS
import Home from './pages/Home/Home';

export default function App() {
    // FONTS
    const [isFontLoaded] = useFonts({
        'Alata-Regular': AlataRegular,
    });

    console.log('Font loaded : ', isFontLoaded);

    return (
        <ImageBackground
            source={background}
            style={styles.background_img}
            imageStyle={styles.img}
        >
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                    <StatusBar style="light" />
                    {isFontLoaded ? <Home /> : null}
                </SafeAreaView>
            </SafeAreaProvider>
        </ImageBackground>
    );
}
