// React Native Temel Paketler
import { ActivityIndicator, ScrollView } from "react-native";

// React Native Hooks
import { useEffect, useLayoutEffect, useState } from "react";

// API
import newsApi from "../util/newsApi";
import CarouselTrendNews from "../components/news/CarouselTrendNews";
import OtherTrendNews from "../components/news/OtherTrendNews";

function TrendNewsScreen({ navigation }) {
    const [news, setNews] = useState();
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: true});
    }, []);

    useEffect(() => {
        newsApi.getTrends().then((respondData) => setNews(respondData));
    }, []);

    let content = <ActivityIndicator/>;

    if(news) {
        const carouselData = news.length > 10 ? news.slice(0, 10) : news;
        const otherData = news.length > 10 ? news.slice(10, news.length) : null;
        content = (
            <ScrollView>
                <CarouselTrendNews data={carouselData}/>
                { otherData && <OtherTrendNews newsData={otherData}/> }
            </ScrollView>
        );   
    }
    return content;
}

export default TrendNewsScreen;