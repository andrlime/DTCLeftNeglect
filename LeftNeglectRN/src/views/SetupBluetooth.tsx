import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import RoutingButton from '../components/RoutingButton';

export const SetupBluetooth: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={{padding: 10}}>Instructions to connect to Bluetooth will go here, and is a step for future development.</Text>
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
