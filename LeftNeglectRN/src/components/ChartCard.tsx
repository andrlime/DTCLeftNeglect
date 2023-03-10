import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { proportions } from "../styles"
import FTLineMetric from './FTLineMetric';
import PieChartSlice from './PieChartSlice';

interface Props {
    data: string
}

const ChartCard: React.FC<Props> = ({ data }) => {
  switch(data) {
    case "Overall Progress":
        return (<View style={styles.container}>
            <Text style={{fontWeight: "800", fontSize: 24, color: "#4E2A84", position: "absolute", top: 10}}>{data}</Text>
            <View style={{display: "flex", justifyContent: "center", alignItems: "center", top: 15}}>
                <View style={{position: "absolute"}}><PieChartSlice label='40º/60º' theta={300} fillColor={"#5091CD"} backgroundColor={"#FFFFFF"} sidelength={270} strokeWidth={20}/></View>
                <View style={{position: "absolute"}}><PieChartSlice label='8/6 secs' theta={240} fillColor={"#4E2A84"} backgroundColor={"#FFFFFF"} sidelength={200} strokeWidth={20}/></View>
                <View style={{position: "absolute"}}><Text style={{textAlign: "center"}}><Text style={{fontWeight: "800", fontSize: 28}}>70%</Text>{"\n"}Progress</Text></View>
            </View>
        </View>);
    case "Time To Look Left":
        return (<View style={styles.container}>
            <Text style={{fontWeight: "800", fontSize: 24, color: "#4E2A84"}}>{data}</Text>
            <FTLineMetric width={250} height={250} unsortedData={[{x: 3, y: 3}, {x: 4, y: 5}, {x: 5, y: 2}, {x: 6, y: 1}]} xlabel={"Time"} ylabel={"Seconds"}/>
        </View>);
    case "Look Left At Least":
        return (<View style={styles.container}>
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
        alignItems: "center"
    }
})

export default ChartCard