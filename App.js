
import { useState } from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import HeadView from './components/HeadView';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


export default function App() {
    const [text, setText] = useState('');
    const [todo, setTodo] = useState([]);

    const onTextChangeHandler = (value) => {
        setText(value);
    };

    const onButtonPressHandler = () => {
        const os = Platform.OS
        if (!text) return alert(` ${os}: Please enter a todo item`);
        const newTodo = {
            text,
            completed: false,
        }
        setTodo(oldTodo => [...oldTodo, newTodo]);
        setText('');
    }
    return (
        <View style={styles.body}>
            <StatusBar barStyle="dark-content" backgroundColor="#42a39e" />
            <HeadView />
            <TodoInput
                onTextChangeHandler={onTextChangeHandler}
                onButtonPressHandler={onButtonPressHandler}
                text={text}
            />
            <TodoList todo={todo} />           
            
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 20,
        backgroundColor: '#42a39e',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    
    

});