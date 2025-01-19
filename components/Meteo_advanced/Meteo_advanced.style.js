// STYLES
import { StyleSheet, View } from 'react-native';

// COMPONENTS
import Txt from '../Txt/Txt';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#F1F1F1',
        backgroundColor: '#0000005c',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    text: { fontSize: 15 },
});

// Création de composants dans le style
export function StyledContainer({ children }) {
    return <View style={{ alignItems: 'center' }}>{children}</View>;
}

export function StyledLabel({ children }) {
    return <Txt style={{ fontSize: 15 }}>{children}</Txt>;
}

export function StyledValue({ children }) {
    return <Txt style={{ fontSize: 20 }}>{children}</Txt>;
}
