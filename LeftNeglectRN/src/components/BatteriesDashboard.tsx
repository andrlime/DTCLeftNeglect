import * as React from 'react'
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PieChartSlice from './PieChartSlice'

interface Props {
    glassesBattery: number // Glasses battery level, %
    clipBattery: number // Clip battery level, %
}

interface DeviceBatteryProps {
    batteryLevel: number, // Abstract device battery level, %
    deviceName: string // Device that <DeviceBattery /> is displaying
}

// Dimensions
const getWidth = () => (Dimensions.get("screen").width * 0.8) // Width of component, pixels (component = <BatteriesDashboard />)
const getHeight = () => getWidth() * 0.7 // Height of component, pixels (required because gradient doesn't scale with padding)
const getDeviceBatteryWidth = () => getWidth() * 0.4 // Width of <DeviceBattery />, pixels (excluding whitespace)

const DeviceBattery: React.FC<DeviceBatteryProps> = ({ batteryLevel, deviceName }) => {
    const WIDTH = getDeviceBatteryWidth()

    const FILL_COLORS = {
        green: "#A6F787",
        yellow: "#FFF065"
    }
    const TEXT_COLORS = {
        green: "#008A00",
        yellow: "#EAAC30"
    }
    const IMAGE_DIMENSIONS = {
        glasses: {
            height: WIDTH * 0.2,
            width: 2.97 * WIDTH * 0.2
        },
        clip: {
            height: WIDTH * 0.4,
            width: WIDTH * 0.4
        }
    }

    const THETA = batteryLevel / 100 * 360 // Angle, degrees
    const FILL_COLOR = batteryLevel > 50 ? FILL_COLORS.green : FILL_COLORS.yellow // Change fill color according to battery level
    const TEXT_COLOR = batteryLevel > 50 ? TEXT_COLORS.green : TEXT_COLORS.yellow // Change text color according to battery level
    
    const getImageHeight = () => { // Get appropriately scaled height of image
        if (deviceName == "Glasses") return IMAGE_DIMENSIONS.glasses.height
        else if (deviceName == "Clip") return IMAGE_DIMENSIONS.clip.height
        return 0
    }
    const getImageWidth = () => { // Get appropriately scaled width of image
        if (deviceName == "Glasses") return IMAGE_DIMENSIONS.glasses.width
        else if (deviceName == "Clip") return IMAGE_DIMENSIONS.clip.width
        return 0
    }
    const getIcon = () => { // Return icon corresponding to device name
        if (deviceName == "Glasses") return require("../../assets/glasses.png")
        else if (deviceName == "Clip") return require("../../assets/clip.png")
    }

    return <View style={deviceBatteryStyles.container}>
        <View>
            <Image source={getIcon()} style={{ width: getImageWidth(), height: getImageHeight(), transform: [{ translateX: getImageWidth() * -0.5}, { translateY: getImageHeight() * -0.5 }], ...deviceBatteryStyles.icon}}/>
            <PieChartSlice fillColor={FILL_COLOR} backgroundColor={"#FCFCFC"} theta={THETA} sidelength={WIDTH} strokeWidth={10}/>
        </View>
        <View style={deviceBatteryStyles.verticalSpacing}/>
        <Text style={{ color: TEXT_COLOR, textAlign: "center", fontWeight: "bold" }}>{deviceName}{"\n"}Battery: {batteryLevel}%</Text>
    </View>
}

export const BatteriesDashboard: React.FC<Props> = ({ glassesBattery, clipBattery }) => {
    return <View style={[styles.container, { width: getWidth() }]} >
        <LinearGradient colors={['#F0F8FF', '#D6FFE4']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.gradient}/>
        <DeviceBattery batteryLevel={glassesBattery} deviceName={"Glasses"}/>
        <View style={styles.centerSpacing}/>
        <DeviceBattery batteryLevel={clipBattery} deviceName={"Clip"}/>
    </View>
}

export default BatteriesDashboard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: getHeight(),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    gradient: {
        borderRadius: 20,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: getHeight(),
    },
    centerSpacing: {
        width: "5%"
    },
})

const deviceBatteryStyles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    verticalSpacing:{
        height: 10
    },
    icon: {
        position: 'absolute',
        alignSelf: "center",
        top: "50%",
        left: "50%",
    },
})