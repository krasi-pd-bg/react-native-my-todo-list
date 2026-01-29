import { memo } from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';

// Константа за URL - извън компонента за да не се пресъздава
const BACKGROUND_IMAGE = {
    uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
};

function HeadView() {
    const today = new Date(); const formattedDate = today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', });
    return (
        <ImageBackground
            source={BACKGROUND_IMAGE}
            style={styles.background}
            resizeMode="cover"
        >
            <Text style={styles.nameText}>{formattedDate}</Text>
        </ImageBackground>
    );
}

// Мемоизиране - компонентът НИКОГА не се променя
export default memo(HeadView);

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 200,
        opacity: 1,
        justifyContent: 'top',
        alignItems: 'flex-start',
        paddingLeft: 15,
    },
    nameText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
});