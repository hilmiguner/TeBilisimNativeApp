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
        newsApi.getFourSimiliarNews(categoryId, newsId).then((respondData) => setNewsData(respondData));
    }, []);

    let content = <ActivityIndicator/>;
    if(newsData) {
        content = (
            <View style={styles.rootContainer}>
                {(newsData[0] || newsData[1]) &&
                    <View style={styles.rowContainer}>
                        {newsData[0] &&
                            <Pressable style={styles.smallContainer} onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, newsData[0].id, true)}>
                                <Image style={styles.image} source={{ uri: newsData[0].resim }}/>
                                <Text style={styles.title}>{newsData[0].baslik}</Text>
                            </Pressable>
                        }
                        {newsData[1] &&
                            <Pressable style={styles.smallContainer} onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, newsData[1].id, true)}>
                                <Image style={styles.image} source={{ uri: newsData[1].resim }}/>
                                <Text style={styles.title}>{newsData[1].baslik}</Text>
                            </Pressable>
                        }
                    </View>
                }
                {(newsData[2] || newsData[3]) &&
                    <View style={styles.rowContainer}>
                        {newsData[2] &&
                            <Pressable style={styles.smallContainer} onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, newsData[2].id, true)}>
                                <Image style={styles.image} source={{ uri: newsData[2].resim }}/>
                                <Text style={styles.title}>{newsData[2].baslik}</Text>
                            </Pressable>
                        }
                        {newsData[3] &&
                            <Pressable style={styles.smallContainer} onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, newsData[3].id, true)}>
                                <Image style={styles.image} source={{ uri: newsData[3].resim }}/>
                                <Text style={styles.title}>{newsData[3].baslik}</Text>
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
    image: {
        width: "100%",
        height: 150,
        resizeMode: "cover",
    },
    title: {
        flexWrap: "wrap",
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
        margin: 12,
    },
    smallContainer: {
        flex: 1,
        margin: 8,
        backgroundColor: "white",
    },
});