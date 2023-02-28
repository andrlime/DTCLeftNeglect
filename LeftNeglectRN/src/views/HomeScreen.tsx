import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';
import { useNavigate } from 'react-router-dom';
import PieChartSlice from '../components/PieChartSlice';
import TheSlider from '../components/Slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            <PieChartSlice fillColor={"darkblue"} theta={angle} sidelength={380}/>
            <TheSlider 
            width={300}
            height={20}
            min={0}
            max={359}
            defaultValue={angle}
            labelText={"Angle"}
            labelUnits={"degrees"}
            sigfigs={2}
            applyCallback={(newAngle) => {
                setAngle(newAngle);
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
});

export default HomeScreen;
