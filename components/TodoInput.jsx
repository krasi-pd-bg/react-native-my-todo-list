import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function TodoInput({ onTextChangeHandler, onButtonPressHandler, text }) {
    return (
        <View>
            <Text style={styles.heading}>TODO List</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={text}
                    placeholder='insert your text here'
                    onChangeText={onTextChangeHandler}
                    onSubmitEditing={onButtonPressHandler}
                />
                <Button
                    title='Create'
                    onPress={onButtonPressHandler}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
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
});