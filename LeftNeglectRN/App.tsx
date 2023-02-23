import PieChartSlice from './Components/PieChartSlice';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Slider from './Components/Slider';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Hello: React.FC<Props> = ({}) => {
  const [angle, setAngle] = React.useState(50);

  return (
    <View style={styles.container}>
      <PieChartSlice fillColor={"darkblue"} theta={angle} sidelength={380}/>
      <Slider width={300} height={50} min={0} max={359} defaultValue={angle} applyCallback={(newAngle) => {
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
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default Hello;