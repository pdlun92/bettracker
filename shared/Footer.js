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
        source={require("../img/active.png")}
        style={[activePage === 1 && styles.activeimg, {width: 40, height: 40}]}
      />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => {
        onUpdatePage(2);
      }}
      style={[styles.navitem, activePage === 2 && styles.activenav]}
    >
      <Image
        source={require("../img/new.png")}
        style={[activePage === 2 && styles.activeimg, styles.iconimg]}
      />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => {
        onUpdatePage(3);
      }}
      style={[styles.navitem, activePage === 3 && styles.activenav]}
    >
      <Image
        source={require("../img/history.png")}
        style={[activePage === 3 && styles.activeimg, styles.iconimg]}
      />
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => {
        onUpdatePage(4);
      }}
      style={[styles.navitem, activePage === 4 && styles.activenav]}
    >
      <Image
        source={require("../img/analytics.png")}
        style={[activePage === 4 && styles.activeimg, styles.iconimg]}
      />
    </TouchableOpacity>
  </View>
);
