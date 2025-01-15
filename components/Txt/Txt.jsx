// REACT NATIVE
import { Text, View } from 'react-native';

// STYLES
import { styles } from './Txt.style';

export default function Txt({ children, style }) {
    return (
        <>
            <View style={styles.container}>
                <Text style={[styles.text, style]}>{children}</Text>
            </View>
        </>
    );
}
