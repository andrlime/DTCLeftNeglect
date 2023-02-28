import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import TextInputCallback from '../components/TextInputCallback';
import NumberInputCallback from '../components/NumberInputCallback';
import DropdownCallback from '../components/DropdownCallback';

export const ProfileSetup: React.FC = () => {
    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState(0);
    const [gender, setGender] = React.useState("S");

    return (
        <View style={styles.container}>
            <Text style={styles.heading1}>Create Profile</Text>
            <View style={{padding: 1, backgroundColor: "#ECECEC"}}></View>

            <TextInputCallback callback={setName} value={name} label={"Name"} placeholder={"Your name?"}/>
            <NumberInputCallback callback={setAge} value={age != 0 ? age : ""} label={"Age"} placeholder={"Your age?"}/>

            <DropdownCallback label={"Gender"} value={gender} callback={setGender} options={[
                {label: "Male", value: "M"},
                {label: "Female", value: "F"},
                {label: "Non-Binary", value: "N"}
            ]}/>

            <Text>{name}</Text>
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
    }
});

export default ProfileSetup;
