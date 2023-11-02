// React Native Temel Paketler
import { ActivityIndicator, StyleSheet, ScrollView } from "react-native";

// React Native Hooks
import { useEffect, useState } from "react";

// API
import newsApi from "../util/newsApi";

// Oluşturulan Öğeler
import VideoDetails from "../components/news/VideoDetails";

function VideoDetailsScreen({ route }) {
  const [videosData, setVideosData] = useState()

  useEffect(() => {
    if (route.params) {
      newsApi.getVideoDetail(route.params.videoID).then((respondData) => setVideosData(respondData));
    }
  }, []);


  let detailsContent = <ActivityIndicator />;
  if(videosData) {
    detailsContent = <VideoDetails data={videosData}/>
  }

  return(
      <ScrollView style={styles.rootContainer}>
        {detailsContent}
      </ScrollView>
  );
}

export default VideoDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
});