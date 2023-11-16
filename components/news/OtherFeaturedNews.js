// React Native Temel Paketler
import { StyleSheet, View } from "react-native";

// Oluşturulan Öğeler
import ThreeFeaturedNews from "./ThreeFeaturedNews";
import BorderButton from "../BorderButton";

// React Native Hooks
import { useState } from "react";

function OtherFeaturedNews({ newsData }) {
    const [numberOfNews, setNumberOfNews] = useState(9);

    let buttonContent;
    let showingNews = [];
    let portionOfNews;
    try {
        portionOfNews = newsData.slice(0, numberOfNews + 1);
    }
    catch (error) {
        try {
            portionOfNews = newsData.slice(0, numberOfNews + 1 - 1);
        }
        catch (error) {
            portionOfNews = newsData.slice(0, numberOfNews + 1 - 2);
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
    content = showingNews.map((data, index) => <View key={index}><ThreeFeaturedNews data={data}/></View>);

    if(newsData.length > portionOfNews.length) {
        buttonContent = <BorderButton title="Daha fazla göster" onPress={() => setNumberOfNews((currentValue) => currentValue+3)}/>
    }
    
    return (
        <View style={styles.rootContainer}>
            {content}
            {buttonContent}
        </View>
    );
}

export default OtherFeaturedNews;

const styles = StyleSheet.create({
    rootContainer: {
        paddingBottom: 18,
    },
});