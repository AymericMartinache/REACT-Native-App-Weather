// REACT NATIVE
import { ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// STYLES
import { styles } from './Container.style';

// ASSETS
import background from '../../assets/img/background-app.png';

export function Container({ children }) {
    return (
        <ImageBackground
            source={background}
            style={styles.background_img}
            imageStyle={styles.img}
        >
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>{children}</SafeAreaView>
            </SafeAreaProvider>
        </ImageBackground>
    );
}
