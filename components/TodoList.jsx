import { memo } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

// keyExtractor функция извън компонента - създава се веднъж
const keyExtractor = (item) => item.id;

function TodoList({ todo, onDone, onDelete }) {
    return (
        <FlatList
            data={todo}
            keyExtractor={keyExtractor}
            renderItem={({ item }) => (
                <TodoItem
                    item={item}
                    onDone={onDone}
                    onDelete={onDelete}
                />
            )}
            style={styles.list}
            contentContainerStyle={styles.contentContainer}
            // Performance оптимизации
            removeClippedSubviews={true}
            maxToRenderPerBatch={10}
            updateCellsBatchingPeriod={50}
            initialNumToRender={10}
            windowSize={5}
        />
    );
}

// Мемоизиране на компонента
export default memo(TodoList, (prevProps, nextProps) => {
    // Рендерирай само ако todo array се промени
    return prevProps.todo === nextProps.todo;
});

const styles = StyleSheet.create({
    list: {
        flex: 1,
        width: '100%',
    },
    contentContainer: {
        paddingBottom: 30,
    },
});