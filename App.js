
// import { useState } from 'react';
// import { StyleSheet, StatusBar, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import 'react-native-get-random-values';
// import { v4 } from 'uuid';
// import HeadView from './components/HeadView';
// import TodoInput from './components/TodoInput';
// import TodoList from './components/TodoList';


// export default function App() {
//     const [text, setText] = useState('');
//     const [todo, setTodo] = useState([]);

//     const onTextChangeHandler = (value) => {
//         setText(value);
//     };

//     const onButtonPressHandler = () => {
//         const os = Platform.OS
//         if (!text) return alert(`${os}: Please enter a todo item`);
//         const newTodo = {
//             id: v4(),
//             text,
//             completed: false,
//         }
//         setTodo(oldTodo => [...oldTodo, newTodo]);
//         setText('');
//         Keyboard.dismiss();
//     }

//     const onDone = (id) => {
//         setTodo(oldTodo => oldTodo.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
//     }
//     const onDelete = (id) => {
//         setTodo(oldTodo => oldTodo.filter(item => item.id !== id));
//     }

//     return (
//         <SafeAreaProvider>
//             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//                 <SafeAreaView style={styles.body}>
//                     {/* <View style={styles.body}> */}
//                         <StatusBar barStyle="dark-content" backgroundColor="#42a39e" />
//                         <HeadView />
//                         <TodoInput
//                             onTextChangeHandler={onTextChangeHandler}
//                             onButtonPressHandler={onButtonPressHandler}
//                             text={text}
//                         />
//                         <TodoList todo={todo} onDone={onDone} onDelete={onDelete} />
//                     {/* </View> */}
//                 </SafeAreaView>
//             </TouchableWithoutFeedback>
//         </SafeAreaProvider>






//     );
// }

// const styles = StyleSheet.create({
//     body: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#42a39e',
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: 20,
//     },



// });


// import { useState, useCallback } from 'react';
// import { StyleSheet, StatusBar, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import 'react-native-get-random-values';
// import { v4 } from 'uuid';
// import HeadView from './components/HeadView';
// import TodoInput from './components/TodoInput';
// import TodoList from './components/TodoList';


// export default function App() {
//     const [text, setText] = useState('');
//     const [todo, setTodo] = useState([]);

//     // Мемоизирана функция за промяна на текста
//     const onTextChangeHandler = useCallback((value) => {
//         setText(value);
//     }, []); // Празен array = функцията никога не се пресъздава

//     // Мемоизирана функция за добавяне на todo
//     const onButtonPressHandler = useCallback(() => {
//         const os = Platform.OS;
//         if (!text) return alert(`${os}: Please enter a todo item`);
        
//         const newTodo = {
//             id: v4(),
//             text,
//             completed: false,
//         };
        
//         setTodo(oldTodo => [...oldTodo, newTodo]);
//         setText('');
//         Keyboard.dismiss();
//     }, [text]); // Пресъздава се само когато text се промени

//     // Мемоизирана функция за done
//     const onDone = useCallback((id) => {
//         setTodo(oldTodo => 
//             oldTodo.map(item => 
//                 item.id === id 
//                     ? { ...item, completed: !item.completed } 
//                     : item
//             )
//         );
//     }, []); // Празен array защото използваме функционална форма на setState

//     // Мемоизирана функция за delete
//     const onDelete = useCallback((id) => {
//         setTodo(oldTodo => oldTodo.filter(item => item.id !== id));
//     }, []); // Празен array защото използваме функционална форма на setState

//     return (
//         <SafeAreaProvider>
//             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//                 <SafeAreaView style={styles.body}>
//                     <StatusBar barStyle="dark-content" backgroundColor="#42a39e" />
//                     <HeadView />
//                     <TodoInput
//                         onTextChangeHandler={onTextChangeHandler}
//                         onButtonPressHandler={onButtonPressHandler}
//                         text={text}
//                     />
//                     <TodoList todo={todo} onDone={onDone} onDelete={onDelete} />
//                 </SafeAreaView>
//             </TouchableWithoutFeedback>
//         </SafeAreaProvider>
//     );
// }

// const styles = StyleSheet.create({
//     body: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#42a39e',
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: 20,
//     },
// });

import { useState, useCallback } from 'react';
import { StyleSheet, StatusBar, Platform, Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-get-random-values';
import { v4 } from 'uuid';
import HeadView from './components/HeadView';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
    const [text, setText] = useState('');
    const [todo, setTodo] = useState([]);

    const onTextChangeHandler = useCallback((value) => {
        setText(value);
    }, []);

    const onButtonPressHandler = useCallback(() => {
        const os = Platform.OS;
        if (!text) return alert(`${os}: Please enter a todo item`);
        
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
            <SafeAreaView style={styles.container} edges={['top']}>
                <StatusBar barStyle="dark-content" backgroundColor="#42a39e" />
                
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
                
                {/* TodoList извън TouchableWithoutFeedback за да не блокира скролването */}
                <TodoList todo={todo} onDone={onDone} onDelete={onDelete} />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#42a39e',
    },
    content: {
        padding: 20,
        paddingBottom: 10,
        gap: 20,
    },
});