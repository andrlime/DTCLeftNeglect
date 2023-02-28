import * as React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native';

export const ProfileSetup: React.FC = () => {
    const [name, setName] = React.useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.heading1}>Create Profile</Text>
            <View style={{padding: 1, backgroundColor: "#ECECEC"}}></View>
            <TextInput style={styles.input}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 15,
        height: "100%",
        fontSize: 12
    },
    heading1: {
        fontWeight: 'bold',
        fontSize: 24,
        padding: 6,
        paddingLeft: 0
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default ProfileSetup;
