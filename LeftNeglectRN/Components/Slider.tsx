import * as React from 'react'
import { View } from 'react-native';
import Slider from '@react-native-community/slider';

interface Config {
    width: number; // how wide?
    height: number; // how tall?
    min: number; // min value
    max: number; // max value
    defaultValue: number; // default value before any value loads
    applyCallback?: (arg0: number) => void; // callback function: when this is called, you can setState in a parent component
}

export const TheSlider: React.FC<Config> = ({ width, height, min, max, defaultValue, applyCallback }) => {
    // Value of the slider
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
                    if(applyCallback) {
                        applyCallback(e);
                    }
                }}
            />
        </View>
    );
};

export default TheSlider;
