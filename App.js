// EXPO
import { StatusBar } from 'expo-status-bar';

// EXPO FONTS
import { useFonts } from 'expo-font';
import AlataRegular from './assets/fonts/Alata-Regular.ttf';

// NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// COMPONENTS
import Home from './pages/Home/Home';
import Forecast from './pages/Forecast/Forecast';

// NOTIFICATIONS
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

// REACT
import { useState, useEffect, useRef } from 'react';

const Stack = createNativeStackNavigator();

const newTheme = {
    colors: {
        background: 'transparent',
    },
};

export default function App() {
    // FONTS
    const [isFontLoaded] = useFonts({
        'Alata-Regular': AlataRegular,
    });

    function handleRegistrationError(errorMessage) {
        alert(errorMessage);
        throw new Error(errorMessage);
    }
    // NOTIFICATIONS
    async function subscribeToNotifications() {
        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }

        if (Device.isDevice) {
            const { status: existingStatus } =
                await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } =
                    await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                handleRegistrationError(
                    'Permission not granted to get push token for push notification!'
                );
                return;
            }
            const projectId =
                Constants?.expoConfig?.extra?.eas?.projectId ??
                Constants?.easConfig?.projectId;
            if (!projectId) {
                handleRegistrationError('Project ID not found');
            }
            try {
                const pushTokenString = (
                    await Notifications.getExpoPushTokenAsync({
                        projectId,
                    })
                ).data;
                // Envoie du token au serveur ...

                return pushTokenString;
            } catch (e) {
                handleRegistrationError(`${e}`);
            }
        } else {
            handleRegistrationError(
                'Must use physical device for push notifications'
            );
        }
    }

    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(undefined);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        subscribeToNotifications()
            .then((token) => setExpoPushToken(token ?? ''))
            .catch((error) => setExpoPushToken(`${error}`));

        notificationListener.current =
            Notifications.addNotificationReceivedListener((notification) => {
                setNotification(notification);
            });

        responseListener.current =
            Notifications.addNotificationResponseReceivedListener(
                (response) => {
                    console.log(
                        'Response :',
                        response.notification.request.content.data
                    );
                }
            );

        return () => {
            notificationListener.current &&
                Notifications.removeNotificationSubscription(
                    notificationListener.current
                );
            responseListener.current &&
                Notifications.removeNotificationSubscription(
                    responseListener.current
                );
        };
    }, []);

    console.log('Token :', expoPushToken);

    return (
        <NavigationContainer theme={newTheme}>
            <StatusBar style="light" />
            {isFontLoaded ? (
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerShown: false,
                        animation: 'slide_from_left',
                    }}
                >
                    {/* Pages */}
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Forecast" component={Forecast} />
                </Stack.Navigator>
            ) : null}
        </NavigationContainer>
    );
}
