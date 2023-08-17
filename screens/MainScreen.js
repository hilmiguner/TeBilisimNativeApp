// React Native Temel Paketler
import { StyleSheet, View, ScrollView, FlatList } from "react-native";

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
import AppColors from "../constants/colors";
import Card from "../components/others/Card";
import NumberCard from "../components/others/NumberCard";

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
  const higlightsData = [
    {
      key: 1,
      imageName: "Highlight1",
      title: "Dünya",
      titleColor: "#CF1A00",
      content: "Putin'den flaş Ukrayna uyarısı: Gerekirse kullanırız!"
    },
    {
      key: 2,
      imageName: "Highlight2",
      title: "Teknoloji",
      titleColor: "#41ADC6",
      content: "Elon Musk'ın Twitter planı ne?"
    },
    {
      key: 3,
      imageName: "Highlight3",
      title: "Kayseri",
      titleColor: "#640090",
      content: "Talas'ta Ağaç Seferberliği"
    },
  ];
  const trendNewsData = [
    {
      cardLabel: "01",
      imageName: "TrendNews1",
      title: "Magazin",
      titleColor: "#BC68C0",
      content: "Sitemli mesaj: Çekirdek ailemi dağıttılar!",
    },
    {
      cardLabel: "02",
      imageName: "TrendNews2",
      title: "Magazin",
      titleColor: "#BC68C0",
      content: "Büyük aşk bu noktaya geldi: İddiaların arkası kesilmiyor",
    },
    {
      cardLabel: "03",
      imageName: "TrendNews3",
      title: "Tarih",
      titleColor: "#5DB3BE",
      content: "Ortadoğu'nun Sınırlarını Çizen Kadın: Gertrude Bell Kimdir?",
    },
    {
      cardLabel: "04",
      imageName: "TrendNews4",
      title: "Spor",
      titleColor: "#62C28C",
      content: "Christiano Ronaldo'dan 50 Efsane Gol",
    },
    {
      cardLabel: "05",
      imageName: "TrendNews5",
      title: "Sağlık",
      titleColor: "#55AC05",
      content: "Soğan sağlığa pek çok açıdan fayda sağlıyor",
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
            <View style={styles.highlightsContainer}>
              <ExpandableList title="Öne Çıkanlar" expandButtonTitle="Tümü" titleTextStyle={{ color: "white" }} buttonTextStyle={{ color: "white" }}>
                <Card cardData={higlightsData[0]}/>
                <Card cardData={higlightsData[1]}/>
                <Card cardData={higlightsData[2]}/>
              </ExpandableList>
            </View>
            <ExpandableList title="Trend Haberler" expandButtonTitle="Tümü">
              <NumberCard cardData={trendNewsData[0]}/>
              <NumberCard cardData={trendNewsData[1]}/>
              <NumberCard cardData={trendNewsData[2]}/>
              <NumberCard cardData={trendNewsData[3]}/>
              <NumberCard cardData={trendNewsData[4]}/>
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
    highlightsContainer: {
      backgroundColor: AppColors.red300,
    },
});