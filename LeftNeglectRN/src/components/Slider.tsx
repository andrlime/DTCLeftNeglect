import * as React from 'react'
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

interface Config {
    width: number | "100%"; // how wide?
    height: number; // how tall?
    min: number; // min value
    max: number; // max value
    defaultValue: number; // default value before any value loads
    labelText: string; // label text e.g. "Rotate by"
    labelUnits: string; // e.g. "%" or "cm" or "degrees" – shows number, and then units
    sigfigs: number; // 2 = 1.23, 3 = 1.234, 4 = 1.2345
    showLabel?: boolean; // Do I show a label?
    applyCallback?: (arg0: number) => void; // callback function: when this is called, you can setState in a parent component
    prefix?: string // prefix to units e.g. every X minutes
}

export const TheSlider: React.FC<Config> = ({ width, height, min, max, defaultValue, labelText, labelUnits, sigfigs, showLabel = false, applyCallback, prefix = "" }) => {
    // Value of the slider
    const [val, setVal] = React.useState(defaultValue)
    
    const textView = (
        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={{fontSize: 15, padding: 2, color: "#0C0A00", fontWeight: "800"}}>{labelText}</Text>
            <Text style={{fontSize: 15, padding: 2, color: "#0C0A00", fontWeight: "700"}}>{prefix} {Math.round(val*(10**sigfigs))/(10**sigfigs)} {labelUnits}</Text>
        </View>
    )

    return (
        <View style={{display: "flex", flexDirection: "column"}}>
            {showLabel ? textView : ""}
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
