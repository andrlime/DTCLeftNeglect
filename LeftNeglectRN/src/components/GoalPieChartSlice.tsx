import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import PieChartSlice from './PieChartSlice'
import AngleIcon from '../../assets/AngleIcon'
import { colors } from '../styles'
import TimeIcon from '../../assets/TimeIcon'

const pieChartSliceProps = {
    backgroundColor: colors.Grayscale.Input,
    strokeWidth: 30
}

interface Props {
    goalType: string // angle/time
    currentValue: number // user's current attained value of their goal (angle/time)
    goalValue: number // the goal value that the user is trying to achieve (angle/time)
    sidelength: number // side length of the container, passed directly to PieChartSlice as well
}

export const GoalPieChartSlice: React.FC<Props> = ({ goalType, currentValue, goalValue, sidelength }) => {

    // All of these functions return different values depending on goalType
    const getTheta = ():number => {
        if (goalType == "time") {
            if (currentValue <= goalValue) return 359; // Rendering issue if theta >= 360
            return goalValue / currentValue * 360;
        }
        if (currentValue >= goalValue) return 359;
        return currentValue / goalValue * 360;
    };

    const renderIcon = ():React.ReactElement => {
        if (goalType == "angle") return <AngleIcon />;
        else if (goalType == "time") return <TimeIcon />;
        return <Text>Goal icon undefined (see goalType prop)</Text>;
    };

    const renderText = ():React.ReactElement  => {
        if (goalType == "angle") return <Text style={styles.text}>{`${currentValue}°/${goalValue}°`}</Text>;
        else if (goalType == "time") return <Text style={styles.text}>{`${currentValue}/${goalValue} SEC`}</Text>;
        return <Text>Goal text undefined (see goalType prop)</Text>;
    };

    const getFillColor = ():string => {
        const FILL_COLORS = {
            ANGLE: colors.Secondary.Default_Weak,
            TIME: colors.Primary.Default
        };
        if (goalType == "angle") return FILL_COLORS.ANGLE;
        else if (goalType == "time") return FILL_COLORS.TIME;
        return "red";
    };

    return (<View style={{...styles.container, height: sidelength, width: sidelength, transform: [{ translateX: (sidelength * -0.5)}, { translateY: (sidelength * -0.5) }]}}>
        <View style={{ position: "absolute" }}>
            <PieChartSlice label={""} {...pieChartSliceProps} sidelength={sidelength} fillColor={getFillColor()} theta={getTheta()} />
        </View>
        <View style={styles.alignmentView}>{renderIcon()}</View>
        <View style={styles.alignmentView}>{renderText()}</View>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: "50%",
        top: "50%",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 15,
    },
    alignmentView: {
        height: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: colors.Grayscale.Background,
        fontSize: 14,
        fontWeight: "600",
    }
});

export default GoalPieChartSlice;
