// Authored by ChatGPT and Andrew Li for NU Fintech Club
// Modified for use for DTC 1
// Comments by Andrew Li

import React from 'react';
import { View, Text } from 'react-native';
import * as d3 from 'd3';
import { Svg, Path, G, Line, Circle } from 'react-native-svg';

type Data = {
    x: number;
    y: number;
}

export type LineMetricProps = {
    unsortedData: Data[];
    width: number;
    height: number;
    color?: string;
    xlabel: string;
    ylabel: string;
}

const FTLineMetric: React.FC<LineMetricProps> = ({ unsortedData, width, height, color = "#4E2A84", xlabel, ylabel }) => {
    const margin = { top: 10, right: 10, bottom: 10, left: 10 };
    const graphWidth = width - margin.left - margin.right;
    const graphHeight = height - margin.top - margin.bottom;
    
    const xScale = d3.scaleLinear()
    .domain(d3.extent(unsortedData, d => d.x) as [number, number])
    .range([0, graphWidth]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(unsortedData, d => d.y) as number])
        .range([graphHeight, 0]);

    const lineGenerator = d3.line<Data>()
        .x(d => xScale(d.x))
        .y(d => yScale(d.y));

  const pathData = lineGenerator(unsortedData);

    return (<View>
        <Svg width={width} height={height}>
          <G x={margin.left} y={margin.top}>
            <Path d={pathData + ""} fill="none" stroke={color} strokeWidth={2} />
            <Line x1={0} y1={graphHeight} x2={graphWidth} y2={graphHeight} stroke="black" />
            <Line x1={0} y1={0} x2={0} y2={graphHeight} stroke="black" />
            {unsortedData.map((d, i) => (
              <Circle key={i} cx={xScale(d.x)} cy={yScale(d.y)} r={4} fill={color} />
            ))}
          </G>
        </Svg>
        <View><Text style={{textAlign: "center"}}>{xlabel}</Text></View>
        <View style={{position: "absolute", left: -35, top: 125}}><Text style={{textAlign: "center", transform: [{rotate: '-90deg'}]}}>{ylabel}</Text></View>
      </View>);
};

export default FTLineMetric;
