import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import FTLineMetric from './FTLineMetric';
import GoalPieChartSlice from './GoalPieChartSlice'
import { proportions, colors } from "../styles"

const LOCAL_PROPORTIONS = {
    INNER_SLICE: proportions.StandardComponent.width - 120,
    OUTER_SLICE: proportions.StandardComponent.width - 30
}

interface Props {
    data: string,
    timeCurrent?: number // See <GoalPieChartSlice /> Props interface
    timeGoal?: number
    angleCurrent?: number
    angleGoal?: number
}

const ChartCard: React.FC<Props> = ({ data, timeCurrent=0, timeGoal=0, angleCurrent=0, angleGoal=0 }) => {
    const PERCENTAGE_PROGRESS = Math.round(100*(0.5 * timeGoal/timeCurrent + 0.5 * angleCurrent/angleGoal));
    switch(data) {
        case "Overall Progress":
            return (<View style={styles.container}>
                <Text style={{fontWeight: "800", fontSize: 24, color: "#4E2A84", position: "absolute", top: 8, alignSelf: 'center'}}>{data}</Text>
                <View style={styles.pieChartContainer}>
                    <GoalPieChartSlice goalType="time" currentValue={timeCurrent} goalValue={timeGoal} sidelength={LOCAL_PROPORTIONS.INNER_SLICE}/>
                    <GoalPieChartSlice goalType="angle" currentValue={angleCurrent} goalValue={angleGoal} sidelength={LOCAL_PROPORTIONS.OUTER_SLICE}/>
                    <View style={progressPercentageStyles.container}>
                        <Text style={progressPercentageStyles.percentage}>{PERCENTAGE_PROGRESS}%</Text>
                        <Text style={progressPercentageStyles.progress}>Progress</Text>
                    </View>
                </View>
            </View>);
        case "Time To Look Left":
            return (<View style={styles.cContainer}>
                <Text style={{fontWeight: "800", fontSize: 24, color: "#4E2A84"}}>{data}</Text>
                <FTLineMetric width={250} height={250} unsortedData={[{x: 3, y: 3}, {x: 4, y: 5}, {x: 5, y: 2}, {x: 6, y: 1}]} xlabel={"Time"} ylabel={"Seconds"}/>
            </View>);
        case "Look Left At Least":
            return (<View style={styles.cContainer}>
                <Text style={{fontWeight: "800", fontSize: 24, color: "#4E2A84"}}>{data}</Text>
                <FTLineMetric width={250} height={250} unsortedData={[{x: 3, y: 3}, {x: 4, y: 5}, {x: 5, y: 2}, {x: 6, y: 1}]} xlabel={"Time"} ylabel={"Degrees"}/>
            </View>);
    }  

    return <></>;
};

const styles = StyleSheet.create({
    container: {
        height: proportions.StandardComponent.width,
        width: proportions.StandardComponent.width,
        borderRadius: proportions.StandardComponent.borderRadius,
        borderColor: "#C0C0C0",
        borderWidth: 2,
        padding: 10,
        margin: 10,
        display: "flex",
        justifyContent: 'center',
    },

    cContainer: {
        height: proportions.StandardComponent.width,
        width: proportions.StandardComponent.width,
        borderRadius: proportions.StandardComponent.borderRadius,
        borderColor: "#C0C0C0",
        borderWidth: 2,
        padding: 10,
        margin: 10,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },

    pieChartContainer: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
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

export default ChartCard