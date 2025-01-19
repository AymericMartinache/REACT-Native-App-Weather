// Récupère l'heure actuelle
export function nowToHHMM() {
    const date = new Date();

    return `${date.getHours().toString().padStart(2, '0')}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;
}

export const DAYS = ['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM'];

export function dateToDDMM(date) {
    return `${date.getDate().toString().padStart(2, '0')}/${(
        date.getMonth() + 1
    )
        .toString()
        .padStart(2, '0')}`;
}

export function convertTimeFromAPI(time) {
    if (!time) {
        return '--:--';
    }

    // Extrait uniquement la partie de l'heure depuis la chaîne ISO8601
    const [_, timePart] = time.split('T'); // "2025-01-19T03:30" devient ["2025-01-19", "03:30"]

    // Retourne la partie "HH:MM"
    return timePart.slice(0, 5);
}
