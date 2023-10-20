// React Native Temel Paketler
import { Image, StyleSheet, Text, View } from "react-native";

function AuthorCard({ authorData }) {
    return(
        <View style={styles.rootContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.authorText}>{authorData.yazaradi}</Text>
                <Text style={styles.articleText}>{authorData.baslik}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: authorData.resim }}/>
            </View>
        </View>
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