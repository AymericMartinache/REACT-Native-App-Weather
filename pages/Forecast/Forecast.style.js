import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
    },

    back_btn: {
        width: 50,
        height: 50,
    },

    header_texts: {
        flex: 1,
        alignItems: 'center',
        marginRight: 50,
    },

    city: {
        textAlign: 'center',
    },

    subtitle: {
        fontSize: 20,
    },

    forecastList: {
        marginTop: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: '#F1F1F1',
        backgroundColor: '#0000005c',
        borderRadius: 15,
    },
});
