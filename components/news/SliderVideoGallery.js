// React Native Temel Paketler
import { ActivityIndicator, ScrollView, View } from "react-native";

// Oluşturulan Öğeler
import SliderVideoGalleryItem from "./SliderVideoGalleryItem";

// React Native Hooks
import { useEffect, useState } from "react";

// API
import newsApi from "../../util/newsApi";

function SliderVideoGallery() {
    const [videosData, setVideosData] = useState();

    useEffect(() => {
        newsApi.getHomeVideos().then((apiData) => setVideosData(apiData));
    }, []);

    let content = <ActivityIndicator />;

    if(videosData) {
        content = (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                { videosData.map((videoData) => (
                    <View key={videoData.id}>
                        <SliderVideoGalleryItem videoData={videoData}/>
                    </View>
                ))}
            </ScrollView>
        );
    }
    return content;
}

export default SliderVideoGallery;