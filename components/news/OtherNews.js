// React Native Temel Paketler
import { View, ActivityIndicator } from "react-native";

// Oluşturulan Öğeler
import ThreeNews from "./ThreeNews";
import BorderButton from "../BorderButton";

// API
import newsApi from "../../util/newsApi";

// React Native Hooks
import { useEffect, useState } from "react";

function OtherNews() {
    const [otherNews, setOtherNews] = useState();
    const [numberOfNews, setNumberOfNews] = useState(9);
    useEffect(() => {
        newsApi.getOtherNews().then((newsData) => setOtherNews(newsData))
    }, []);

    let content = <ActivityIndicator/>;
    let buttonContent;
    if(otherNews) {
        let showingNews = [];
        let portionOfNews;
        try {
            portionOfNews = otherNews.slice(0, numberOfNews + 1);
        }
        catch (error) {
            try {
                portionOfNews = otherNews.slice(0, numberOfNews + 1 - 1);
            }
            catch (error) {
                portionOfNews = otherNews.slice(0, numberOfNews + 1 - 2);
            }
        }
        for (let index = 0; index < portionOfNews.length; index += 3) {
            if(portionOfNews[index+1]) {
                if(portionOfNews[index+2]) {
                    showingNews.push([portionOfNews[index], portionOfNews[index+1], portionOfNews[index+2]]);
                }
                else {
                    showingNews.push([portionOfNews[index], portionOfNews[index+1]]);
                }
            }
            else {
                showingNews.push([portionOfNews[index],])
            }
        }
        content = showingNews.map((newsData, index) => <View key={index}><ThreeNews data={newsData}/></View>);

        if(otherNews.length > portionOfNews.length) {
            buttonContent = <BorderButton title="Daha fazla göster" onPress={() => setNumberOfNews((currentValue) => currentValue+3)}/>
        }
    }
    
    return (
        <View>
            {content}
            {buttonContent}
        </View>
    );
}

export default OtherNews;