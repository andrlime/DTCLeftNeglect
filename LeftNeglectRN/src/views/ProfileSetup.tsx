import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import TextInputCallback from '../components/TextInputCallback';
import NumberInputCallback from '../components/NumberInputCallback';
import DropdownCallback from '../components/DropdownCallback';
import RoutingButton from '../components/RoutingButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ProfileSetup: React.FC = () => {
    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState(0);
    const [gender, setGender] = React.useState("S");

    const [valid, setValid] = React.useState(false);

    React.useEffect(() => {
        setValid(name != "" && age > 0 && gender != "S");
    },[name, age, gender])

    const setStorage = async () => {
        try {
            await AsyncStorage.setItem('@user_profile', JSON.stringify({
                name: name, age: age, gender: gender, setup: true
            }))
        } catch (e) {
            // saving error! we can do something with the UI when this happens
            console.log(`**ERROR: Saving error for data ${{
                name: name, age: age, gender: gender
            }}`)
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading1}>Create Profile</Text>
            <View style={{padding: 1, backgroundColor: "#ECECEC"}}></View>

            <TextInputCallback callback={setName} value={name} label={"Preferred Name"} placeholder={"Your preferred name?"}/>
            <NumberInputCallback callback={setAge} value={age != 0 ? age : ""} label={"Age"} placeholder={"Your age?"}/>
            
            <DropdownCallback label={"Gender"} value={gender} callback={setGender} options={[
                {label: "Male", value: "M"},
                {label: "Female", value: "F"},
                {label: "Non-Binary", value: "N"}
            ]}/>

            <RoutingButton bgcolor={valid ? "purple" : "#AAA"} outline={false} text={"Next"} route={valid ? "/onboard/bt" : ""} ifValid={setStorage}/>
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
