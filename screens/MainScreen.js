// React Native Temel Paketler
import { StyleSheet, View, Text, ScrollView } from "react-native";

// Oluşturulan Öğeler
import BreakingNews from "../components/news/BreakingNews";
import SliderNews from "../components/news/SliderNews";
import SliderBannerAds from "../components/others/SliderBannerAds";
import CurrencyAll from "../components/others/CurrencyAll";
import SliderDotsNews from "../components/news/SliderDotsNews";
import ExpandableList from "../components/others/ExpandableList";
import Authors from "../components/others/Authors";
import SliderVideoGallery from "../components/news/SliderVideoGallery";
import PhotoGallery from "../components/news/PhotoGallery";
import AppColors from "../constants/colors";
import Card from "../components/others/Card";
import NumberCard from "../components/others/NumberCard";
import VerticalCard from "../components/others/VerticalCard";
import Weather from "../components/others/Weather";
import HorizontalCategories from "../components/others/HorizontalCategories";
import PrayerTimes from "../components/others/PrayerTimes";
import TopTabsLeague from "../components/others/TopTabsLeague";
import LinearGradient from "react-native-linear-gradient";
import ThreeNews from "../components/news/ThreeNews";
import SliderHighlights from "../components/news/SliderHighlights";
import Footer from "../components/others/Footer";
import CurrencySlider from "../components/others/CurrencySlider";

// Uygulama Ayarları(API)
import PanelSettings from "../util/panelSettings";

function MainScreen() {
  const sliderDotsNewsData = [
    { 
      imageSource: "SliderDots1", 
      newsTitle: "Türk sinemasının efsane ismi Cüneyt Arkın hayatını kaybetti"
    },
    { 
      imageSource: "SliderDots2", 
      newsTitle: "Konut satışları temmuzda %16,7 artarak 109 bini aştı"
    }
  ];
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
  const localNewsData = [
    {
      imageName: "LocalNews1",
      cityName: "Adana", 
      newsTitle: "Erdoğan'ın müjdesini verdiği petrolün çıkarıldığı saha!",
    },
    {
      imageName: "LocalNews2",
      cityName: "Trabzon", 
      newsTitle: "'Sörloth ile anlaşıldı' yazdılar! Yıllık dev maaş belirlendi!",
    },
    {
      imageName: "LocalNews3",
      cityName: "Amasya", 
      newsTitle: "Yıllar sonra büyüdüğü mahalleye döndü",
    },
    {
      imageName: "LocalNews4",
      cityName: "Artvin", 
      newsTitle: "Hububatçılardan 5 ayda 4.5 milyar dolarlık ihracat",
    },
  ];
  const weatherData = {
    cityName: "İstanbul",
    currentIcon: "cloudy-outline",
    status: "Parçalı Bulutlu",
    degree: "19",
    oneDayAfterName: "Cumartesi",
    oneDayAfterStatus: "Parçalı Bulutlu",
    oneDayAfterDegree: "19",
    oneDayAfterIcon: "cloudy-outline",
    twoDayAfterName: "Pazar",
    twoDayAfterStatus: "Güneşli",
    twoDayAfterDegree: "23",
    twoDayAfterIcon: "sunny-outline",
    threeDayAfterName: "Pazartesi",
    threeDayAfterStatus: "Yağmurlu",
    threeDayAfterDegree: "17",
    threeDayAfterIcon: "rainy-outline",
  };
  const tempNewsData = [
    {
      imageName: "TempNews1",
      title: "Bakan Soylu bu mesajla duyurdu: 'Hepsi ele geçirildi!'",
    },
    {
      imageName: "TempNews2",
      title: "Bu gece yarısı motorine büyük indirim",
    },
    {
      imageName: "TempNews3",
      title: "Maduro 4 yıl sonra Beştepe'de",
    },
  ];
  const prayerTimesData = {
    cityName: "İstanbul",
    statusText: "Öğle Vaktine Kalan Süre",
    remainingTime: "02:23:46",
  };
  const leagueScoreData = [
    {
      key: 1,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 2,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 3,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 4,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 5,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 6,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 7,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 8,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 9,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 10,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 11,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 12,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 13,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 14,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 15,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 16,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 17,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 18,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 19,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 20,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
    {
      key: 21,
      teamName: "İstanbulspor",
      o: "32",
      g: "22",
      b: "4",
      m: "6",
      a: "70",
      y: "33",
      p: "70",
    },
  ];

  return(
      <View style={styles.rootContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <BreakingNews/>
            <SliderNews/>
            <View style={styles.carouselContainer}>
              <SliderBannerAds/>
            </View>
            <CurrencyAll/>
            <CurrencySlider />
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
            <ExpandableList title="Yerel Haberler" expandButtonTitle="Tümü">
              <View style={styles.localNewsContainer}>
                <VerticalCard cardData={localNewsData[0]}/>
                <VerticalCard cardData={localNewsData[1]}/>
              </View>
              <View style={styles.localNewsContainer}>
                <VerticalCard cardData={localNewsData[2]}/>
                <VerticalCard cardData={localNewsData[3]}/>
              </View>
            </ExpandableList>
            <Weather weatherData={weatherData}/>
            <HorizontalCategories/>
            <ThreeNews data={tempNewsData}/>
            <PrayerTimes data={prayerTimesData}/>
            <LinearGradient colors={["#6FC355", "#3F6C8A"]} style={{ padding: 20, margin: 16, borderRadius: 8 }}>
              <Text style={styles.leagueScoreText}>Puan Durumu</Text>
              <TopTabsLeague data={leagueScoreData}/>
            </LinearGradient>
            <ThreeNews data={tempNewsData}/>
            <ThreeNews data={tempNewsData}/>
            <ThreeNews data={tempNewsData}/>
            <View style={styles.horizontalHighlightsContainer}>
              <ExpandableList title="Öne Çıkanlar" expandButtonTitle="Tümü" titleTextStyle={{ color: "white" }} buttonTextStyle={{ color: "white" }}>
                <SliderHighlights />
              </ExpandableList>
            </View>
            <View style={styles.emptyArea}>
              {/* Empty Area Above Footer */}
            </View>
            <Footer>Türkiye'nin en büyük haber sitesi, en kaliteli ve güncel haberleriyle artık karşınızda!</Footer>
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
      backgroundColor: PanelSettings.themePrimaryColor,
    },
    localNewsContainer: {
      flexDirection: "row",
      flex: 1,
    },
    leagueScoreText: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 12,
    },
    horizontalHighlightsContainer: {
      backgroundColor: PanelSettings.themePrimaryColor,
    },
    emptyArea: {
      height: 200,
      borderBottomWidth: 3,
      borderColor: PanelSettings.themePrimaryColor,
    },
});