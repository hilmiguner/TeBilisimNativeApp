// React Native Temel Paketler
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

// Context
import { Context } from "../../store/context";

// React Native Hooks
import { useContext } from "react";

// React Native Navigation
import { useNavigation } from "@react-navigation/native";

function NumberCard({ cardData, index }) {
    const ctx = useContext(Context);

    const navigation = useNavigation();

    let categoryName;
    try {
        categoryName = cardData.category[0].name;
    }
    catch(error) {
        categoryName = null;
    }

    categoryName = "test"

    let categoryColor;
    if(categoryName) {
        try {
            categoryColor = cardData.category[0].color;
            if(!categoryColor) categoryColor = "black";
        }
        catch(error) {
            categoryColor = "black";
        }
    }
    return(
        <Pressable style={styles.rootContainer} onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, cardData.reference_id)}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: cardData.image }}/>
                <View style={styles.imageWhiteLabel}>
                    <View style={[styles.imageFrontLabel, { backgroundColor: ctx.panelSettings.themePrimaryColor }]}>
                        <Text style={styles.labelText}>{index}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.textContainer}>
                {categoryName && <Text style={[styles.title, { color: categoryColor }]}>{categoryName}</Text>}
                <View>
                    <Text allowFontScaling style={styles.content}>{cardData.name}</Text>
                </View>
            </View>
        </Pressable>
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