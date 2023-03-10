import * as React from 'react'
import { View, StyleSheet, Text, ScrollView, Image, Switch } from 'react-native';
import { Link } from 'react-router-native';
import { useNavigate } from 'react-router-dom';
import PieChartSlice from '../components/PieChartSlice';
import TheSlider from '../components/Slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RoutingButton from '../components/RoutingButton';
import SettingsButton from '../components/SettingsButton';
import BatteriesDashboard from '../components/BatteriesDashboard';
import CircleProgressChart from '../components/CircleProgressChart';
import ExportButton from '../components/ExportButton';

export const HomeScreen: React.FC = () => {
    const [name, setName] = React.useState("NAME");

    const navigate = useNavigate();

    React.useEffect(() => {
        AsyncStorage.getItem('@user_profile').then((val) => {
          let data = JSON.parse(val + "");
          if(!data) {
            // make the user setup their profile
            navigate('/onboard/profile');
          } else {
            const name = data["name"];
            setName(name);
          }
        });
    },[]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{width: "90%", alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginBottom: 5, maxWidth: 400}}>
                    <Text style={{fontWeight: "700", fontSize: 36}}><Text style={{color: "#8D8D8D"}}>WELCOME,{"\n"}</Text>{name}</Text>
                    <Image style={{width: 77, height: 104}} source={require("../../assets/icon.png")}/>
                </View>
                <View style={{width: "90%", alignItems: "flex-end", flexDirection: "row", justifyContent: "space-between", marginBottom: 1}}>
                    <Text style={{fontWeight: "700", fontSize: 20}}>Progress Data</Text>
                    <View style={{display: "flex", flexDirection: "row"}}><Text>Export to{"\n"}Caregiver</Text><ExportButton/></View>
                </View>
                <View style={{width: "90%", marginBottom: 25}}></View>
                <CircleProgressChart />
                <View style={{width: "90%", marginBottom: 10}}></View>
                <BatteriesDashboard glassesBattery={70} clipBattery={30}/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 4,
        paddingTop: 24,
        paddingBottom: 24,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        width: "100%"
    }
});

export default HomeScreen;
