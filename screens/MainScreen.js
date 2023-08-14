// React Native Temel Paketler
import { Button, StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";

// Oluşturulan Öğeler
import BreakingNews from "../components/BreakingNews";
import SliderNewsTop from "../components/SliderNewsTop";
import SliderBannerAds from "../components/SliderBannerAds";

function MainScreen() {
  return(
      <View style={styles.rootContainer}>
          <ScrollView>
            <BreakingNews/>
            <SliderNewsTop/>
            <View style={styles.carouselContainer}>
              <SliderBannerAds/>
            </View>
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
    carouselContainer: {
      margin: 16, 
      overflow: "hidden", 
      justifyContent: "center"
    },
});