// REACT NATIVE
import { Text, View } from 'react-native';

// STYLES
import { styles } from './Home.style';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.meteo_basic}>
                <Text style={styles.text}>METEO</Text>
            </View>
            <View style={styles.searchbar}>
                <Text style={styles.text}>Search Bar</Text>
            </View>
            <View style={styles.meteo_advanced}>
                <Text style={styles.text}>Details</Text>
            </View>
        </View>
    );
}
