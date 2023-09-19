// React Native Temel Paketler
import { ActivityIndicator, StyleSheet, View, Text, Image, Pressable } from "react-native";

// React Native Hooks
import { useEffect, useState, useContext } from "react";

// API
import newsApi from "../../util/newsApi";

// Context
import { Context } from "../../store/context";

// React Native Navigation
import { useNavigation } from "@react-navigation/native";

function SimiliarNews({ categoryId, newsId }) {
    const [newsData, setNewsData] = useState();

    const ctx = useContext(Context);
    const navigation = useNavigation();

    useEffect(() => {
        newsApi.getThreeSimiliarNews(categoryId, newsId).then((respondData) => setNewsData(respondData));
    }, []);

    let content = <ActivityIndicator/>;
    if(newsData) {
        content = (
            <View style={styles.rootContainer}>
                {newsData[0] &&
                    <Pressable style={[styles.rowContainer, { margin: 12, backgroundColor: "white" }]} onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, newsData[0].id, true)}>
                        <Image style={styles.oneImage} source={{ uri: newsData[0].resim }}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{newsData[0].baslik}</Text>
                        </View>
                    </Pressable>
                }
                {(newsData[1] || newsData[2]) &&
                    <View style={styles.rowContainer}>
                        {newsData[1] &&
                            <Pressable style={styles.smallContainer} onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, newsData[1].id, true)}>
                                <Image style={styles.twoImages} source={{ uri: newsData[1].resim }}/>
                                <Text style={styles.title}>{newsData[1].baslik}</Text>
                            </Pressable>
                        }
                        {newsData[2] &&
                            <Pressable style={styles.smallContainer} onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, newsData[2].id, true)}>
                                <Image style={styles.twoImages} source={{ uri: newsData[2].resim }}/>
                                <Text style={styles.title}>{newsData[2].baslik}</Text>
                            </Pressable>
                        }
                    </View>
                }
            </View>
        );
    }

    return content;
}

export default SimiliarNews;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        padding: 8,
        marginBottom: 12,
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
        margin: 4,
    },
    oneImage: {
        width: 175,
        height: 200,
        resizeMode: "cover",
    },
    twoImages: {
        width: "100%",
        height: 150,
        resizeMode: "cover",
    },
    textContainer: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        flexWrap: "wrap",
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
        margin: 12,
    },
    smallContainer: {
        flex: 1,
        margin: 8,
        backgroundColor: "white",
    },
});