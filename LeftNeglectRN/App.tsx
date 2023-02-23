import PieChartSlice from './src/components/PieChartSlice';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import TheSlider from './src/components/Slider';

export const Hello: React.FC = ({}) => {
  // Angle for the pie chart in current view
  const [angle, setAngle] = React.useState(50);

  return (
    <View style={styles.container}>
      <PieChartSlice fillColor={"darkblue"} theta={angle} sidelength={380}/>
      <TheSlider width={300} height={50} min={0} max={359} defaultValue={angle} applyCallback={(newAngle) => {
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

export default Hello;