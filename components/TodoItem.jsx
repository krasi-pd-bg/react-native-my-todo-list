
// import { View, Text, StyleSheet, Pressable } from 'react-native';
// import { CheckCheck, CircleX, Check } from 'lucide-react-native/icons';

// export default function TodoItem({ item, onDone, onDelete }) {
//     return (
//         <View style={styles.itemContainer}>
//             <Text style={styles.todoText}>{item.text}</Text>

//             <View style={styles.ticksContainer}>
//                 <Pressable
//                     onPress={() => onDone(item.id)}
//                     hitSlop={10}
//                     style={styles.iconButton}
//                 >
//                     {!item.completed
//                         ? <Check size={30} color="gray" />
//                         : <CheckCheck size={30} color="green" />
//                     }
//                 </Pressable>

//                 {item.completed && (
//                     <Pressable
//                         onPress={() => onDelete(item.id)}
//                         hitSlop={10}
//                         style={styles.iconButton}
//                     >
//                         <CircleX size={30} color="red" />
//                     </Pressable>
//                 )}
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     itemContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 10,
//         borderWidth: 1,
//         borderColor: 'black',
//         borderRadius: 12,
//         backgroundColor: '#629191fb',
//         marginBottom: 10,
//         marginRight: 10,
//     },
//     ticksContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         width: '25%',
//     },
//     todoText: {
//         flex: 1,
//         fontSize: 12,
//         maxWidth: '70%',
//     },
//     iconButton: {
//         width: 36,
//         height: 36,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });
import { memo, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { CheckCheck, CircleX, Check } from 'lucide-react-native/icons';

// Мемоизирани иконки - създават се веднъж
const CheckIcon = memo(({ size = 30, color = 'gray' }) => (
    <Check size={size} color={color} />
));

const CheckCheckIcon = memo(({ size = 30, color = 'green' }) => (
    <CheckCheck size={size} color={color} />
));

const CircleXIcon = memo(({ size = 30, color = 'red' }) => (
    <CircleX size={size} color={color} />
));

function TodoItem({ item, onDone, onDelete }) {
    // Мемоизирани handlers - не се пресъздават при всяко рендериране
    const handleDone = useCallback(() => {
        onDone(item.id);
    }, [item.id, onDone]);

    const handleDelete = useCallback(() => {
        onDelete(item.id);
    }, [item.id, onDelete]);

    return (
        <View style={styles.itemContainer}>
            <Text style={styles.todoText}>{item.text}</Text>

            <View style={styles.ticksContainer}>
                <Pressable
                    onPress={handleDone}
                    hitSlop={10}
                    style={styles.iconButton}
                >
                    {!item.completed
                        ? <CheckIcon />
                        : <CheckCheckIcon />
                    }
                </Pressable>

                {item.completed && (
                    <Pressable
                        onPress={handleDelete}
                        hitSlop={10}
                        style={styles.iconButton}
                    >
                        <CircleXIcon />
                    </Pressable>
                )}
            </View>
        </View>
    );
}

// Мемоизиране на целия компонент с custom comparison
export default memo(TodoItem, (prevProps, nextProps) => {
    // Връща TRUE = НЕ рендерирай
    // Връща FALSE = рендерирай
    return (
        prevProps.item.id === nextProps.item.id &&
        prevProps.item.completed === nextProps.item.completed &&
        prevProps.item.text === nextProps.item.text
    );
});

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
    iconButton: {
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
    },
});