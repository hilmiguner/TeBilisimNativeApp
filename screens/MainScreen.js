// React Native Temel Paketler
import { Button, StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";

// Oluşturulan Öğeler
import BreakingNews from "../components/BreakingNews";
import SliderNewsTop from "../components/SliderNewsTop";
import SliderBannerAds from "../components/SliderBannerAds";
import Currency from "../components/Currency";

function MainScreen() {
  return(
      <View style={styles.rootContainer}>
          <ScrollView>
            <BreakingNews/>
            <SliderNewsTop/>
            <View style={styles.carouselContainer}>
              <SliderBannerAds/>
            </View>
            <Currency/>
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
      marginHorizontal: 16, 
      marginBottom: 16,
      overflow: "hidden", 
      justifyContent: "center"
    },
});