import React, { setState, useEffect, useState } from "react";
import {
  Alert,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
  StyleSheet,
} from "react-native";
import Global from "./Global.js";

function TicTacToe() {
  let winner = "";
  const initialMap = Array(9).fill("");
  const [board, setBoard] = useState(initialMap);

  useEffect(() => {
    console.log("Scan Board Use Effect");
    logBoardState();
    scanBoard();
  }, [board]);

  function resetBoard() {
    setBoard(Array(9).fill(""));
    Global.playerTurn = 0;
  }

  function logBoardState() {
    console.log(board[0] + " " + board[1] + " " + board[2]);
    console.log(board[3] + " " + board[4] + " " + board[5]);
    console.log(board[6] + " " + board[7] + " " + board[8]);
  }

  function winState() {
    Alert.alert("WINNER!", "Player " + winner + " won the game!", [
      {
        text: "OK",
        onPress: () => {
          if (winner == "X") {
            Global.playerXScore += 1;
            console.log("Player X Score=" + Global.playerXScore);
          } else if (winner == "O") {
            Global.playerOScore += 1;
            console.log("Player O Score=" + Global.playerOScore);
          }
          resetBoard();
        },
      },
    ]);
  }

  function scanBoard() {
    console.log("scanning board");

    if (
      /* top row */
      board[0] != "" &&
      board[1] != "" &&
      board[2] != "" &&
      board[0] == board[1] &&
      board[1] == board[2]
    ) {
      console.log("WINNER!");
      winner = board[0];
      winState();
    }

    if (
      /* middle row */
      board[3] != "" &&
      board[4] != "" &&
      board[5] != "" &&
      board[3] == board[3] &&
      board[3] == board[5]
    ) {
      console.log("WINNER!");
      winner = board[3];
      winState();
    }

    if (
      /* bottom row */
      board[6] != "" &&
      board[7] != "" &&
      board[8] != "" &&
      board[6] == board[7] &&
      board[7] == board[8]
    ) {
      console.log("WINNER!");
      winner = board[6];
      winState();
    }

    if (
      /* left col */
      board[0] != "" &&
      board[3] != "" &&
      board[6] != "" &&
      board[0] == board[3] &&
      board[3] == board[6]
    ) {
      console.log("WINNER!");
      winner = board[0];
      winState();
    }

    if (
      /* center col */
      board[1] != "" &&
      board[4] != "" &&
      board[7] != "" &&
      board[1] == board[4] &&
      board[4] == board[7]
    ) {
      console.log("WINNER!");
      winner = board[1];
      winState();
    }

    if (
      /* right col */
      board[2] != "" &&
      board[5] != "" &&
      board[8] != "" &&
      board[2] == board[5] &&
      board[5] == board[8]
    ) {
      console.log("WINNER!");
      winner = board[2];
      winState();
    }

    if (
      /* diagonal left  */
      board[0] != "" &&
      board[4] != "" &&
      board[8] != "" &&
      board[0] == board[4] &&
      board[4] == board[8]
    ) {
      console.log("WINNER!");
      winner = board[0];
      winState();
    }

    if (
      /* diagonal right  */
      board[2] != "" &&
      board[4] != "" &&
      board[6] != "" &&
      board[2] == board[4] &&
      board[4] == board[6]
    ) {
      console.log("WINNER!");
      winner = board[2];
      winState();
    }
  }

  return (
    <View
      style={{
        backgroundColor: "black",
        width: "100%",
        flex: 1,
      }}
    >
      <View style={styles.topBuffer}>
        <Text></Text>
      </View>
      <View style={styles.gameHeader}>
        <Text style={styles.headerText}>Tic Tac Toe!</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.playerHeader}>Player X Score</Text>
        <Text style={styles.playerHeader}>Player O Score</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.scoreField}>{Global.playerXScore}</Text>
        <Text style={styles.scoreField}>{Global.playerOScore}</Text>
      </View>
      <View style={styles.container}>
        <View>
          <Text
            style={{
              fontSize: 12,
              backgroundColor: "#fff",
            }}
          >
            MOVES: {Global.playerTurn}
          </Text>
        </View>
        <View style={styles.board}>
          {board.map((cell, index) => (
            <TouchableOpacity
              key={index}
              style={styles.cell}
              onPress={() => {
                if (board[index] == "") {
                  if (Global.playerTurn % 2 == 0) {
                    const newBoard = [...board];
                    newBoard[index] = "X";
                    setBoard(newBoard);
                  } else if (Global.playerTurn % 2 == 1) {
                    const newBoard = [...board];
                    newBoard[index] = "O";
                    setBoard(newBoard);
                  }
                  Global.playerTurn += 1;
                  console.log(
                    "TouchableOpacity touched = " + Global.playerTurn
                  );
                }
              }}
            >
              <Text
                style={{
                  fontSize: 64,
                }}
              >
                {""}
                {board[index]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Button title="Reset" onPress={resetBoard} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 350,
    height: 350,
  },
  cell: {
    width: "33.33%",
    height: "33.33%",
    borderWidth: 8,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  gameHeader: {
    flex: 0.15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  header: {
    flex: 0.1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  headerText: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 36,
  },
  playerHeader: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  scoreField: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  topBuffer: {
    flex: 0.2,
    width: "100%",
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TicTacToe;
