import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
    },

    image: {
        width: 50,
        height: 50,
    },

    day: { fontSize: 20 },

    date: { fontSize: 20 },

    temperature: {
        width: 70,
        textAlign: 'right',
        fontSize: 30,
    },
});
