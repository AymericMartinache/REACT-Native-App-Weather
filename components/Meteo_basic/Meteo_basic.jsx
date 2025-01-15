// REACT NATIVE
import { Text, View } from 'react-native';

// STYLES
import { styles } from './Meteo_basic.style';

export default function Meteo_basic({ temp }) {
    return (
        <>
            <View style={styles.container}>
                <Text>{temp} °C</Text>
            </View>
        </>
    );
}
