// React Native Temel Paketler
import { StyleSheet, View, ScrollView } from "react-native";

// Oluşturulan Öğeler
import BreakingNews from "../components/news/BreakingNews";
import SliderNews from "../components/news/SliderNews";
import SliderBannerAds from "../components/others/SliderBannerAds";
import Currency from "../components/others/Currency";
import SliderDotsNews from "../components/news/SliderDotsNews";
import ExpandableList from "../components/others/ExpandableList";
import Authors from "../components/others/Authors";
import SliderVideoGallery from "../components/news/SliderVideoGallery";
import PhotoGallery from "../components/news/PhotoGallery";

function MainScreen() {
  const sliderDotsNewsData = [{ imageSource: "SliderDots1", newsTitle: "Türk sinemasının efsane ismi Cüneyt Arkın hayatını kaybetti"}, { imageSource: "SliderDots2", newsTitle: "Konut satışları temmuzda %16,7 artarak 109 bini aştı"}];
  const authorsData = [
    {
      key: 1,
      imageName: "Author1",
      content: "Neden mutsuz insanlar ülkesiyiz?",
      authorName: "UĞUR DÜNDAR",
    },
    {
      key: 2,
      imageName: "Author2",
      content: "Çürümüş bir şeyler dönüyor ortalıkta",
      authorName: "AHMET HAKAN ÇOŞKUN",
    },
    {
      key: 3,
      imageName: "Author1",
      content: "Neden mutsuz insanlar ülkesiyiz?",
      authorName: "UĞUR DÜNDAR",
    },
    {
      key: 4,
      imageName: "Author2",
      content: "Çürümüş bir şeyler dönüyor ortalıkta",
      authorName: "AHMET HAKAN ÇOŞKUN",
    },
  ];
  const videoGalleryData = [
    {
      key: 1,
      imageName: "VideoGallery1",
      title: "Kastamonu'da selde mahsur kalan hasta helikopterle kurtarıldı",
    },
    {
      key: 2,
      imageName: "VideoGallery2",
      title: "İstanbul'da toplu taşımada kredi kartıyla ödeme ücretleri vatandaşı isyan ettirdi",
    },
    {
      key: 3,
      imageName: "VideoGallery3",
      title: "Emekli maaşlarına düzenleme sinyali! Bakan ekim ayını işaret etti",
    },
  ];
  const photoGalleryData = [
    {
      key: 1,
      imageName: "PhotoGallery1",
      title: "Avusturya ile Avustralya'yı karıştıran Kiss grubu büyük gafa imza attı"
    },
    {
      key: 2,
      imageName: "PhotoGallery2",
      title: "21 yaşındaki Meksikalı şarkıcı kocası tarafından öldürüldü"
    },
    {
      key: 3,
      imageName: "PhotoGallery3",
      title: "Taylor Swift Yüksek Mahkeme ile ilgili endişelerini paylaştı"
    },
  ];

  return(
      <View style={styles.rootContainer}>
          <ScrollView>
            <BreakingNews/>
            <SliderNews/>
            <View style={styles.carouselContainer}>
              <SliderBannerAds/>
            </View>
            <Currency/>
            <SliderDotsNews data={sliderDotsNewsData}/>
            <ExpandableList title="Günün Manşetleri" expandButtonTitle="Tümü">
              <SliderNews/>
            </ExpandableList>
            <ExpandableList title="Yazarlar" expandButtonTitle="Tümü">
              <Authors authorsList={authorsData}/>
            </ExpandableList>
            <View style={styles.videoGalleryContainer}>
              <ExpandableList titleTextStyle={{ color: "white" }} buttonTextStyle={{ color: "white" }} title="Video Galeri" expandButtonTitle="Tümü">
                <SliderVideoGallery videoGalleryData={videoGalleryData}/>
              </ExpandableList>
            </View>
            <ExpandableList title="Foto Galeri" expandButtonTitle="Tümü">
              <PhotoGallery data={photoGalleryData}/>
            </ExpandableList>
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
    videoGalleryContainer: {
      backgroundColor: "black",
    },
});