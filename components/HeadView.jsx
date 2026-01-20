// import { ImageBackground, Text } from "react-native";

// export default function HeadView() {
//     return (

//         <ImageBackground
//             source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' }}
//             style={{ width: '100%', height: 150, opacity: 0.4 }}
//         >
//             <Text style={{ position: 'absolute', top: 20, color: 'white', fontSize: 18, fontWeight: 'bold' }}>Krasimir Dimitrov</Text>
//         </ImageBackground>

//     );
// };
import { memo } from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';

// Константа за URL - извън компонента за да не се пресъздава
const BACKGROUND_IMAGE = {
    uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
};

function HeadView() {
    return (
        <ImageBackground
            source={BACKGROUND_IMAGE}
            style={styles.background}
            resizeMode="cover"
        >
            <Text style={styles.nameText}>Krasimir Dimitrov</Text>
        </ImageBackground>
    );
}

// Мемоизиране - компонентът НИКОГА не се променя
export default memo(HeadView);

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: 150,
        opacity: 0.8,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20,
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