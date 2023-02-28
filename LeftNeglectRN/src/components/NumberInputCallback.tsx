import * as React from 'react'
import { View, TextInput, StyleSheet, Text, Platform } from 'react-native';

interface Props<T> {
    label: string,
    placeholder: string,
    value: T | undefined | string,
    callback: (value: T) => void
}

export const NumberInputCallback: React.FC<Props<number>> = ({ label, placeholder, value, callback }) => {
    return (
        <View>
            <Text style={styles.heading2}>{label}</Text>
            <TextInput keyboardType={Platform.OS === "android" ? "numeric" : "number-pad"} style={styles.input} onChangeText={(e: string) => {
                if(!e) callback(0);
                
                // if the value is not a number, make it not show a number
                let val = e;
                val.replace('\d', '');
                if(isNaN(parseInt(val))) {
                    callback(0);
                } else {
                    callback(parseInt(val));
                }
            }} value={value + ""} placeholder={placeholder}/>
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

export default NumberInputCallback;
