import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import RoutingButton from '../components/RoutingButton';

export const SetupBluetooth: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Instructions can go here</Text>
            <RoutingButton bgcolor={"purple"} outline={false} text={"Next"} route={"/"} ifValid={() => {}}/>
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
