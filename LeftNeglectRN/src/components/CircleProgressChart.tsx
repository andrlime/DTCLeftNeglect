import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ChartCard from "./ChartCard"
import GoalSettingsButton from "./GoalSettingsButton"
import GoalPieChartSlice from './GoalPieChartSlice'
import { proportions, colors } from "../styles"

const LOCAL_PROPORTIONS = {
    INNER_SLICE: proportions.StandardComponent.width - 120,
    OUTER_SLICE: proportions.StandardComponent.width - 30
}

interface ProgressPercentageProps {
    percentageProgress: number // 1-100
}

interface Props {
    timeCurrent: number // See <GoalPieChartSlice /> Props interface
    timeGoal: number
    angleCurrent: number
    angleGoal: number
}

const ProgressPercentage: React.FC<ProgressPercentageProps> = ({ percentageProgress }) => {
    return <View style={progressPercentageStyles.container}>
        <Text style={progressPercentageStyles.percentage}>{percentageProgress}%</Text>
        <Text style={progressPercentageStyles.progress}>Progress</Text>
    </View>
}

export const CircleProgressChart: React.FC<Props> = ({ timeCurrent, timeGoal, angleCurrent, angleGoal }) => {
    const PERCENTAGE_PROGRESS = Math.round(100*(0.5 * timeGoal/timeCurrent + 0.5 * angleCurrent/angleGoal))

    return <ChartCard>
        <GoalSettingsButton />
        <View style={styles.pieChartContainer}>
            <GoalPieChartSlice goalType="time" currentValue={timeCurrent} goalValue={timeGoal} sidelength={LOCAL_PROPORTIONS.INNER_SLICE}/>
            <GoalPieChartSlice goalType="angle" currentValue={angleCurrent} goalValue={angleGoal} sidelength={LOCAL_PROPORTIONS.OUTER_SLICE}/>
            <ProgressPercentage percentageProgress={PERCENTAGE_PROGRESS}/>
        </View>
    </ChartCard>
}

const styles = StyleSheet.create({
    pieChartContainer: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center"
    },
})

const progressPercentageStyles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    percentage: {
        fontSize: 28,
        fontWeight: "800",
        color: colors.Secondary.Default_Strong
    },
    progress: {
        fontSize: 18,
        fontWeight: "600"
    }
})

export default CircleProgressChart