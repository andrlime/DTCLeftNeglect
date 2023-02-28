import * as React from 'react'
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

interface Props {
    bgcolor: string,
    outline: boolean,
    text: string,
    route: string,
    ifValid?: () => void
}

export const RoutingButton: React.FC<Props> = ({ bgcolor, outline, text, route, ifValid }) => {
    // Known issues
    // If bg color is too light, the button text will still be white --> hard to read
    // Solution: use a dark color
    // outline not implemented yet
    return (
        <View style={{display: "flex", justifyContent: "center", alignItems: "center", margin: 8}}>
            <Link to={route} onPress={ifValid}>
                <View style={{backgroundColor: outline ? "#FFFFFF" : bgcolor, paddingLeft: 12, paddingRight: 12, paddingTop: 6, paddingBottom: 6, borderRadius: 8}}>
                    <Text style={{color: outline ? "#000000" : "#FFFFFF", fontSize: 18}}>{text}</Text>
                </View>
            </Link>
        </View>
    );
};

export default RoutingButton;
