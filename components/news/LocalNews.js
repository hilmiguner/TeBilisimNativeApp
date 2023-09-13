// React Native Temel Paketler
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";

// React Native Hooks
import { useEffect, useState } from "react";

// API
import newsApi from "../../util/newsApi";

// Oluşturulan Öğeler
import VerticalCard from "../others/VerticalCard";

function LocalNews() {
    const [localNews, setLocalNews] = useState();

    useEffect(() => {
        newsApi.getHeadlineNews().then((respondData) => setLocalNews(respondData));
    }, []);

    let content = <ActivityIndicator />;

    if(localNews) {
        content = (
            <View>
                <Text>getHeadlineNews metodu değiştirilmeli</Text>
                <View style={styles.localNewsContainer}>
                    <VerticalCard cardData={localNews[0]}/>
                    <VerticalCard cardData={localNews[1]}/>
                </View>
                <View style={styles.localNewsContainer}>
                    <VerticalCard cardData={localNews[2]}/>
                    <VerticalCard cardData={localNews[3]}/>
                </View>
            </View>
        );
    }
    return content;
}

export default LocalNews;

const styles = StyleSheet.create({
    localNewsContainer: {
        flexDirection: "row",
        flex: 1,
    },
});