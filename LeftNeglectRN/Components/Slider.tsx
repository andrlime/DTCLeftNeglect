import * as React from 'react'
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

interface Config {
    width: number;
    height: number;
    min: number;
    max: number;
    defaultValue: number;
    applyCallback: (arg0: number) => void; // callback function
}

export const TheSlider: React.FC<Config> = ({ width, height, min, max, defaultValue, applyCallback }) => {
    const [val, setVal] = React.useState(defaultValue)

    return (
        <View>
            <Slider
                style={{width: width, height: height}}
                minimumValue={min}
                maximumValue={max}
                maximumTrackTintColor="#cccccc"
                minimumTrackTintColor="darkblue"
                value={val}
                onValueChange={(e) => {
                    setVal(e);
                    applyCallback(e);
                }}
            />
        </View>
    );
};

export default TheSlider;
