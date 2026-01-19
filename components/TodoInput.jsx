// import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native';
// import { CircleCheckBig } from 'lucide-react-native';

// export default function TodoInput({ onTextChangeHandler, onButtonPressHandler, text }) {
//     return (
//         <View>
//             <Text style={styles.heading}>TODO List ...</Text>
//             <View style={styles.inputContainer}>
//                 <TextInput
//                     style={styles.input}
//                     value={text}
//                     placeholder='type here...'
//                     onChangeText={onTextChangeHandler}
//                     onSubmitEditing={onButtonPressHandler}
//                 />
//                 <Pressable onPress={onButtonPressHandler}>
//                     <CircleCheckBig
//                         size={36}
//                         color='green'
//                     />
//                 </Pressable>

//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     input: {
//         flex: 1,
//         height: 60,
//         borderColor: 'black',
//         borderWidth: 1,
//         borderRadius: 5,

//     },
//     inputContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         gap: 10,
//         marginBottom: 20,
//         width: '100%',
//         borderColor: 'black',
//         borderWidth: 1,
//         padding: 10,
//         borderRadius: 5,
//     },
//     heading: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },

// });
import { memo } from 'react';
import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native';
import { CircleCheckBig } from 'lucide-react-native';

// Мемоизирана иконка
const CheckButton = memo(({ size = 36, color = 'green' }) => (
    <CircleCheckBig size={size} color={color} />
));

function TodoInput({ onTextChangeHandler, onButtonPressHandler, text }) {
    return (
        <View>
            <Text style={styles.heading}>TODO List ...</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={text}
                    placeholder='type here...'
                    onChangeText={onTextChangeHandler}
                    onSubmitEditing={onButtonPressHandler}
                />
                <Pressable 
                    onPress={onButtonPressHandler}
                    hitSlop={10}
                    style={styles.iconButton}
                >
                    <CheckButton />
                </Pressable>
            </View>
        </View>
    );
}

// Мемоизиране на целия компонент
export default memo(TodoInput, (prevProps, nextProps) => {
    // Рендерирай САМО ако text се промени
    // onTextChangeHandler и onButtonPressHandler са стабилни (useCallback в App)
    return prevProps.text === nextProps.text;
});

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 60,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        marginBottom: 20,
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    iconButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});