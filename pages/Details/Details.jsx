// REACT NATIVE
import { View } from 'react-native';

// EXPO

// STYLES
import { styles } from './Details.style';

// COMPONENTS
import Txt from '../../components/Txt/Txt';

// REACT

// SERVICES

export default function Details() {
    return currentWeather ? (
        <View style={styles.container}>
            <Txt>Details</Txt>
        </View>
    ) : null;
}
