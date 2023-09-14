// React Native Temel Paketler
import { StyleSheet, View, ScrollView } from "react-native";

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
import Weather from "../components/others/Weather";
import PrayerTimes from "../components/others/PrayerTimes";
import SliderHighlights from "../components/news/SliderHighlights";
import Footer from "../components/others/Footer";
import CurrencySlider from "../components/others/CurrencySlider";
import TabbedNews from "../components/news/TabbedNews";
import VerticalFeatured from "../components/news/VerticalFeatured";
import TrendNews from "../components/news/TrendNews";
import LocalNews from "../components/news/LocalNews";
import OtherNews from "../components/news/OtherNews";
import LeagueScoreModule from "../components/others/LeagueScoreModule";

// Context
import { Context } from "../store/context";

// React Native Hooks
import { useContext } from "react";

function MainScreen() {
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
            { ctx.panelSettings.weatherModule && <Weather/> }
            { ctx.panelSettings.tabbedNewsModule && <TabbedNews/> }
            { ctx.panelSettings.prayerTimesModule && <PrayerTimes/> }
            { ctx.panelSettings.leagueScoreStatusModule && <LeagueScoreModule data={leagueScoreData}/> }
            { ctx.panelSettings.highlightedNewsModule && 
              <View style={{ backgroundColor: ctx.panelSettings.themePrimaryColor }}>
                <ExpandableList title="Öne Çıkanlar" expandButtonTitle="Tümü" titleTextStyle={{ color: "white" }} buttonTextStyle={{ color: "white" }}>
                  <SliderHighlights />
                </ExpandableList>
              </View>
            }
            <OtherNews/>
            {/* <View style={[styles.emptyArea, { borderColor: ctx.panelSettings.themePrimaryColor }]}>
              Empty Area Above Footer
            </View> */}
            <View style={{ borderBottomWidth: 6, borderBottomColor: ctx.panelSettings.themePrimaryColor }}></View>
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
    emptyArea: {
      height: 200,
      borderBottomWidth: 3,
    },
});