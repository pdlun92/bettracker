/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  FlatList
} from "react-native";

import styles from "./styles";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

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

const shadowMap = {
  w: "green",
  l: "red",
  a: "gray"
};

// type Props = {};

export default class App extends Component {
  //<Props> {

  constructor(props) {
    super(props);

    this.state = {
      activePage: 1
    };
  }
  render() {
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

    const { activePage } = this.state;

    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.h1}>The Betting App</Text>
        </View>

        <View style={styles.container}>
          {/* <Text style={styles.instructions}>{instructions}</Text> */}

          <ScrollView>{Bets}</ScrollView>
        </View>

        <View style={styles.footer}>
          <View style={[styles.navitem, activePage === 1 && styles.activenav]}>
            <Text
              onPress={() => {
                this.setState({
                  activePage: 1
                });
              }}
              style={styles.centertext}
            >
              A
            </Text>
          </View>

          <View style={[styles.navitem, activePage === 2 && styles.activenav]}>
            <Text
              onPress={() => {
                this.setState({
                  activePage: 2
                });
              }}
              style={styles.centertext}
            >
              N
            </Text>
          </View>

          <View style={[styles.navitem, activePage === 3 && styles.activenav]}>
            <Text
              onPress={() => {
                this.setState({
                  activePage: 3
                });
              }}
              style={styles.centertext}
            >
              C
            </Text>
          </View>

          <View style={[styles.navitem, activePage === 4 && styles.activenav]}>
            <Text
              onPress={() => {
                this.setState({
                  activePage: 4
                });
              }}
              style={styles.centertext}
            >
              G
            </Text>
          </View>
        </View>
      </View>
    );
  }
}