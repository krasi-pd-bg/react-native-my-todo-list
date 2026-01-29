import { useState, useCallback, useEffect } from 'react';
import { StyleSheet, StatusBar, Platform, Keyboard, TouchableWithoutFeedback, View, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-get-random-values';
import { v4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeadView from './components/HeadView';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
    const [text, setText] = useState('');
    const [todo, setTodo] = useState([]);

    useEffect(() => {
    const loadTasks = async () => {
        try {
            const json = await AsyncStorage.getItem('@todo');
            if (json) {
                setTodo(JSON.parse(json));
            }
        } catch (err) {
            console.log('Error loading tasks:', err);
        }
    };

    loadTasks();
}, []);

useEffect(() => {
    const saveTasks = async () => {
        try {
            await AsyncStorage.setItem('@todo', JSON.stringify(todo));
        } catch (err) {
            console.log('Error saving tasks:', err);
        }
    };

    saveTasks();
}, [todo]);

    const onTextChangeHandler = useCallback((value) => {
        setText(value);
    }, []);

    const onButtonPressHandler = useCallback(() => {
        const os = Platform.OS;
        if (!text.trim()) return alert(`${os}: Please enter a todo item`);

        const newTodo = {
            id: v4(),
            text,
            completed: false,
        };

        setTodo(oldTodo => [...oldTodo, newTodo]);
        setText('');
        Keyboard.dismiss();
    }, [text]);

    const onDone = useCallback((id) => {
        setTodo(oldTodo =>
            oldTodo.map(item =>
                item.id === id
                    ? { ...item, completed: !item.completed }
                    : item
            )
        );
    }, []);

    const onDelete = useCallback((id) => {
        setTodo(oldTodo => oldTodo.filter(item => item.id !== id));
    }, []);

    return (
        <SafeAreaProvider>
            <ImageBackground
                source={require('./assets/images/dark-pattern.jpg')}
                style={styles.background}
            >
                <SafeAreaView style={styles.container} edges={['top']}>
                    <StatusBar barStyle="light-content" />

                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.content}>
                            <HeadView />
                            <TodoInput
                                onTextChangeHandler={onTextChangeHandler}
                                onButtonPressHandler={onButtonPressHandler}
                                text={text}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                    <TodoList todo={todo} onDone={onDone} onDelete={onDelete} />
                </SafeAreaView>
            </ImageBackground>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        paddingBottom: 40,
    },
    container: {
        flex: 1,
    },
    content: {
        padding: 20,
        paddingBottom: 10,
        gap: 20,
    },
});
