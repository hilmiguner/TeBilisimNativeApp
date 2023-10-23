// React Native Temel Paketler
import { ActivityIndicator, StyleSheet, ScrollView } from "react-native";

// React Native Hooks
import { useEffect, useState } from "react";

// API
import newsApi from "../util/newsApi";

// Oluşturulan Öğeler
import NewsDetails from "../components/news/NewsDetails";
import SimiliarNews from "../components/news/SimiliarNews";

function NewsDetailsScreen({ route }) {
  const [newsData, setNewsData] = useState()

  useEffect(() => {
    if (route.params) {
      newsApi.getNewsDetail(route.params.newsID).then((respondData) => setNewsData(respondData));
    }
  }, []);


  let detailsContent = <ActivityIndicator />;
  let similiarNewsContent1 = <ActivityIndicator />;
  if(newsData) {
    detailsContent = <NewsDetails data={newsData}/>
    similiarNewsContent1 = <SimiliarNews categoryId={newsData.catid} newsId={newsData.id}/>
  }

  return(
      <ScrollView style={styles.rootContainer}>
        {detailsContent}
        {similiarNewsContent1}
      </ScrollView>
  );
}

export default NewsDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
});