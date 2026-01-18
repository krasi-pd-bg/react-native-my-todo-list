import { ScrollView } from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList({ todo, onDone, onDelete }) {
    return (
        <ScrollView style={{ flex: 1, width: '100%' }}>
            {todo.map((todoItem) => <TodoItem key={todoItem.id} item={todoItem} onDone={onDone} onDelete={onDelete}/>)}
        </ScrollView>
    );

};