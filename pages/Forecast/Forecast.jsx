// REACT NATIVE
import { TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image } from 'react-native';

// STYLES
import { styles } from './Forecast.style';

// ASSETS
import backBtn from '../../assets/icons/back-btn.png';

// COMPONENTS
import Txt from '../../components/Txt/Txt';
import Container from '../../components/Container/Container';
import Forcast_ListItem from '../../components/Forecast_ListItem/Forcast_ListItem';

// SERVICES
import { getWeatherInterpretation } from '../../services/meteo-service';
import { dateToDDMM, DAYS } from '../../services/date-service';

export default function Forecast({}) {
    const { params } = useRoute();
    // console.log('params :', params);

    const nav = useNavigation();

    const backButton = (
        <TouchableOpacity onPress={() => nav.goBack()} style={styles.back_btn}>
            <Image source={backBtn} style={styles.back_btn} />
        </TouchableOpacity>
    );

    const header = (
        <View style={styles.header}>
            {backButton}
            <View style={styles.header_texts}>
                <Txt style={styles.city}>{params.city}</Txt>

                <Txt style={styles.subtitle}>Prévisions sur 7 jours</Txt>
            </View>
        </View>
    );

    const forcastList = (
        <View style={styles.forecastList}>
            {params.time.map((time, index) => {
                const code = params.weathercode[index];
                const image = getWeatherInterpretation(code).image;
                const date = new Date(time);
                const day = DAYS[date.getDay()];
                const temperature = params.temperature_2m_max[index];
                return (
                    <Forcast_ListItem
                        key={time}
                        image={image}
                        date={dateToDDMM(date)}
                        day={day}
                        temperature={temperature.toFixed(0)}
                    ></Forcast_ListItem>
                );
            })}
        </View>
    );

    return (
        <Container>
            {header}
            {forcastList}
        </Container>
    );
}
