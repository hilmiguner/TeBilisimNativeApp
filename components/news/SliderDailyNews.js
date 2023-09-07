// React Native Temel Paketler
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";

// Oluşturulan Öğeler
import SliderDailyNewsItem from "./SliderDailyNewsItem";

// React Native Hooks
import { useState, useEffect } from "react";

// API
import newsApi from "../../util/newsApi";

function SliderDailyNews() {
    const [dailyNewsData, setDailyNewsData] = useState();

    useEffect(() => {
        newsApi.getDailyHeadlineNews().then((apiData) => setDailyNewsData(apiData));
    }, []);
    
    let content = <ActivityIndicator />;

    if(dailyNewsData) {
        content = (
            <FlatList 
                horizontal showsHorizontalScrollIndicator={false} 
                style={styles.flatList} 
                data={dailyNewsData}
                keyExtractor={(item) => item.reference_id}
                renderItem={({item}) => <SliderDailyNewsItem itemData={item}/>}
            />
        );
    }
    return content;
}

export default SliderDailyNews;

const styles = StyleSheet.create({
    flatList: {
        paddingHorizontal: 8,
        paddingTop: 24,
    },
});