import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { shadows, proportions } from "../styles"

interface Props {
    children?: React.ReactNode
}

const ChartCard: React.FC<Props> = ({ children }) => <View style={styles.container}>
    {children}
</View>

const styles = StyleSheet.create({
    container: {
        height: proportions.StandardComponent.width,
        width: proportions.StandardComponent.width,
        borderRadius: proportions.StandardComponent.borderRadius,
        ...shadows.defaultShadow,
        padding: 10,
        backgroundColor: "white"
    }
})

export default ChartCard