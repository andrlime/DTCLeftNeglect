import * as React from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableHighlight } from 'react-native';
import TheSlider from '../components/Slider';
import RoutingButton from '../components/RoutingButton';
import QualSlider from '../components/QualitativeSlider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigate } from 'react-router-native';

export const ReminderSettings: React.FC = () => {
    // need to add state variables here
    const navigate = useNavigate();

    const setSettings = () => {
        // make a single variable with all of the data

    };

    return (
        <ScrollView>
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

                <Text style={styles.heading1}>Weekly Goal Settings</Text>
                <View style={{padding: 1, backgroundColor: "#ECECEC"}}></View>

                <TheSlider 
                width={'100%'}
                height={20}
                min={1}
                max={30}
                defaultValue={0}
                labelText={"Time to look left"}
                labelUnits={"second(s)"}
                sigfigs={0}
                showLabel={true}
                prefix={"Every"}/>

                <TheSlider 
                width={'100%'}
                height={20}
                min={1}
                max={30}
                defaultValue={0}
                labelText={"Look left at least"}
                labelUnits={"º"}
                sigfigs={0}
                showLabel={true}
                prefix={""}/>

                <Text style={styles.heading1}>Other Settings</Text>
                <View style={{padding: 1, backgroundColor: "#ECECEC"}}></View>

                <TouchableHighlight onPress={() => {
                    AsyncStorage.clear();
                    navigate("/");
                }}>
                    <View style={{marginTop: 3, backgroundColor: "#BAE04C", paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, borderRadius: 8}}>
                        <Text style={{color:"#000", fontSize: 18}}>Reset Profile</Text>
                    </View>
                </TouchableHighlight>

                <View style={{marginTop: 3, backgroundColor: "#4CE0FA", paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, borderRadius: 8}}>
                    <Text style={{color:"#000", fontSize: 18}}>Reset Bluetooth (FUTURE)</Text>
                </View>

                <RoutingButton bgcolor={"purple"} outline={false} text={"Back to Home"} route={"/"} ifValid={setSettings}/>
            </View>
        </ScrollView>
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
