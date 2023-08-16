// React Native Temel Paketler
import { Image, StyleSheet, Text, View } from "react-native";

// Statik Değerler
import imageMapping from "../../constants/imageMapping";

function Card({ cardData }) {
    const image = imageMapping[cardData.imageName];
    const title = cardData.title;
    const titleColor = cardData.titleColor;
    const content = cardData.content;

    return(
        <View style={styles.rootContainer}>
            <Image style={styles.image} source={image}/>
            <View style={styles.textContainer}>
                <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
                <View>
                    <Text style={styles.content}>{content}</Text>
                </View>
            </View>
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: "white",
        borderRadius: 8,
        overflow: "hidden",
        marginVertical: 6,
        flexDirection: "row",
    },
    image: {
        width: "45%",
        height: 150,
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
        margin: 6,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    content: {
        flex: 1,
        flexWrap: "wrap",
        fontSize: 18,
        marginTop: 8,
    },
});