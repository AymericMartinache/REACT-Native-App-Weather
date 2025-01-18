// REACT NATIVE
import { Text, useWindowDimensions, View } from 'react-native';

// STYLES
import { styles } from './Txt.style';

export default function Txt({ children, style }) {
    const { height } = useWindowDimensions();
    const fontSize = style?.fontSize || styles.text.fontSize;

    return (
        <Text
            style={[
                styles.text,
                style,
                {
                    fontSize: fontSize * 0.00118 * height,
                },
            ]}
        >
            {children}
        </Text>
    );
}
