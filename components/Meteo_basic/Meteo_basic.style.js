// STYLES
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    city: {
        fontSize: 30,
    },

    clock: {
        alignItems: 'flex-end',
        fontSize: 14,
    },

    weather: {
        alignItems: 'flex-end',
    },

    weather_label: {
        transform: [{ rotate: '-90deg' }],
        alignSelf: 'flex-end',
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
