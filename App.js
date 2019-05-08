/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
// import shortid from "shortid";

import {
  Platform,
  Text,
  View,
  ScrollView,
  Alert,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";

// import AsyncStorage from "@react-native-community/async-storage";
import styles from "./styles";
import { Footer } from "./shared/Footer";
import { Active } from "./pages/Active";
import { Analyze } from "./pages/Analyze";

// type Props = {};

export default class App extends Component {
  //<Props> {

  constructor(props) {
    super(props);

    this.state = {
      activePage: 4
    };
  }
  render() {
    const { activePage } = this.state;

    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.h1}>The Betting App</Text>
        </View>

        <View style={styles.container}>
          {/* <Text style={styles.instructions}>{instructions}</Text> */}

          {(function() {
            switch (activePage) {
              case 1:
                return <Active styles={styles} />;
              case 2:
                return <Text>Page 2</Text>;
              case 3:
                return <Text>Page 3</Text>;
              case 4:
                return <Analyze />;
              default:
                return null;
            }
          })()}
        </View>

        <Footer
          styles={styles}
          activePage={activePage}
          onUpdatePage={page => {
            this.setState({
              activePage: page
            });
          }}
        />
      </View>
    );
  }
}
