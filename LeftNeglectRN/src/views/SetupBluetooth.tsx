import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';
import PieChartSlice from '../components/PieChartSlice';
import TheSlider from '../components/Slider';

export const SetupBluetooth: React.FC = () => {
    const [angle, setAngle] = React.useState(50);

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


            <Link to="/about">
                <Text style={{backgroundColor: "red"}}>Go to home screen</Text>
            </Link>
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

export default SetupBluetooth;
