
import { Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.body}>

            <View>
                <Text style={styles.heading}>TODO List</Text>
            </View>
            <View>
                <Text>Body</Text>
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

};