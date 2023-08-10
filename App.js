import { StyleSheet, Text, View } from "react-native";

function App() {
  return(
    <View style={styles.rootContainer}>
      <Text style={styles.text}>TE Bilişim Native App</Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
});