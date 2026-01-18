import { View, Text, StyleSheet, Button } from 'react-native';
import { CheckCheck, CircleX, Check } from 'lucide-react-native/icons';

export default function TodoItem({ item, onDone, onDelete }) {

    return (
        <View style={styles.itemContainer}>
            <Text style={styles.todoText}>{item.text}</Text>
            <View style={styles.ticksContainer}>
                {/*<Button title={item.completed ? 'Done' : 'Undone'} onPress={() => {onDone(item.id)}}/>*/}
                {/* <CheckCheck size={30} color={item.completed ? 'green' : 'red'} onPress={() => {onDone(item.id)}}/> */}
                {!item.completed
                    ? <Check size={30} color='gray' onPress={() => { onDone(item.id) }} />
                    : <CheckCheck size={30} color='green' onPress={() => { onDone(item.id) }} />}
                {/* <CircleX size={30} color={item.completed ? 'green' : 'gray'} onPress={() => {onDelete(item.id)}}/> */}
                {item.completed && <CircleX size={30} color='red' onPress={() => { onDelete(item.id) }} />}
            </View>

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
        marginRight: 10,
    },
    ticksContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '25%',
    },
    todoText: {
        flex: 1,
        fontSize: 12,
        maxWidth: '70%',
    },

});