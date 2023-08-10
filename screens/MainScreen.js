// React Native Temel Paketler
import { Button, StyleSheet, Text, View } from "react-native";

// Oluşturulan Öğeler
import SonDakika from "../components/SonDakika";
import { ScrollView } from "react-native-gesture-handler";

function MainScreen({ navigation }) {
  return(
      <View style={styles.rootContainer}>
          <ScrollView>
            <SonDakika/>
            
            {/* Haber Detay Sayfası'na gitmek için buton */}
            {/* <Button title="Detay Ekranına Git" onPress={() => navigation.navigate("NewsDetailsScreen")}/> */}
          </ScrollView>
      </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
});