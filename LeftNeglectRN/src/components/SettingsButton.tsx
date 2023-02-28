import * as React from 'react'
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Link } from 'react-router-native';

export const SettingsButton: React.FC = () => {
    const DIM = 24;
    return (
        <Link to={"/settings"}>
            <View>
                <Svg width={DIM} height={DIM} viewBox={`0 0 ${DIM} ${DIM}`} fill="none">
                    <Path
                        d={`M22.8,13.5v-2.9c-1.5-0.5-2.4-0.7-2.9-1.8v0c-0.5-1.1,0.1-1.9,0.8-3.3l-2.1-2.1c-1.4,0.7-2.2,1.2-3.3,0.8h0
                        c-1.1-0.5-1.3-1.4-1.8-2.9h-2.9C10,2.7,9.9,3.6,8.7,4.1h0C7.6,4.6,6.8,4,5.4,3.4L3.4,5.4C4,6.8,4.6,7.6,4.1,8.7
                        C3.6,9.9,2.7,10,1.2,10.5v2.9c1.5,0.5,2.4,0.7,2.9,1.8c0.5,1.2-0.1,1.9-0.8,3.3l2.1,2.1c1.4-0.7,2.2-1.2,3.3-0.8h0
                        c1.1,0.5,1.3,1.4,1.8,2.9h2.9c0.5-1.5,0.7-2.4,1.8-2.9h0c1.1-0.5,1.9,0.1,3.3,0.8l2.1-2.1c-0.7-1.4-1.2-2.2-0.8-3.3
                        C20.4,14.1,21.3,14,22.8,13.5z M12,15.6c-2,0-3.6-1.6-3.6-3.6S10,8.4,12,8.4s3.6,1.6,3.6,3.6S14,15.6,12,15.6z`}
                        fill={"purple"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </Svg>
            </View>
        </Link>
    );
};

export default SettingsButton;
