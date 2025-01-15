// REACT NATIVE
import { Image, View } from 'react-native';

// STYLES
import { styles } from './Meteo_basic.style';

// COMPONENTS
import Txt from '../Txt/Txt';

export default function Meteo_basic({ temp, city, interpretation }) {
    console.log('Interpretation : ', interpretation);

    return (
        <>
            <View style={styles.clock}>
                <Txt style={styles.clock}>Clock</Txt>
            </View>

            <Txt>{city}</Txt>

            <Txt style={styles.weather_label}>{interpretation.label}</Txt>

            <View style={styles.temp_container}>
                <Txt style={styles.temp}>{temp}°</Txt>
                <Image style={styles.image} source={interpretation.image} />
            </View>
        </>
    );
}
