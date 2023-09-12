// React Native Temel Paketler
import { ActivityIndicator, Text, View } from "react-native";

// React Native Hooks
import { useEffect, useState } from "react";

// API
import newsApi from "../../util/newsApi";

// Oluşturulan Öğeler
import NumberCard from "../others/NumberCard";

function TrendNews() {
    const [trendNews, setTrendNews] = useState();
    useEffect(() => {
        // getHeadlineNews yerine getTrends metodu getirilmeli
        newsApi.getHeadlineNews().then((respondData) => setTrendNews(respondData));
    }, []);

    let content = <ActivityIndicator />;

    if(trendNews) {
        content = (
            <View>
                <Text>getHeadlineNews metodu değiştirilmeli</Text>
                <NumberCard cardData={trendNews[0]} index={1}/>
                <NumberCard cardData={trendNews[1]} index={2}/>
                <NumberCard cardData={trendNews[2]} index={3}/>
                <NumberCard cardData={trendNews[3]} index={4}/>
                <NumberCard cardData={trendNews[4]} index={5}/>
            </View>
        );
    }
    return content;
}

export default TrendNews;