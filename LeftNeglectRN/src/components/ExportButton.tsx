import * as React from 'react'
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export const ExportButton: React.FC = () => {
    const DIM = 32;
    return (
        <View>
            <Svg width={DIM} height={DIM} viewBox={`0 0 ${DIM} ${DIM}`} fill="none">
                <Path d="M24 12L16 4L8 12" stroke="black" stroke-width="0.5"/>
                <Path d="M28 28H4" stroke="black" stroke-width="0.5"/>
                <Path d="M16 24V4" stroke="black" stroke-width="0.5"/>
            </Svg>
        </View>
    );
};

export default ExportButton;
