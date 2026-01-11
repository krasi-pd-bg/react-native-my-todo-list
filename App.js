
import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default function App() {
    const [text, setText] = useState('');
    const onTextChangeHandler = (value) => {
        setText(value);
    };
    const onButtonPressHandler = () => {
        alert(`You have entered: ${text}`);
    }
    return (
        <View style={styles.body}>

            <View>
                <Text style={styles.heading}>TODO List</Text>
            </View>
            <View style={styles.inputContainer  }>
                <TextInput 
                style={styles.input} 
                value={text} 
                placeholder='insert your text here'
                onChangeText={onTextChangeHandler}
                />
                <Button 
                title='Create'
                onPress={onButtonPressHandler}
                />
                
            </View>
            <View>
                <Text>View</Text>
            </View>
        </View>
    );
}

const styles = {
    body: {
        flex: 1,
        padding: 20,
        backgroundColor: '#42a39e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
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
        marginBottom: 20,
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },

};