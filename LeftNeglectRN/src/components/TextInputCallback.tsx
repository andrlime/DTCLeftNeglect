import * as React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native';

interface Props<T> {
  label: string,
  placeholder: string,
  value: T | undefined,
  callback: (value: T) => void
}

export const TextInputCallback: React.FC<Props<string>> = ({ label, placeholder, value, callback }) => {
    return (
        <View>
            <Text style={styles.heading2}>{label}</Text>
            <TextInput style={styles.input} onChangeText={callback} value={value} placeholder={placeholder}/>
        </View>
    );
};

const styles = StyleSheet.create({
    heading2: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 6,
        paddingLeft: 0
    },
    input: {
        height: 40,
        marginBottom: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
});

export default TextInputCallback;
