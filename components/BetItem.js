import React from "react";
import { View, Text } from "react-native";

const bet = {
  bet_id: 1,
  bettor_id: 123,
  league_id: 3,
  to_risk: 400,
  to_win: 350,
  result: "w",
  bet_odds: "-105",
  bet_lines: "+0.5",
  bet_type: "spread",
  team1: "Portland Trail Blazers",
  away_team: "Portland Trail Blazers",
  home_team: "Denver Nuggets"
};

const shadowMap = {
  w: "green",
  l: "red",
  a: "gray"
};

const leageMap = {
  1: "MLB",
  2: "NFL",
  3: "NBA"
};

class BetItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    const { styles } = this.props;
    const { team1, bet_lines, bet_odds, away_team, home_team } = bet;
    return (
      <View
        key={bet.bet_id}
        style={[styles.betitem, { shadowColor: shadowMap[bet.result] }]}
      >
        <Text
          style={styles.betHead}
        >{`${team1}\n${bet_lines} (${bet_odds})`}</Text>
        <Text style={styles.matchup}>{`${away_team} @ ${home_team}`}</Text>
      </View>
    );
  }
}

export default BetItem;
