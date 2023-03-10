import * as React from 'react'
import { View, StyleSheet, ScrollView, Dimensions, Text } from 'react-native';
import { Link } from 'react-router-native';
import { useNavigate } from 'react-router-dom';
import PieChartSlice from '../components/PieChartSlice';
import TheSlider from '../components/Slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RoutingButton from '../components/RoutingButton';
import SettingsButton from '../components/SettingsButton';
import BatteriesDashboard from '../components/BatteriesDashboard';
import CircleProgressChart from '../components/CircleProgressChart';
import { proportions } from "../styles"

const HomeScreenScroll: React.FC = () => {
    const SCROLLVIEW_OFFSET_SPACING = (Dimensions.get("screen").width - proportions.StandardComponent.width) * 0.5
    const SCROLLVIEW_CONTENT_SPACING = 15
    return <View style={{ height: proportions.StandardComponent.width + 20 }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: "center" }}>
        <View style={{ width: SCROLLVIEW_OFFSET_SPACING }}/>
        <CircleProgressChart timeCurrent={7} timeGoal={7} angleCurrent={60} angleGoal={80}/>
        <View style={{ width: SCROLLVIEW_CONTENT_SPACING }}/>
        <CircleProgressChart timeCurrent={7} timeGoal={7} angleCurrent={60} angleGoal={80}/>
        <View style={{ width: SCROLLVIEW_CONTENT_SPACING }}/>
        <CircleProgressChart timeCurrent={7} timeGoal={7} angleCurrent={60} angleGoal={80}/>
        <View style={{ width: SCROLLVIEW_OFFSET_SPACING }}/>
    </ScrollView>
</View>
}

export const HomeScreen: React.FC = () => {

    const navigate = useNavigate();

    React.useEffect(() => {
        AsyncStorage.getItem('@user_profile').then((val) => {
          let data = JSON.parse(val + "");
          if(!data.setup) {
            // make the user setup their profile
            navigate('/onboard/profile');
          }
        });
    },[]);

    return (
        <View style={styles.container}>
            <View style={{width: "90%", alignItems: "flex-end"}}>
                <SettingsButton/>
            </View>

            <HomeScreenScroll />

            <View style={{ height: 20 }}/>

            <BatteriesDashboard glassesBattery={15} clipBattery={100}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 4,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    }
});

export default HomeScreen;
