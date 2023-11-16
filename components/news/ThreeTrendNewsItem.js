// React Native Temel Paketler
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

// Context
import { Context } from "../../store/context";

// React Native Hooks
import { useContext } from "react";

// React Native Navigation
import { useNavigation } from "@react-navigation/native";

function ThreeTrendNewsItem({ itemData, imageStyle }) {
    const ctx = useContext(Context);
    const navigation = useNavigation();

    const image = itemData.image;
    const title = itemData.name;
    return(
        <Pressable style={styles.rootContainer} onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, itemData.id)}>
            <View>
                <Image style={[imageStyle]} source={{ uri: image }}/>
            </View>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

export default ThreeTrendNewsItem;

const styles = StyleSheet.create({
    rootContainer: {
        margin: 12,
    },
    text: {
        fontSize: 18,
        color: "black",
    },
});