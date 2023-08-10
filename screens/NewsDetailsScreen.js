// React Native Temel Paketler
import { StyleSheet, Text, View } from "react-native";

function NewsDetailsScreen() {
    return(
        <View style={styles.rootContainer}>
            <Text style={styles.text}>Haber Detay Sayfası</Text>
        </View>
    );
}

export default NewsDetailsScreen;

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