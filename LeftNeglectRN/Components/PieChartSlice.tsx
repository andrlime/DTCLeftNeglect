import * as React from 'react'
import { View, Text } from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';

interface Props {
  theta: number;
  fillColor: string;
  sidelength: number;
}

export const PieChartSlice: React.FC<Props> = ({ theta, fillColor, sidelength }) => {
    const angleRad = (theta * Math.PI) / 180;
    const START_POINT = sidelength/2; // width / 2
    const STROKE_WIDTH = 45;
    
    const xOut = (angle: number) => {
        let a = (START_POINT - STROKE_WIDTH) * (1 + Math.sin(angle)) + STROKE_WIDTH;
        return Math.round(1000*a)/1000;
    };

    const yOut = (angle: number) => {
        let a = (START_POINT - STROKE_WIDTH) * (1 - Math.cos(angle)) + STROKE_WIDTH;
        return Math.round(1000*a)/1000;
    };

    const OUTER_PATH_DATA = `M ${START_POINT} ${STROKE_WIDTH} A ${START_POINT-STROKE_WIDTH} ${START_POINT-STROKE_WIDTH} 0 ${angleRad > 3.14 ? 1 : 0} 1 ${xOut(angleRad)} ${yOut(angleRad)}`;
    const BLACK_PATH_DATA = `M ${START_POINT} ${STROKE_WIDTH} A ${START_POINT-STROKE_WIDTH} ${START_POINT-STROKE_WIDTH} 0 1 1 ${xOut(359*2*3.14/360)} ${yOut(359*2*3.14/360)}`;
    const AMOUNT_DONE = Math.round(1000*theta/360)/10;

    return (
        <View>
            <Text style={{position: "relative", top: "50%", textAlign: "center", fontWeight: "800", fontSize: 32}}>{AMOUNT_DONE}%</Text>
            <Svg width={sidelength} height={sidelength} fill="none">
                <Path
                    d={BLACK_PATH_DATA}
                    stroke={"#ccccccaa"}
                    strokeWidth={STROKE_WIDTH*0.8}
                    strokeLinecap="square"
                    strokeLinejoin="round"
                />
                <Path
                    d={OUTER_PATH_DATA}
                    stroke={fillColor}
                    strokeWidth={STROKE_WIDTH}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    );
};

export default PieChartSlice;
