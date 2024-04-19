import React, { useState, useRef } from "react";
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import TicTacToe from "./TicTacToe";
import Global from "./Global.js";

export default function App() {
  console.log(useWindowDimensions());

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "black",
          width: "100%",
          flex: 1,
          justifyContent: "space-between", //Centered vertically
          alignContent: "space-between", //Centered horizontally
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <TicTacToe />
      </View>

      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          flex: 0.2,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          flex: 0.1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
