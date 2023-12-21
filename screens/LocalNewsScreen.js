// React Native Temel Paketler
import { ActivityIndicator, ScrollView } from "react-native";

// React Native Hooks
import { useEffect, useLayoutEffect, useState } from "react";

// API
import newsApi from "../util/newsApi";
import CarouselLocalNews from "../components/news/CarouselLocalNews";
import OtherLocalNews from "../components/news/OtherLocalNews";

function LocalNewsScreen({ navigation }) {
    const [news, setNews] = useState();
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: true});
    }, []);

    useEffect(() => {
        newsApi.getLocalNews().then((respondData) => setNews(respondData));
    }, []);

    let content = <ActivityIndicator/>;

    if(news) {
        const carouselData = news.length > 10 ? news.slice(0, 10) : null;
        const otherData = news.length > 10 ? news.slice(10, news.length) : news;
        content = (
            <ScrollView>
                { carouselData && <CarouselLocalNews data={carouselData}/> }
                <OtherLocalNews newsData={otherData}/>
            </ScrollView>
        );   
    }
    return content;
}

export default LocalNewsScreen;