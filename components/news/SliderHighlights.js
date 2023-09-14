// React Native Temel Paketler
import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";

// Oluşturulan Öğeler
import SliderHighlightsItem from "./SliderHighlightsItem";

// API
import newsApi from "../../util/newsApi";

// React Native Hooks
import { useEffect, useState } from "react";

function SliderHighlights() {
    const [highlightNews, setHighlightNews] = useState();

    useEffect(() => {
        newsApi.getFeatured().then((respondData) => setHighlightNews(respondData));
    }, []);

    let content = <ActivityIndicator />;
    if(highlightNews) {
        content = (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                {highlightNews.map((data) => <View key={data.id}><SliderHighlightsItem data={data}/></View>)}
            </ScrollView>
        );
    }
    return(
        <View style={styles.rootContainer}>
            {content}
        </View>
    );
}

export default SliderHighlights;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 24,
    },
});