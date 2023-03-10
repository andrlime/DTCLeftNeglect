import * as React from 'react'
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

interface Config {
    width: number | "100%"; // how wide?
    defaultVal: number;
    title: string;
    labelText: string[]; // label text e.g. "Rotate by"
    applyCallback?: (arg0: number) => void; // callback function: when this is called, you can setState in a parent component
}

export const QualSlider: React.FC<Config> = ({ width, defaultVal, title, labelText, applyCallback }) => {
    // Value of the slider
    const [val, setVal] = React.useState(defaultVal);
    const min = 0;
    const max = labelText.length;
    
    const textView = (
        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={{fontSize: 15, padding: 2, color: "#0C0A00", fontWeight: "800"}}>{title}</Text>
            <Text style={{fontSize: 15, padding: 2, color: "#0C0A00", fontWeight: "700"}}>{labelText[val]}</Text>
        </View>
    )

    return (
        <View style={{display: "flex", flexDirection: "column"}}>
            {textView}
            <Slider
                style={{width: width}}
                minimumValue={min}
                maximumValue={max - 1}
                maximumTrackTintColor="#cccccc"
                minimumTrackTintColor="darkblue"
                step={1}
                value={val}
                onValueChange={(e) => {
                    setVal(Math.round(e));
                    if(applyCallback) {
                        applyCallback(e);
                    }
                }}
            />
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{fontSize: 15, padding: 2, color: "#0C0A00"}}>{labelText[0]}</Text>
                <Text style={{fontSize: 15, padding: 2, color: "#0C0A00"}}>{labelText[labelText.length-1]}</Text>
            </View>
            <View style={{padding: 10}}></View>
        </View>
    );
};

export default QualSlider;
