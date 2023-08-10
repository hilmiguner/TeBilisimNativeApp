// React Native Temel Paketler
import { Button, StyleSheet, Text, View } from "react-native";

function MainScreen({ navigation }) {
    return(
        <View style={styles.rootContainer}>
            <Text style={styles.text}>Ana Ekran</Text>
            <Button title="Detay Ekranına Git" onPress={() => navigation.navigate("NewsDetailsScreen")}/>
        </View>
    );
}

export default MainScreen;

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