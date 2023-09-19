// React Native Temel Paketler
import { ActivityIndicator, StyleSheet, ScrollView } from "react-native";

// React Native Hooks
import { useEffect, useState } from "react";

// API
import newsApi from "../util/newsApi";

// Oluşturulan Öğeler
import NewsDetails from "../components/news/NewsDetails";

function NewsDetailsScreen({ route }) {
  const [newsData, setNewsData] = useState()

  useEffect(() => {
    if (route.params) {
      newsApi.getNewsDetail(route.params.newsID).then((newsDetailData) => {
        newsApi.getSimiliarNews(newsDetailData.catid, newsDetailData.id).then((respondData) => newsApi.getNewsDetail(respondData[0].id).then((otherNewsData) => {
          setNewsData({
            newsData: newsDetailData,
            otherNewsData: otherNewsData,
          });
        }));
      });
    }
  }, []);


  let detailsContent = <ActivityIndicator />;
  let otherNewsContent = <ActivityIndicator />;
  if(newsData) {
    detailsContent = <NewsDetails data={newsData.newsData}/>
    otherNewsContent = <NewsDetails data={newsData.otherNewsData}/>
  }

  return(
      <ScrollView style={styles.rootContainer}>
        {detailsContent}
        {otherNewsContent}
      </ScrollView>
  );
}

export default NewsDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
});