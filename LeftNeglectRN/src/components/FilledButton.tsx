import * as React from 'react'
import { View, Text, TouchableHighlight } from 'react-native';

interface Props {
    bgcolor: string,
    outline: boolean,
    text: string,
    onPress: () => void
}

export const FilledButton: React.FC<Props> = ({ bgcolor, outline, text, onPress }) => {
    // Known issues
    // If bg color is too light, the button text will still be white --> hard to read
    // Solution: use a dark color
    // outline also is not implemented yet
    return (
        <View style={{display: "flex", justifyContent: "center", alignItems: "center", margin: 8}}>
            <TouchableHighlight onPress={onPress}>
                <View style={{backgroundColor: outline ? "#FFFFFF" : bgcolor, paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, borderRadius: 8}}>
                    <Text style={{color: outline ? "#000000" : "#FFFFFF", fontSize: 18}}>{text}</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

export default FilledButton;
