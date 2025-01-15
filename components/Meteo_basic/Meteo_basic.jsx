// REACT NATIVE
import { Text, View } from 'react-native';

// STYLES
import { styles } from './Meteo_basic.style';
import Txt from '../Txt/Txt';

export default function Meteo_basic({ temp }) {
    return (
        <>
            <View style={styles.container}>
                <Txt style={{ fontSize: 50 }}>{temp} °C</Txt>
            </View>
        </>
    );
}
