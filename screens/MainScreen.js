// React Native Temel Paketler
import { StyleSheet, View, Text, ScrollView } from "react-native";

// Oluşturulan Öğeler
import BreakingNews from "../components/news/BreakingNews";
import SliderTopHeadlines from "../components/news/SliderTopHeadlines";
import SliderQuintipleHeadlines from "../components/others/SliderQuintipleHeadlines";
import CurrencyAll from "../components/others/CurrencyAll";
import MainHeadlines from "../components/news/MainHeadlines";
import ExpandableList from "../components/others/ExpandableList";
import SliderDailyNews from "../components/news/SliderDailyNews";
import Authors from "../components/others/Authors";
import SliderVideoGallery from "../components/news/SliderVideoGallery";
import PhotoGallery from "../components/news/PhotoGallery";
import VerticalCard from "../components/others/VerticalCard";
import Weather from "../components/others/Weather";
import PrayerTimes from "../components/others/PrayerTimes";
import TopTabsLeague from "../components/others/TopTabsLeague";
import LinearGradient from "react-native-linear-gradient";
import ThreeNews from "../components/news/ThreeNews";
import SliderHighlights from "../components/news/SliderHighlights";
import Footer from "../components/others/Footer";
import CurrencySlider from "../components/others/CurrencySlider";
import TabbedNews from "../components/news/TabbedNews";

// Context
import { Context } from "../store/context";

// React Native Hooks
import { useContext } from "react";
import VerticalFeatured from "../components/news/VerticalFeatured";
import TrendNews from "../components/news/TrendNews";
import LocalNews from "../components/news/LocalNews";

function MainScreen() {
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

  const ctx = useContext(Context);
  
  let currencyContent;
  if(ctx.panelSettings.weatherAndMarketsDirectionType == "vertical") currencyContent = <CurrencyAll/>
  else currencyContent = <CurrencySlider/>

  return(
      <View style={styles.rootContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            { ctx.panelSettings.breakingNewsModule && <BreakingNews/> }
            { ctx.panelSettings.topCuffsModule && <SliderTopHeadlines/> }
            { ctx.panelSettings.quintipleCuffsModule && 
              <View style={styles.carouselContainer}>
                <SliderQuintipleHeadlines/>
              </View>
            }
            { currencyContent }
            <MainHeadlines/>
            { ctx.panelSettings.dailyCuffsModule && 
              <ExpandableList title="Günün Manşetleri" expandButtonTitle="Tümü">
                <SliderDailyNews/>
              </ExpandableList>
            }
            { ctx.panelSettings.authorsModule && 
              <ExpandableList title="Yazarlar" expandButtonTitle="Tümü">
                <Authors/>
              </ExpandableList>
            }
            { ctx.panelSettings.videosModule && 
              <View style={styles.videoGalleryContainer}>
                <ExpandableList titleTextStyle={{ color: "white" }} buttonTextStyle={{ color: "white" }} title="Video Galeri" expandButtonTitle="Tümü">
                  <SliderVideoGallery/>
                </ExpandableList>
              </View>
            }
            { ctx.panelSettings.galleriesModule && 
              <ExpandableList title="Foto Galeri" expandButtonTitle="Tümü">
                <PhotoGallery/>
              </ExpandableList>
            }
            { ctx.panelSettings.highlightedNewsModule && 
              <View style={{ backgroundColor: ctx.panelSettings.themePrimaryColor, }}>
                <ExpandableList title="Öne Çıkanlar" expandButtonTitle="Tümü" titleTextStyle={{ color: "white" }} buttonTextStyle={{ color: "white" }}>
                  <VerticalFeatured/>
                </ExpandableList>
              </View>
            }
            { ctx.panelSettings.trendNewsModule && 
              <ExpandableList title="Trend Haberler" expandButtonTitle="Tümü">
                <TrendNews/>
              </ExpandableList>
            }
            { ctx.panelSettings.localNewsModule && 
              <ExpandableList title="Yerel Haberler" expandButtonTitle="Tümü">
                <LocalNews/>
              </ExpandableList>
            }
            { ctx.panelSettings.weatherModule && <Weather weatherData={weatherData}/> }
            { ctx.panelSettings.tabbedNewsModule && <TabbedNews data={tempNewsData}/> }
            { ctx.panelSettings.prayerTimesModule && <PrayerTimes data={prayerTimesData}/> }
            { ctx.panelSettings.leagueScoreStatusModule && 
              <LinearGradient colors={["#6FC355", "#3F6C8A"]} style={{ padding: 20, margin: 16, borderRadius: 8 }}>
                <Text style={styles.leagueScoreText}>Puan Durumu</Text>
                <TopTabsLeague data={leagueScoreData}/>
              </LinearGradient>
            }
            <ThreeNews data={tempNewsData}/>
            <ThreeNews data={tempNewsData}/>
            <ThreeNews data={tempNewsData}/>
            { ctx.panelSettings.highlightedNewsModule && 
              <View style={{ backgroundColor: ctx.panelSettings.themePrimaryColor }}>
                <ExpandableList title="Öne Çıkanlar" expandButtonTitle="Tümü" titleTextStyle={{ color: "white" }} buttonTextStyle={{ color: "white" }}>
                  <SliderHighlights />
                </ExpandableList>
              </View>
            }
            <View style={[styles.emptyArea, { borderColor: ctx.panelSettings.themePrimaryColor }]}>
              {/* Empty Area Above Footer */}
            </View>
            <Footer>{ctx.panelSettings.footerShortDescription}</Footer>
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
    leagueScoreText: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 12,
    },
    emptyArea: {
      height: 200,
      borderBottomWidth: 3,
    },
});