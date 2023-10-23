// React Native Temel Paketler
import { ActivityIndicator, StyleSheet, ScrollView } from "react-native";

// React Native Hooks
import { useEffect, useState } from "react";

// API
import newsApi from "../util/newsApi";

// Oluşturulan Öğeler
import ArticleDetails from "../components/news/ArticleDetails";
import SimiliarArticles from "../components/news/SimiliarArticles";

function ArticleDetailsScreen({ route }) {
  const [articleData, setArticleData] = useState()

  useEffect(() => {
    if (route.params) {
      newsApi.getArticleDetail(route.params.articleID).then((respondData) => setArticleData(respondData));
    }
  }, []);


  let detailsContent = <ActivityIndicator />;
  let similiarArticleContent = <ActivityIndicator />;
  if(articleData) {
    detailsContent = <ArticleDetails data={articleData}/>
    similiarArticleContent = <SimiliarArticles authorId={articleData.yid} authorName={articleData.yazaradi}/>
  }

  return(
      <ScrollView style={styles.rootContainer}>
        {detailsContent}
        {similiarArticleContent}
      </ScrollView>
  );
}

export default ArticleDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
});