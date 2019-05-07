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
    bet_id: 1,
    result: "w"
  },
  {
    bet_id: 2,
    result: "w"
  },
  {
    bet_id: 3,
    result: "l"
  },
  {
    bet_id: 4,
    result: "a"
  },
  {
    bet_id: 5,
    result: "a"
  },
  {
    bet_id: 6,
    result: "l"
  },
  {
    bet_id: 7,
    result: "w"
  },
  {
    bet_id: 8,
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
  constructor(props) {
    super(props);
    this.state = { isLoading: true, bets: [] };
  }

  componentDidMount() {
    return fetch("http://localhost:3050/bets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        bettor_id: 123
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          bets: responseJson
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
          bets: thebets
        });
      });
  }

  render() {
    const { styles } = this.props;
    const { bets, isLoading } = this.state;

    const Bets = bets.map(bet => {
      return (
        <View
          key={bet.bet_id}
          style={[styles.betitem, { shadowColor: shadowMap[bet.result] }]}
        >
          <Text>Bet # {bet.bet_id}</Text>
        </View>
      );
    });

    return isLoading ? (
      <Text>Loading...</Text>
    ) : (
      <ScrollView>{Bets}</ScrollView>
    );
  }
}
