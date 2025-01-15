// REACT NATIVE
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';

// STYLES
import { styles } from './Forecast.style';

// COMPONENTS
import Txt from '../../components/Txt/Txt';
import { Container } from '../../components/Container/Container';

export default function Forecast() {
    const { params } = useRoute;

    return (
        <Container>
            <View style={styles.container}>
                <Txt>Forecast</Txt>
            </View>
        </Container>
    );
}
