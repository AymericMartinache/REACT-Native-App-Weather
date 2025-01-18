// STYLES
import { styles } from './Searchbar.style';

// REACT NATIVE
import { TextInput } from 'react-native';

export default function Searchbar({ onSubmit }) {
    function onSubmit() {
        console.log('Submit');
    }
    return (
        <TextInput
            onSubmitEditing={onSubmit}
            style={styles.input}
            placeholder="🔍 Rechercher une ville..."
        />
    );
}
