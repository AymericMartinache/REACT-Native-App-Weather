// Récupère l'heure actuelle
export function nowToHHMM() {
    const date = new Date();

    return `${date.getHours().toString().padStart(2, '0')}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;
}
