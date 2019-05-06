import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

export const Footer = ({ styles, activePage, onUpdatePage }) => (
  <View style={styles.footer}>
    <TouchableOpacity
      onPress={() => {
        onUpdatePage(1);
      }}
      style={[styles.navitem, activePage === 1 && styles.activenav]}
    >
      <Image
        source={require("../img/001-clock.png")}
        style={activePage === 1 && styles.activeimg}
      />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => {
        onUpdatePage(2);
      }}
      style={[styles.navitem, activePage === 2 && styles.activenav]}
    >
      <Image
        source={require("../img/008-add.png")}
        style={activePage === 2 && styles.activeimg}
      />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => {
        onUpdatePage(3);
      }}
      style={[styles.navitem, activePage === 3 && styles.activenav]}
    >
      <Image
        source={require("../img/002-ancient-scroll.png")}
        style={activePage === 3 && styles.activeimg}
      />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => {
        onUpdatePage(4);
      }}
      style={[styles.navitem, activePage === 4 && styles.activenav]}
    >
      <Image
        source={require("../img/006-bar-chart.png")}
        style={activePage === 4 && styles.activeimg}
      />
    </TouchableOpacity>
  </View>
);
