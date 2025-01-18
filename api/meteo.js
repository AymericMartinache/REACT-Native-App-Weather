// AXIOS
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

    // Récupération d'une ville depuis des coords
    static async fetchCityFromCoords(coords) {
        const lat = coords.lat.toString().replace(',', '.');
        const lng = coords.lng.toString().replace(',', '.');
        try {
            const {
                address: { city, village, town, state, country },
            } = (
                await axios.get(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
                )
            ).data;

            return city || village || town || state || country || ' - ';
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
            throw `Aucunes coordonnées trouvées pour la recherche : "${city}"`;
        }
    }
}
