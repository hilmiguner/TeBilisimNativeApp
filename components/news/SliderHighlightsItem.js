// React Native Temel Paketler
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

// React Navigation
import { useNavigation } from "@react-navigation/native";

// Context
import { Context } from "../../store/context";

// React Native Hooks
import { useContext } from "react";

function SliderHighlightsItem({ data }) {
    const ctx = useContext(Context);
    const navigation = useNavigation();

    return(
        <View style={styles.rootContainer}>
            <Pressable onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, data.id)}>
                <Image style={styles.image} source={{ uri: data.image}}/>
            </Pressable>
            <Pressable onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, data.id)}>
                <Text style={styles.text}>{data.name}</Text>
            </Pressable>
        </View>
    );
}

export default SliderHighlightsItem;

const styles = StyleSheet.create({
    rootContainer: {
        width: 220,
        marginHorizontal: 6,
    },
    image: {
        width: "100%",
        height: 250,
        borderRadius: 8,
        resizeMode: "cover",
    },
    text: {
        color: "white",
        fontSize: 20,
        flex: 1,
        flexWrap: "wrap",
    },
});