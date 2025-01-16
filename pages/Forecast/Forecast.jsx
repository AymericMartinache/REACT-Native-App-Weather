// REACT NATIVE
import { TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

// STYLES
import { styles } from './Forecast.style';

// COMPONENTS
import Txt from '../../components/Txt/Txt';
import { Container } from '../../components/Container/Container';

export default function Forecast({}) {
    const { params } = useRoute();
    // console.log('params :', params);

    const nav = useNavigation();

    const backButton = (
        <TouchableOpacity onPress={() => nav.goBack()} style={styles.back_btn}>
            <Txt style={{ fontSize: 40 }}>↩︎</Txt>
        </TouchableOpacity>
    );

    const header = (
        <View style={styles.header}>
            {backButton}
            <View style={styles.header_texts}>
                <Txt>{params.city}</Txt>

                <Txt style={styles.subtitle}>Prévisions sur 7 jours</Txt>
            </View>
        </View>
    );

    return <Container>{header}</Container>;
}
