import * as React from 'react'
import { View, FlatList } from 'react-native'
import ChartCard from "./ChartCard"
import GoalSettingsButton from "./GoalSettingsButton"

const CircleProgressChart: React.FC = ({}) => {
    return <View style={{padding: 10}}>
            <GoalSettingsButton/>
            <FlatList style={{flexGrow: 0}} horizontal data={["Overall Progress", "Time To Look Left", "Look Left At Least"]} renderItem={(e) => {
                if(e.item === "Overall Progress") {
                    return (
                        <ChartCard data={e.item} timeCurrent={7} timeGoal={7} angleCurrent={60} angleGoal={80}/>
                    );
                } else {
                    return (
                        <ChartCard data={e.item}/>
                    );
                }
            }}/>
        </View>
}

export default CircleProgressChart