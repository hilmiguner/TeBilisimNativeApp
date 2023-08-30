// React Native Temel Paketler
import { Image, StyleSheet, Text, View } from "react-native";

// Statik Değerler
import imageMapping from "../../constants/imageMapping";

// Context
import { Context } from "../../store/context";

// React Native Hooks
import { useContext } from "react";

function NumberCard({ cardData }) {
    const image = imageMapping[cardData.imageName];
    const title = cardData.title;
    const titleColor = cardData.titleColor;
    const content = cardData.content;
    const cardLabel = cardData.cardLabel;

    const ctx = useContext(Context);
    return(
        <View style={styles.rootContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={image}/>
                <View style={styles.imageWhiteLabel}>
                    <View style={[styles.imageFrontLabel, { backgroundColor: ctx.panelSettings.themePrimaryColor }]}>
                        <Text style={styles.labelText}>{cardLabel}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
                <View>
                    <Text style={styles.content}>{content}</Text>
                </View>
            </View>
        </View>
    );
}

export default NumberCard;

const styles = StyleSheet.create({
    rootContainer: {
        marginVertical: 6,
        flexDirection: "row",
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 8,
    },
    imageWhiteLabel: {
        zIndex: 1, 
        position: "absolute", 
        right: -10, 
        top: -10, 
        width: 50, 
        height: 50, 
        borderRadius: 25, 
        backgroundColor: "#F2F2F2", 
        overflow: "hidden", 
        justifyContent: "center", 
        alignItems: "center",
    },
    imageFrontLabel: {
        width: 40, 
        height: 40, 
        borderRadius: 20, 
        overflow: "hidden", 
        justifyContent: "center", 
        alignItems: "center",
    },
    labelText: {
        textAlign: "center", 
        color: "white", 
        fontWeight: "bold",
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
        margin: 18,
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
        color: "black",
    },
});