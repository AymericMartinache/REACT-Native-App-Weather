// REACT NATIVE
import { Text, View } from 'react-native';

// STYLES
import { styles } from './Home.style';

// COMPONENTS
import Meteo_basic from '../../components/Meteo_basic/Meteo_basic';

export default function Home() {
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
