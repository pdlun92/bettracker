import React from "react";
import { View, Text } from "react-native";

const bet = {
  bettor_id: 123,
  league_id: 3,
  to_risk: 400,
  to_win: 350,
  result: "w",
  bet_odds: "-105",
  bet_lines: "+0.5",
  bet_type: "spread",
  team1: ""
};

class BetItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <View
        key={bet.bet_id}
        style={[styles.betitem, { shadowColor: shadowMap[bet.result] }]}
      >
        <Text>Bet # {bet.bet_id}</Text>
      </View>
    );
  }
}

export default BetItem;
