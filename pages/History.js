import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Platform,
  Text,
  ScrollView
} from "react-native";

const thebets = [
  {
    value: 1,
    result: "w",
    risk: 20
  },
  {
    value: 2,
    result: "w",
    risk: 20
  },
  {
    value: 3,
    result: "l",
    risk: 20
  },
  {
    value: 4,
    result: "a",
    risk: 20
  },
  {
    value: 5,
    result: "a",
    risk: 20
  },
  {
    value: 6,
    result: "l",
    risk: 20
  },
  {
    value: 7,
    result: "w",
    risk: 20
  },
  {
    value: 8,
    result: "a",
    risk: 20
  }
];

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const shadowMap = {
  w: "green",
  l: "red",
  a: "gray"
};

export class History extends React.Component {
  render() {
    const { styles } = this.props;
    const Bets = thebets.map(bet => {
      if (bet.result != "a") {
        return (
          <View
            key={bet.value}
            style={[styles.betitem, { shadowColor: shadowMap[bet.result] }]}
          >
            <Text>Bet # {bet.value}</Text>
            <Text>Risk: {bet.risk}</Text>
          </View>
        );
      }
    });

    return <ScrollView>{Bets}</ScrollView>;
  }
}
