import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Svg, { Path } from 'react-native-svg';
import { colors } from '../styles'

const GoalSettingsButton: React.FC = ({}) => {
    const DIM = 24
    return <Link to={"/settings"}>
        <View style={styles.container}>
            <Svg width={DIM} height={DIM} viewBox={`0 0 ${DIM} ${DIM}`} fill="none">
                <Path
                d="M14.291 11a3.328 3.328 0 01-3.322 3.334A3.328 3.328 0 017.646 11a3.328 3.328 0 013.323-3.333A3.328 3.328 0 0114.29 11z"
                stroke="#610BEF"
                strokeWidth={2}
                />
                <Path
                d="M9.543 2.553a1.659 1.659 0 012.85 0l.587.981a1.66 1.66 0 001.829.76l1.106-.278c1.218-.306 2.32.8 2.016 2.022l-.277 1.11c-.178.712.13 1.457.757 1.834l.979.589a1.67 1.67 0 010 2.859l-.979.588a1.669 1.669 0 00-.757 1.835l.277 1.11c.305 1.22-.798 2.328-2.016 2.021l-1.106-.278a1.66 1.66 0 00-1.829.76l-.586.982a1.659 1.659 0 01-2.85 0l-.587-.982a1.66 1.66 0 00-1.829-.76l-1.106.278c-1.218.306-2.32-.8-2.016-2.021l.278-1.11a1.669 1.669 0 00-.758-1.835l-.978-.588a1.67 1.67 0 010-2.86l.978-.588a1.669 1.669 0 00.758-1.834l-.278-1.11c-.305-1.221.798-2.328 2.016-2.022l1.106.278a1.66 1.66 0 001.83-.76l.585-.981z"
                stroke="#610BEF"
                strokeWidth={2}
                />
            </Svg>
            <View style={styles.centerSpacing}/>
        <Text style={styles.text}>Settings</Text>
        </View>
    </Link>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    centerSpacing: {
        width: 2
    },
    text: {
        fontSize: 20,
        color: colors.Primary.Default,
        fontWeight: "bold"
    }
})

export default GoalSettingsButton