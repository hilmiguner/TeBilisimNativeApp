// React Native Temel Paketler
import { StyleSheet, ActivityIndicator, View, ScrollView } from "react-native";

// Oluşturulan Öğeler
import SliderDailyNewsItem from "./SliderDailyNewsItem";

// React Native Hooks
import { useState, useEffect } from "react";

// API
import newsApi from "../../util/newsApi";

function SliderDailyNews() {
    const [dailyNewsData, setDailyNewsData] = useState();

    useEffect(() => {
        newsApi.getDailyHeadlineNews().then((apiData) => {
            if(apiData.length > 5) {
                setDailyNewsData(apiData.slice(0, 5));
            }
            else {
                setDailyNewsData(apiData);
            }
        });
    }, []);
    
    let content = <ActivityIndicator />;
    
    if(dailyNewsData) {
        content = (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                {dailyNewsData.map((item) => (
                    item.reference_id ? 
                    <View key={item.reference_id}>
                        <SliderDailyNewsItem itemData={item}/>
                    </View>
                    :
                    null
                ))}
            </ScrollView>
        );
    }
    return content;
}

export default SliderDailyNews;

const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: 8,
        paddingTop: 24,
    },
});