import React from "react";
import { Text, ScrollView } from "react-native";
import { PieChart } from "react-native-svg-charts";
import { Circle, G, Image } from "react-native-svg";

import AreaStackWithAxisExample from "../components/StackedAreaChart";

const data = [
  {
    key: 1,
    value: 50,
    svg: { fill: "#600080" },
    arc: { outerRadius: "140%", cornerRadius: 10 }
  },
  {
    key: 2,
    value: 50,
    svg: { fill: "#9900cc" }
  },
  {
    key: 3,
    value: 40,
    svg: { fill: "#c61aff" }
  },
  {
    key: 4,
    value: 95,
    svg: { fill: "#d966ff" }
  },
  {
    key: 5,
    value: 35,
    svg: { fill: "#ecb3ff" }
  }
];

const Labels = ({ slices, height, width }) => {
  return slices.map((slice, index) => {
    const { labelCentroid, pieCentroid, data } = slice;
    return (
      <G key={index} x={labelCentroid[0]} y={labelCentroid[1]}>
        <Circle r={5} fill={"white"} />
      </G>
    );
  });
};

export class Analyze extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, data: [] };
  }

  render() {
    return (
      <ScrollView>
        <PieChart
          style={{ height: 200 }}
          outerRadius={"70%"}
          innerRadius={10}
          data={data}
        >
          <Labels />
        </PieChart>
        <AreaStackWithAxisExample />
      </ScrollView>
    );
  }
}
