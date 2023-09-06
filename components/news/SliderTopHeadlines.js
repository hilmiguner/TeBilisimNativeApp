// React Native Temel Paketler
import { StyleSheet, View, Image, FlatList, ActivityIndicator, Pressable, Text } from "react-native";

// React Native Hooks
import { useEffect, useState } from "react";

// API
import newsApi from "../../util/newsApi";

// React Native Navigation
import { useNavigation } from "@react-navigation/native";

function pressHandler(navigation, id) {
    navigation.navigate("NewsDetailsScreen", { newsID: id });
}

function RenderItem({ itemData }) {
    const navigation = useNavigation();
    return(
        <View style={styles.itemRootContainer}>
            <Pressable onPress={pressHandler.bind(this, navigation, itemData.id)}>
                <Image style={styles.itemImage} source={{ uri: itemData.image }}/>
            </Pressable>
            <Pressable onPress={pressHandler.bind(this, navigation, itemData.id)}>
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
            <FlatList
                data={topHeadlines}
                keyExtractor={(item) => item.id}
                renderItem={(item) => <RenderItem itemData={item.item}/>}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.flatList}
            />
        );
    }
    return(
        <View>
            {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                <SliderNewsItem imageName="SliderNewsTop1" newsTitle="Yaz sıcakları bastırdı, şimdi yılan korkusu başladı"/>
                <SliderNewsItem imageName="SliderNewsTop2" newsTitle="Sağlık Bakanlığı: SMA'lı aileler destek almalı"/>
                <SliderNewsItem imageName="SliderNewsTop1" newsTitle="Yaz sıcakları bastırdı, şimdi yılan korkusu başladı"/>
                <SliderNewsItem imageName="SliderNewsTop2" newsTitle="Sağlık Bakanlığı: SMA'lı aileler destek almalı"/>
                <SliderNewsItem imageName="SliderNewsTop2" newsTitle="Sağlık Bakanlığı: SMA'lı aileler destek almalı"/>
            </ScrollView> */}
            { content }
        </View>
    );
}

export default SliderTopHeadlines;

const styles = StyleSheet.create({
    flatList: {
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