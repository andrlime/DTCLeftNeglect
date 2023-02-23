import PieChartSlice from './Components/PieChartSlice';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Hello: React.FC<Props> = ({}) => {
  const [angle, setAngle] = React.useState(50);

  return (
    <View style={styles.container}>
      <PieChartSlice fillColor={"darkblue"} theta={angle} sidelength={380}/>
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