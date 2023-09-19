// React Native Temel Paketler
import { ActivityIndicator, StyleSheet, ScrollView } from "react-native";

// React Native Hooks
import { useContext, useEffect, useLayoutEffect, useState } from "react";

// API
import newsApi from "../util/newsApi";

// Oluşturulan Öğeler
import NewsDetails from "../components/news/NewsDetails";
import SimiliarNews from "../components/news/SimiliarNews";
import IconButton from "../components/IconButton";

// Context
import { Context } from "../store/context";

function NewsDetailsScreen({ navigation, route }) {
  const [newsData, setNewsData] = useState()

  const ctx = useContext(Context);

  function goMainScreenIconButtonHandler() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'DrawerMainScreen' }],
    });
  }

  useLayoutEffect(() => {
    if(navigation.getState().index > 1) {
      navigation.setOptions({
        headerRight: (_) => <IconButton icon="home" size={32} color={ctx.panelSettings.themePrimaryColor} onPress={goMainScreenIconButtonHandler} iconBundle="Ionicons"/>,
      });
    }
  }, []);

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