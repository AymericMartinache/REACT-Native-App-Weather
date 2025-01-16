// STYLES
import { styles } from './Searchbar.style';

// REACT NATIVE
import { TextInput } from 'react-native';

// COMPONENTS

export default function Searchbar({ onSubmit }) {
    return (
        <TextInput
            onSubmitEditing={onSubmit}
            style={styles.input}
            placeholder="Cherchez une ville..."
        />
    );
}
