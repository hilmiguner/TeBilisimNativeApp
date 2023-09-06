// React Native Temel Paketler
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

// React Native Hooks
import { useEffect, useState } from "react";

// API
import newsApi from "../util/newsApi";

function NewsDetailsScreen({ route }) {
  const [newsData, setNewsData] = useState()
  useEffect(() => {
    if (route.params) {
      newsApi.getNewsDetail(route.params.newsID).then((newsDetailData) => setNewsData(newsDetailData));
    }
  }, []);

  let content = <ActivityIndicator />;
  
  if(newsData) {
    content = (
      <View>
        <Text style={styles.text}>ID: {newsData.id}</Text>
        <Text style={styles.text}>TITLE: {newsData.title}</Text>
      </View>
    );
  }
  return(
      <View style={styles.rootContainer}>
          { content }
      </View>
  );
}

export default NewsDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      textAlign: "center",
      fontSize: 24,
      fontWeight: "bold",
      color: "black",
    },
});