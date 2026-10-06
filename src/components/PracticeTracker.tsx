import { Button, StyleSheet, Text, View } from "react-native";

type Props = {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
};

export default function PracticeTracker({ solved, onSolve, onReset }: Props) {
  return (
    <View>
      <Text style={styles.title}>Solved: {solved}</Text>

      <View style={styles.btn}>
        <Button title="SOLVE +1" onPress={onSolve} />
      </View>

      <View style={styles.btn}>
        <Button title="RESET" onPress={onReset} />
      </View>

      {solved >= 5 && <Text style={styles.success}>Great job!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginBottom: 15,
  },

  btn: {
    marginBottom: 10,
  },

  success: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
