import { ScrollView } from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList({ todo }) {
    return (
        <ScrollView style={{ flex: 1, width: '100%' }}>
            {todo.map((todoItem) => <TodoItem key={todoItem.id} item={todoItem} />)}
        </ScrollView>
    );

};