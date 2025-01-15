// AXIOX
import axios from 'axios';

export class MeteoAPI {
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
}
