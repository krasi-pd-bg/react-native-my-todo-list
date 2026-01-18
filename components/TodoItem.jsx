import { View, Text, StyleSheet, Button } from 'react-native';

export default function TodoItem({ item, onDone }) {
    
    return (
        <View style={styles.itemContainer}>
            <Text>{item.text}</Text>
            <Button title={item.completed ? 'Done' : 'Undone'} onPress={() => {onDone(item.id)}}/> 
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 12,
        backgroundColor: '#629191fb',
        marginBottom: 10,        
    },

});