// React Native Temel Paketler
import { StyleSheet, View, Pressable, Image, Text } from "react-native";

// Vector Icons Paketleri
import Ionicons from "react-native-vector-icons/Ionicons";

function SliderVideoGalleryItem({ videoData }) {
    return(
        <Pressable style={styles.rootContainer}>
            <View>
                <Image style={styles.image} source={{ uri: videoData.resim }}/>
                <View style={styles.iconContainer}>
                    <Ionicons name="play-circle-outline" color="white" size={56}/>
                </View>
            </View>
            <Text style={styles.text}>{videoData.baslik}</Text>
        </Pressable>
    );
}

export default SliderVideoGalleryItem;

const styles = StyleSheet.create({
    rootContainer: {
        margin: 12,
        width: 300,
    },
    image: {
        width: 300,
        height: (1080*300)/1920,
        borderWidth: 7,
        borderColor: "white",
        borderRadius: 6,
        alignSelf: "center",
        zIndex: 0,
    },
    iconContainer: {
        zIndex: 1,
        position: "absolute",
        bottom: 12,
        left: 12,
    },
    text: {
        marginTop: 8,
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        flex: 1,
        flexWrap: "wrap",
    },
});