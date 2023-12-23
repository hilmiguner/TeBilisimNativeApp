// React Native Temel Paketler
import { ActivityIndicator, StyleSheet, View, Text, Dimensions, Pressable } from "react-native";

// React Native Hooks
import { useEffect, useState, useContext } from "react";

// API
import newsApi from "../../util/newsApi";

// Context
import { Context } from "../../store/context";

// React Native Navigation
import { useNavigation } from "@react-navigation/native";

const screen_width = Dimensions.get("screen").width;

function SimiliarArticles({ authorId, authorName }) {
    const [articlesData, setArticlesData] = useState();

    const ctx = useContext(Context);
    const navigation = useNavigation();

    useEffect(() => {
        newsApi.getArticles(authorId).then((respondData) => setArticlesData(respondData));
    }, []);

    let content = <ActivityIndicator/>;
    if(articlesData) {
        content = (
            <View style={styles.rootContainer}>
                <Text style={styles.authorNameText}>{`'${authorName}' yazarının diğer makaleleri`}</Text>
                {articlesData[1] &&
                    <Pressable style={styles.innerContainer} onPress={ctx.navigateArticleDetailScreen.bind(this, navigation, articlesData[1].id, true)}>
                        <Text style={styles.title}>{articlesData[1].baslik}</Text>
                    </Pressable>
                }
                {articlesData[2] &&
                    <Pressable style={styles.innerContainer} onPress={ctx.navigateArticleDetailScreen.bind(this, navigation, articlesData[2].id, true)}>
                        <Text style={styles.title}>{articlesData[2].baslik}</Text>
                    </Pressable>
                }
                {articlesData[3] &&
                    <Pressable style={styles.innerContainer} onPress={ctx.navigateArticleDetailScreen.bind(this, navigation, articlesData[3].id, true)}>
                        <Text style={styles.title}>{articlesData[3].baslik}</Text>
                    </Pressable>
                }
                {articlesData[4] &&
                    <Pressable style={styles.innerContainer} onPress={ctx.navigateArticleDetailScreen.bind(this, navigation, articlesData[4].id, true)}>
                        <Text style={styles.title}>{articlesData[4].baslik}</Text>
                    </Pressable>
                }
            </View>
        );
    }

    return content;
}

export default SimiliarArticles;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        padding: 8,
        marginBottom: 12,
    },
    authorNameText: {
        textDecorationLine: "underline",
        fontSize: 18,
        color: "black",
    },
    title: {
        flexWrap: "wrap",
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
        margin: 12,
    },
    innerContainer: {
        flex: 1,
        width: screen_width-16,
        margin: 8,
        borderRadius: 8,
        backgroundColor: "white",
    },
});