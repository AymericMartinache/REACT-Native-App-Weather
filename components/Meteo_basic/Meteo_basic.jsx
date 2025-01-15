// REACT NATIVE
import { Image, Text, View } from 'react-native';

// STYLES
import { styles } from './Meteo_basic.style';
import Txt from '../Txt/Txt';

export default function Meteo_basic({ temp }) {
    return (
        <>
            <View style={styles.clock}>
                <Txt>Clock</Txt>
            </View>

            <Txt>City</Txt>

            <Txt style={styles.weather_label}>Label</Txt>

            <View style={styles.temp_container}>
                <Txt style={styles.temp}>{temp}°</Txt>
                <Image style={styles.image} />
            </View>
        </>
    );
}
