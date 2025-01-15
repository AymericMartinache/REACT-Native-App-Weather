// AXIOX
import axios from 'axios';

export class MeteoAPI {
    // Interprétation code météo
    static async fetchWeatherFromCoords(coords) {
        try {
            return (
                await axios.get(
                    `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
                )
            ).data;
        } catch (error) {
            console.log(error);
        }
    }

    // Récupération de la ville
    static async fetchCityFromCoords(coords) {
        try {
            const {
                address: { city, village, town },
            } = (
                await axios.get(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
                )
            ).data;

            return city || village || town;
        } catch (error) {
            console.log('Error : ', error, 'Error message : ', error.message);
        }
    }
}
