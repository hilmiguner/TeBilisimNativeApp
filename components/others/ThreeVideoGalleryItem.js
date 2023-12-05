// React Native Temel Paketler
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

// Context
import { Context } from "../../store/context";

// React Native Hooks
import { useContext } from "react";

// React Native Navigation
import { useNavigation } from "@react-navigation/native";

// Vector Icons Paketleri
import Ionicons from "react-native-vector-icons/Ionicons";

function ThreeVideoGalleryItem({ itemData, imageStyle }) {
    const ctx = useContext(Context);
    const navigation = useNavigation();

    const image = itemData.resim;
    const title = itemData.baslik;
    return(
        <Pressable style={styles.rootContainer} onPress={ctx.navigateVideoDetailScreen.bind(this, navigation, itemData.id)}>
            <View>
                <Image style={[styles.image, imageStyle]} source={{ uri: image }}/>
                <View style={styles.iconContainer}>
                    <Ionicons name="play-circle-outline" color="white" size={38}/>
                </View>
            </View>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

export default ThreeVideoGalleryItem;

const styles = StyleSheet.create({
    rootContainer: {
        margin: 12,
    },
    image: {
        zIndex: 0,
    },
    iconContainer: {
        zIndex: 1,
        position: "absolute",
        bottom: 12,
        left: 12,
    },
    text: {
        fontSize: 18,
        color: "black",
    },
});