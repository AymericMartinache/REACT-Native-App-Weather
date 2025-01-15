import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {},

    clock: {
        alignItems: 'flex-end',
    },

    weather_label: {
        alignSelf: 'flex-end',
        transform: [{ rotate: '-90deg' }],
    },

    temp_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        borderWidth: 1,
    },

    temp: {
        // borderWidth: 1,
        fontSize: 120,
    },
    image: {
        width: '100',
        height: '100',
        // borderWidth: 1,
        backgroundColor: 'gray',
    },
});
