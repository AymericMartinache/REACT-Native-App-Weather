import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {},

    clock: {
        alignItems: 'flex-end',
        fontSize: 14,
    },

    weather_label: {
        alignSelf: 'flex-end',
        transform: [{ rotate: '-90deg' }],
        fontSize: 20,
    },

    temp_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },

    temp: {
        fontSize: 120,
    },
    image: {
        width: '100',
        height: '100',
    },
});
