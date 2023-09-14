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
      newsApi.getNewsDetail(route.params.newsID).then((newsDetailData) => setNewsData(newsDetailData));
    }
  }, []);

  let detailsContent = <ActivityIndicator />;
  if(newsData) {
    detailsContent = <NewsDetails data={newsData}/>
  }
  return(
      <ScrollView style={styles.rootContainer}>
        {detailsContent}
      </ScrollView>
  );
}

export default NewsDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
});