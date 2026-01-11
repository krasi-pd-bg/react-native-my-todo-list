import { View, Text } from 'react-native';

export default function TodoItem({ item }) {
    
    return (
        <View>
            <Text>{item.text}</Text>
        </View>
    );
}