// React Native Temel Paketler
import { StyleSheet, View, ScrollView } from "react-native";

// Oluşturulan Öğeler
import BreakingNews from "../components/news/BreakingNews";
import SliderNewsTop from "../components/news/SliderNewsTop";
import SliderBannerAds from "../components/others/SliderBannerAds";
import Currency from "../components/others/Currency";
import SliderDotsNews from "../components/news/SliderDotsNews";

function MainScreen() {
  const sliderDotsNewsData = [{ imageSource: "SliderDots1", newsTitle: "Türk sinemasının efsane ismi Cüneyt Arkın hayatını kaybetti"}, { imageSource: "SliderDots2", newsTitle: "Konut satışları temmuzda %16,7 artarak 109 bini aştı"}];
  return(
      <View style={styles.rootContainer}>
          <ScrollView>
            <BreakingNews/>
            <SliderNewsTop/>
            <View style={styles.carouselContainer}>
              <SliderBannerAds/>
            </View>
            <Currency/>
            <SliderDotsNews data={sliderDotsNewsData}/>
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