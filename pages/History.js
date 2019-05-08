import React from "react";
import { Text, ScrollView } from "react-native";

import BetItem from "../components/BetItem";

export class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, data: [] };
  }

  render() {
    return (
      <ScrollView>
        <BetItem styles={this.props.styles} />
      </ScrollView>
    );
  }
}
