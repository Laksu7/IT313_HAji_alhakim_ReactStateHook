import { StyleSheet, Text, View } from "react-native";

type Props = {
  seconds: number;
  isRunning: boolean;
};

export default function Stopwatch({ seconds, isRunning }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {Math.floor(seconds / 60)
          .toString()
          .padStart(2, "0")}
        :{(seconds % 60).toString().padStart(2, "0")}
      </Text>

      <Text>{isRunning ? "Running..." : "Paused"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    alignItems: "center",
  },

  time: {
    fontSize: 35,
    fontWeight: "bold",
  },
});
