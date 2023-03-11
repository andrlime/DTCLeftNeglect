import * as React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import PieChartSlice from './PieChartSlice'
import { colors, shadows, proportions } from "../styles"

interface DeviceBatteryProps {
    batteryLevel: number, // Abstract device battery level, %
    deviceName: string // Device that <DeviceBattery /> is displaying
}

interface Props {
    glassesBattery: number // Glasses battery level, % (1-100)
    clipBattery: number // Clip battery level, %
}

// Dimensions
const WIDTH = proportions.StandardComponent.width // Width of <BatteriesDashboard />, pixels
const HEIGHT = WIDTH * 0.7 // Height of <BatteriesDashboard />, pixels (required because gradient doesn't scale when <BatteriesDashboard /> is padded)
const DEVICE_BATTERY_WIDTH = WIDTH * 0.4 // Width of <DeviceBattery />, pixels

const DeviceBattery: React.FC<DeviceBatteryProps> = ({ batteryLevel, deviceName }) => {
    const WIDTH = DEVICE_BATTERY_WIDTH

    const FILL_COLORS = {
        green: colors.Success.Default_Weak,
        yellow: colors.Custom.Yellow,
        red: colors.Custom.Red
    }

    const TEXT_COLORS = {
        green: colors.Success.Default,
        yellow: colors.Warning.Default,
        red: colors.Custom.Darker_Red,
    }

    const IMAGE_DIMENSIONS = {
        glasses: {
            height: DEVICE_BATTERY_WIDTH * 0.175,
            width: DEVICE_BATTERY_WIDTH * 0.175 * 2.97
        },
        clip: {
            height: DEVICE_BATTERY_WIDTH * 0.4,
            width: DEVICE_BATTERY_WIDTH * 0.4
        }
    }

    // const THETA = batteryLevel / 100 * 360 // Angle, degrees
    // const FILL_COLOR = batteryLevel > 50 ? FILL_COLORS.green : FILL_COLORS.yellow // Change fill color according to battery level
    // const TEXT_COLOR = batteryLevel > 50 ? TEXT_COLORS.green : TEXT_COLORS.yellow // Change text color according to battery level
    
    const getTheta = () => batteryLevel > 99 ? 359 : batteryLevel / 100 * 359 // Angle, degrees (rendering issue if theta >= 360)

    const getFillColor = () => { // Change fill color according to battery level
        if (batteryLevel > 50) return FILL_COLORS.green
        else if (batteryLevel > 10) return FILL_COLORS.yellow
        return FILL_COLORS.red
    }
    const getTextColor = () => { // Change fill color according to battery level
        if (batteryLevel > 50) return TEXT_COLORS.green
        else if (batteryLevel > 10) return TEXT_COLORS.yellow
        return TEXT_COLORS.red
    } 

    const getIconHeight = () => { // Get appropriately scaled height of image
        if (deviceName == "Glasses") return IMAGE_DIMENSIONS.glasses.height
        else if (deviceName == "Clip") return IMAGE_DIMENSIONS.clip.height
        return 0
    }
    const getIconWidth = () => { // Get appropriately scaled width of image
        if (deviceName == "Glasses") return IMAGE_DIMENSIONS.glasses.width
        else if (deviceName == "Clip") return IMAGE_DIMENSIONS.clip.width
        return 0
    }
    const getIcon = () => { // Return icon corresponding to device name
        if (deviceName == "Glasses") return require("../../assets/glasses.png")
        else if (deviceName == "Clip") return require("../../assets/clip.png")
        return <Text>No Icon - Incorrect "deviceName" prop in "DeviceBattery" component</Text>
    }

    return <View style={deviceBatteryStyles.container}>
        <View style={{ alignItems: "center" }}>
            <Image source={getIcon()} style={{ width: getIconWidth(), height: getIconHeight(), transform: [{ translateX: (getIconWidth() * -0.5)}, { translateY: (getIconHeight() * -0.5) }], ...deviceBatteryStyles.icon}}/>
            <PieChartSlice label={""} fillColor={getFillColor()} backgroundColor={"#FCFCFC"} theta={getTheta()} sidelength={WIDTH} strokeWidth={10}/>
        </View>
        <View style={deviceBatteryStyles.verticalSpacing}/>
        <Text style={{ color: getTextColor(), textAlign: "center", fontWeight: "bold" }}>{deviceName}{"\n"}Battery: {batteryLevel}%</Text>
    </View>
}

export const BatteriesDashboard: React.FC<Props> = ({ glassesBattery, clipBattery }) => {
    return <View style={[styles.container, { width: WIDTH }]} >
        <LinearGradient colors={['#F0F8FF', '#D6FFE4']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.gradient}/>
        <DeviceBattery batteryLevel={glassesBattery} deviceName={"Glasses"}/>
        <View style={styles.centerSpacing}/>
        <DeviceBattery batteryLevel={clipBattery} deviceName={"Clip"}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: HEIGHT,
        ...shadows.defaultShadow
    },
    gradient: {
        borderRadius: proportions.StandardComponent.borderRadius,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: HEIGHT,
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

export default BatteriesDashboard