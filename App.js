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

    console.log('Font loaded : ', isFontLoaded);

    return (
        <NavigationContainer theme={newTheme}>
            <StatusBar style="light" />
            {isFontLoaded ? (
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerShown: false,
                        animation: 'slide_from_bottom',
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
