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
    result: "w"
  },
  {
    value: 2,
    result: "w"
  },
  {
    value: 3,
    result: "l"
  },
  {
    value: 4,
    result: "a"
  },
  {
    value: 5,
    result: "a"
  },
  {
    value: 6,
    result: "l"
  },
  {
    value: 7,
    result: "w"
  },
  {
    value: 8,
    result: "a"
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

export class Active extends React.Component {
  render() {
    const { styles } = this.props;
    const Bets = thebets.map(bet => {
      return (
        <View
          key={bet.value}
          style={[styles.betitem, { shadowColor: shadowMap[bet.result] }]}
        >
          <Text>Bet # {bet.value}</Text>
        </View>
      );
    });

    return <ScrollView>{Bets}</ScrollView>;
  }
}
