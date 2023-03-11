import * as React from 'react'
import RN, { View } from 'react-native';
import Svg, { Path, Text, TSpan } from 'react-native-svg';

interface Props {
  theta: number; // Angle
  fillColor: string; // Color of the actual pie
  backgroundColor: string; // Color of background pie
  sidelength: number; // Length of the bounding box
  strokeWidth: number; // Width of stroke
  label: string;
}

export const PieChartSlice: React.FC<Props> = ({ theta, fillColor, sidelength, strokeWidth, label }) => {
    // Angle in radians
    const ANGLE_RAD = (theta * Math.PI) / 180;

    // x/y coords of the center of the box
    const START_POINT = sidelength/2; // width / 2

    // stroke width, can add to config later
    const STROKE_WIDTH = strokeWidth;
    
    // xOut: number -> number
    // gets the x coordinate relative to start_point of the endpoint of an arc of angle angle
    const xOut = (angle: number): number => {
        let a = (START_POINT - STROKE_WIDTH) * (1 + Math.sin(angle)) + STROKE_WIDTH;
        return Math.round(1000*a)/1000;
    };

    // yOut: number -> number
    // gets the y coordinate relative to start_point of the endpoint of an arc of angle angle
    const yOut = (angle: number): number => {
        let a = (START_POINT - STROKE_WIDTH) * (1 - Math.cos(angle)) + STROKE_WIDTH;
        return Math.round(1000*a)/1000;
    };

    // Outer path - the actual pie
    const OUTER_PATH_DATA = `M ${START_POINT} ${STROKE_WIDTH} A ${START_POINT-STROKE_WIDTH} ${START_POINT-STROKE_WIDTH} 0 ${ANGLE_RAD > 3.14 ? 1 : 0} 1 ${xOut(ANGLE_RAD)} ${yOut(ANGLE_RAD)}`;
    
    // Black path - the background
    const BLACK_PATH_DATA = `M ${START_POINT} ${STROKE_WIDTH} A ${START_POINT-STROKE_WIDTH} ${START_POINT-STROKE_WIDTH} 0 1 1 ${xOut(359*2*3.14/360)} ${yOut(359*2*3.14/360)}`;

    return (
        <View>
            {/* <Text style={{position: "relative", top: "50%", textAlign: "center", fontWeight: "800", fontSize: 32}}>{AMOUNT_DONE}%</Text> */}
            <Svg width={sidelength} height={sidelength} fill="none">
                <Path
                    d={BLACK_PATH_DATA}
                    stroke={"#ccccccaa"}
                    strokeWidth={STROKE_WIDTH*0.9}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d={OUTER_PATH_DATA}
                    stroke={fillColor}
                    strokeWidth={STROKE_WIDTH}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Text x={sidelength*0.5} y={sidelength-15} fill={"#FFFFFF"} fontSize={14}><TSpan textAnchor='middle'>{label}</TSpan></Text>
            </Svg>
        </View>
    );
};

export default PieChartSlice;
