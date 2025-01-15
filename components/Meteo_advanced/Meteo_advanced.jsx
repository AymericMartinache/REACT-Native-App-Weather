// REACT NATIVE
import { View } from 'react-native';

// STYLES
import {
    StyledContainer,
    StyledLabel,
    StyledValue,
    styles,
} from './Meteo_advanced.style';

export default function Meteo_advanced({ dusk, down, wind }) {
    return (
        <View style={styles.container}>
            <StyledContainer>
                <StyledValue>{dusk}</StyledValue>
                <StyledLabel>Aube</StyledLabel>
            </StyledContainer>

            <StyledContainer>
                <StyledValue>{down}</StyledValue>
                <StyledLabel>Crépuscule</StyledLabel>
            </StyledContainer>

            <StyledContainer>
                <StyledValue>{wind} km/h</StyledValue>
                <StyledLabel>Vent</StyledLabel>
            </StyledContainer>
        </View>
    );
}
