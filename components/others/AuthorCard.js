// React Native Temel Paketler
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

// React Native Hooks
import { useContext } from "react";

// Context
import { Context } from "../../store/context";

// React Native Navigation
import { useNavigation } from "@react-navigation/native";

function AuthorCard({ authorData }) {
    const ctx = useContext(Context);

    const navigation = useNavigation();
    return(
        <TouchableWithoutFeedback onPress={ctx.navigateArticleDetailScreen.bind(this, navigation, authorData.son_makale_id)}>
            <View style={styles.rootContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.authorText}>{authorData.yazaradi}</Text>
                    <Text style={styles.articleText}>{authorData.baslik}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: authorData.resim }}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default AuthorCard;

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
        backgroundColor: "#d4d4d4",
        margin: 8,
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
        marginRight: 4,
    },
    authorText: {
        color: "#3f3e3e",
        fontWeight: "bold",
        flexWrap: "wrap",
        marginBottom: 4,
    },
    articleText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
        flexWrap: "wrap",
    },
    imageContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    image: { width: 100, height: 100, resizeMode: "contain"},
});