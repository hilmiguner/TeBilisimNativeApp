// React Native Temel Paketler
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

// Context
import { Context } from "../../store/context";

// React Native Hooks
import { useContext } from "react";

// React Native Navigation
import { useNavigation } from "@react-navigation/native";

function Card({ cardData }) {
    const ctx = useContext(Context);
    const navigation = useNavigation();

    return(
        <Pressable style={styles.rootContainer} onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, cardData.id)}>
            <Image style={styles.image} source={{ uri: cardData.topheadline }}/>
            <View style={styles.textContainer}>
                <Text style={[styles.title, { color: cardData.category.color ? cardData.category.color : "black" }]}>{cardData.category.name}</Text>
                <View>
                    <Text style={styles.content}>{cardData.name}</Text>
                </View>
            </View>
        </Pressable>
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
        color: "black",
    },
});