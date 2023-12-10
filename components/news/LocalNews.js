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
        newsApi.getLocalNews().then((respondData) => setLocalNews(respondData));
    }, []);

    let content = <ActivityIndicator />;

    if(localNews) {
        content = (
            <View>
                <View style={styles.localNewsContainer}>
                    <VerticalCard cardData={localNews[0]}/>
                    <View style={{ marginHorizontal: 12 }}></View>
                    <VerticalCard cardData={localNews[1]}/>
                </View>
                <View style={styles.localNewsContainer}>
                    <VerticalCard cardData={localNews[2]}/>
                    <View style={{ marginHorizontal: 12 }}></View>
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
        marginVertical: 12,
    },
});