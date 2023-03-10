import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ChartCard from "./ChartCard"
import GoalSettingsButton from "./GoalSettingsButton"
import PieChartSlice from './PieChartSlice'

const CircleProgressChart: React.FC = ({}) => {
    return <ChartCard>
        <GoalSettingsButton />
        
    </ChartCard>
}

export default CircleProgressChart