import { ImageBackground, Text } from "react-native";

export default function HeadView() {
    return (

        <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' }}
            style={{ width: '100%', height: 150, opacity: 0.4 }}
        >
            <Text style={{ position: 'absolute', top: 40, color: 'white', fontSize: 18, fontWeight: 'bold' }}>Krasimir Dimitrov</Text>
        </ImageBackground>

    );
};