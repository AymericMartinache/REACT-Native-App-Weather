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
            console.log('Error : ', error, 'Error message : ', error.message);
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

    // Récupère les coordonnées depuis une ville
    static async fetchCoordsFromCity(city) {
        try {
            const { latitude: lat, longitude: lng } = (
                await axios.get(
                    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=fr&format=json`
                )
            ).data.results[0];

            return { lat, lng };
        } catch (error) {
            throw 'Aucunes coordonnées trouvées pour la recherche : ' + city;
        }
    }
}
