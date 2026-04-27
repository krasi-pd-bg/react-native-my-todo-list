import { memo } from 'react';
import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native';
import { CircleCheckBig } from 'lucide-react-native';

// Мемоизирана иконка
const CheckButton = memo(({ size = 36, color = '#084e06' }) => (
    <CircleCheckBig size={size} color={color} />
));

function TodoInput({ onTextChangeHandler, onButtonPressHandler, text }) {
    return (
        <View>
            <Text style={styles.heading}>Quickie Notes ...</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={text}
                    placeholder='type here...'
                    placeholderTextColor="#666666"
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
        borderColor: '#4a4a4a',
        borderWidth: 2,
        borderRadius: 12,
        paddingHorizontal: 10,
        backgroundColor: '#0A0A0A',
        color: 'rgba(255, 255, 255, 0.75)',
        color: '#666666',

    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        marginBottom: 20,
        width: '100%',
        borderColor: '#4a4a4a',
        borderWidth: 2,
        padding: 10,
        borderRadius: 12,
        backgroundColor: '#0A0A0A',
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 12,
        elevation: 30,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'rgba(255, 255, 255, 0.75)',
    },
    iconButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});