// STYLES
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },

    image: {
        width: 60,
        height: 60,
        marginRight: 10,
    },

    day: { fontSize: 25, flex: 1 },

    date: { fontSize: 25, flex: 1 },

    temperature: {
        width: 100,
        textAlign: 'right',
    },
});
