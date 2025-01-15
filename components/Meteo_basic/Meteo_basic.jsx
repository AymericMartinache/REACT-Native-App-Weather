// REACT NATIVE
import { Image, View } from 'react-native';

// STYLES
import { styles } from './Meteo_basic.style';

// COMPONENTS
import Txt from '../Txt/Txt';
import Clock from '../Clock/Clock';

export default function Meteo_basic({ temp, city, interpretation, style }) {
    return (
        <View style={styles.container}>
            <View style={styles.clock}>
                <Clock />
            </View>

            <Txt style={styles.city}>{city}</Txt>

            <Txt style={styles.weather_label}>{interpretation.label}</Txt>

            <View style={styles.temp_container}>
                <Txt style={styles.temp}>{temp}°</Txt>
                <Image style={styles.image} source={interpretation.image} />
            </View>
        </View>
    );
}
