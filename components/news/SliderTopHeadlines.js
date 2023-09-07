// React Native Temel Paketler
import { StyleSheet, View, Image, ScrollView, ActivityIndicator, Pressable, Text } from "react-native";

// React Native Hooks
import { useEffect, useState, useContext } from "react";

// Context
import { Context } from "../../store/context";

// API
import newsApi from "../../util/newsApi";

// React Native Navigation
import { useNavigation } from "@react-navigation/native";

function RenderItem({ itemData }) {
    const navigation = useNavigation();
    const ctx = useContext(Context);
    return(
        <View style={styles.itemRootContainer}>
            <Pressable onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, itemData.id)}>
                <Image style={styles.itemImage} source={{ uri: itemData.image }}/>
            </Pressable>
            <Pressable onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, itemData.id)}>
                <Text style={styles.itemTitle}>{itemData.title}</Text>
            </Pressable>
        </View>
    );
}

function SliderTopHeadlines() {
    const [topHeadlines, setTopHeadlines] = useState()
    useEffect(() => {
        newsApi.getTopHeadlineNews().then((topHeadlinesAPI) => setTopHeadlines(topHeadlinesAPI));
    }, []);

    let content = <ActivityIndicator />

    if(topHeadlines) {
        content = (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                {topHeadlines.map((item) => (
                    <View key={item.id}>
                        <RenderItem itemData={item}/>
                    </View>
                ))}
            </ScrollView>
        );
    }
    return(
        <>
            { content }
        </>
    );
}

export default SliderTopHeadlines;

const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: 8,
        paddingVertical: 24,
    },
    itemRootContainer: {
        maxWidth: 250,
        marginHorizontal: 12,
    },
    itemImage: {
        width: 242,
        height: 150,
        borderRadius: 8,
        resizeMode: "stretch",
    },
    itemTitle: {
        color: "black",
        fontSize: 20,
        flex: 1,
        flexWrap: "wrap",
    },
});