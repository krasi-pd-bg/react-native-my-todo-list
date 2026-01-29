import { memo } from 'react';
import { Text, StyleSheet } from 'react-native';

function HeadView() {
    const today = new Date(); const formattedDate = today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', });
    return (        
            <Text style={styles.nameText}>{formattedDate}</Text>        
    );
}

// Мемоизиране - компонентът НИКОГА не се променя
export default memo(HeadView);

const styles = StyleSheet.create({    
    nameText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
});