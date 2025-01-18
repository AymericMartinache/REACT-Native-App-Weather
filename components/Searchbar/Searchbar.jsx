// STYLES
import { styles } from './Searchbar.style';

// REACT NATIVE
import { TextInput } from 'react-native';

export default function Searchbar({ onSubmit }) {
    return (
        <TextInput
            onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
            style={styles.input}
            placeholder="🔍 Rechercher une ville..."
        />
    );
}
