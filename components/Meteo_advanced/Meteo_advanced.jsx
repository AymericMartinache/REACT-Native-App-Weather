// REACT NATIVE
import { View } from 'react-native';

// STYLES
import {
    StyledContainer,
    StyledLabel,
    StyledValue,
    styles,
} from './Meteo_advanced.style';

export default function Meteo_advanced() {
    return (
        <View style={styles.container}>
            <StyledContainer>
                <StyledValue>Heure</StyledValue>
                <StyledLabel>Aube</StyledLabel>
            </StyledContainer>

            <StyledContainer>
                <StyledValue>Heure</StyledValue>
                <StyledLabel>Crépuscule</StyledLabel>
            </StyledContainer>

            <StyledContainer>
                <StyledValue>Vitesse</StyledValue>
                <StyledLabel>Vent</StyledLabel>
            </StyledContainer>
        </View>
    );
}
