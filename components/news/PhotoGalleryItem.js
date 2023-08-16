// React Native Temel Paketler
import { Image, StyleSheet, Text, View } from "react-native";

// Statik Değerler
import imageMapping from "../../constants/imageMapping";

// Vector Icons Paketleri
import Ionicons from "react-native-vector-icons/Ionicons";

function PhotoGalleryItem({ itemData, imageStyle }) {
    const image = imageMapping[itemData.imageName];
    const title = itemData.title;

    return(
        <View style={styles.rootContainer}>
            <View>
                <Image style={[styles.image, imageStyle]} source={image}/>
                <View style={styles.iconContainer}>
                    <Ionicons name="camera" color="white" size={38}/>
                </View>
            </View>
            <Text style={styles.text}>{title}</Text>
        </View>
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