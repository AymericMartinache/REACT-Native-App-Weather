// REACT
import { useEffect, useState } from 'react';

// STYLES
import { styles } from './Clock.style';

// COMPONENTS
import Txt from '../Txt/Txt';

// SERVICES
import { nowToHHMM } from '../../services/date-service';

export default function Clock() {
    // STATES
    const [time, setTime] = useState(nowToHHMM());

    // USE EFFEXT
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(nowToHHMM());
        }, 1000);

        // Nettoyage du setInterval au démontage du composant
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <Txt style={styles.time}>{time}</Txt>
        </>
    );
}
