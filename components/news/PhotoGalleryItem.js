// React Native Temel Paketler
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

// Vector Icons Paketleri
import Ionicons from "react-native-vector-icons/Ionicons";

// Context
import { Context } from "../../store/context";

// React Native Hooks
import { useContext } from "react";

// React Native Navigation
import { useNavigation } from "@react-navigation/native";

function PhotoGalleryItem({ itemData, imageStyle }) {
    const ctx = useContext(Context);
    const navigation = useNavigation();

    return(
        <Pressable style={styles.rootContainer} onPress={() => ctx.navigateGalleryDetailScreen(navigation, itemData.id)}>
            <View>
                <Image style={[styles.image, imageStyle]} source={{ uri: itemData.kapak }}/>
                <View style={styles.iconContainer}>
                    <Ionicons name="camera" color="white" size={38}/>
                </View>
            </View>
            <Text style={styles.text}>{itemData.baslik}</Text>
        </Pressable>
    );
}

export default PhotoGalleryItem;

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