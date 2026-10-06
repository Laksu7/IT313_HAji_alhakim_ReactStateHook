import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

import PracticeTracker from "../components/PracticeTracker";
import Stopwatch from "../components/Stopwatch";
import useStopwatch from "../hooks/useStopwatch";

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <PracticeTracker
          solved={solved}
          onSolve={() => {
            setSolved((s) => s + 1);
          }}
          onReset={() => {
            setSolved(0);
          }}
        />

        <Stopwatch seconds={seconds} isRunning={isRunning} />

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="START" onPress={() => setIsRunning(true)} />
          </View>

          <View style={styles.button}>
            <Button title="STOP" onPress={() => setIsRunning(false)} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },

  card: {
    width: "85%",
    padding: 25,
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 5,
  },

  buttons: {
    marginTop: 30,
    gap: 15,
  },

  button: {
    width: "100%",
  },
});
