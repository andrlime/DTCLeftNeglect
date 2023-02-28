import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';
import { useNavigate } from 'react-router-dom';
import PieChartSlice from '../components/PieChartSlice';
import TheSlider from '../components/Slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RoutingButton from '../components/RoutingButton';
import SettingsButton from '../components/SettingsButton';

export const HomeScreen: React.FC = () => {
    const [angle, setAngle] = React.useState(50);

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
            <PieChartSlice fillColor={"darkblue"} theta={angle} sidelength={380}/>
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
