// REACT NATIVE
import { Text, useWindowDimensions } from 'react-native';

// STYLES
import { styles } from './Txt.style';

export default function Txt({ children, style }) {
    // Utilisation de useWindowDimensions pour récupérer la hauteur de l'écran
    const { height } = useWindowDimensions();

    // Définition de la taille de police en fonction du style passé ou de la valeur par défaut
    const fontSize = style?.fontSize || styles.text.fontSize;

    // Calcul de la taille de police en fonction de la hauteur de l'écran pour une taille relative
    const calculatedFontSize = fontSize * 0.00118 * height;

    // Retourne le composant Text avec les styles combinés
    return (
        <Text
            style={[
                styles.text, // Style par défaut
                style, // Style personnalisé si fourni
                {
                    fontSize: calculatedFontSize,
                },
            ]}
        >
            {children}
        </Text>
    );
}
