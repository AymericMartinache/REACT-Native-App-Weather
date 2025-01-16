// STYLES
import { styles } from './Forcast_ListItem.style';

// REACT NATIVE
import { Image, View } from 'react-native';

// COMPONENTS
import Txt from '../../components/Txt/Txt';

export default function Forcast_ListItem({ image, day, date, temperature }) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <Txt style={styles.day}>{day}</Txt>
            <Txt style={styles.date}>{date}</Txt>
            <Txt style={styles.temperature}>{temperature}°</Txt>
        </View>
    );
}
