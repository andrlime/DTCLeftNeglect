import * as React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface Props {
  label: string,
  options: {label: string, value: string}[], // defaults to [0]
  value: string,
  callback: (value: string) => void
}

export const DropdownCallback: React.FC<Props> = ({ label, options, value, callback }) => {
    const getGender = (str: string) => {
        if(str == "S") return "Please select...";
        else if(str == "M") return "Male";
        else if(str == "F") return "Female";
        else return "Non-Binary";
    }

    const [show, setShow] = React.useState(false);

    return (
        <View>
            <Text style={styles.heading2}>{label}</Text>
            <Text style={{...styles.input, color: value == "S" ? "#777" : "#000"}} onPress={() => setShow(!show)}>{getGender(value)}</Text>
            {show ? <View>
                <Picker
                    selectedValue={value}
                    onValueChange={(itemValue: string, _: number) => callback(itemValue)}
                >
                    <Picker.Item label={"Press to select..."} value={"S"} />
                    {options.map((e) => (
                        <Picker.Item key={e.label+e.value+Math.random()} label={e.label} value={e.value} />
                    ))}
                </Picker>
                <Button title='Done' onPress={() => setShow(false)}/>
            </View> : ""}
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

export default DropdownCallback;
