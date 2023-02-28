import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import TheSlider from '../components/Slider';
import RoutingButton from '../components/RoutingButton';
import QualSlider from '../components/QualitativeSlider';

export const ReminderSettings: React.FC = () => {
    // need to add state variables here

    const setSettings = () => {

    };

    return (
        <View style={styles.container}>

            <Text style={styles.heading1}>Configure Reminders</Text>
            <View style={{padding: 1, backgroundColor: "#ECECEC"}}></View>
      
            <TheSlider 
            width={'100%'}
            height={20}
            min={1}
            max={30}
            defaultValue={0}
            labelText={"Frequency"}
            labelUnits={"minute(s)"}
            sigfigs={0}
            showLabel={true}
            prefix={"Every"}/>

            <Text style={styles.heading1}>Configure Glasses</Text>
            <View style={{padding: 1, backgroundColor: "#ECECEC"}}></View>

            <QualSlider width={"100%"} defaultVal={0} title={"Brightness"} labelText={["Low", "Medium", "High"]}/>
            <QualSlider width={"100%"} defaultVal={0} title={"Flash Rate"} labelText={["Low", "Medium", "High"]}/>

            <Text style={styles.heading1}>Other Settings</Text>
            <View style={{padding: 1, backgroundColor: "#ECECEC"}}></View>

            <Text>Reset Profile</Text>
            <Text>Reset Bluetooth</Text>

            <RoutingButton bgcolor={"purple"} outline={false} text={"Back to Home"} route={"/"} ifValid={setSettings}/>
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

export default ReminderSettings;
