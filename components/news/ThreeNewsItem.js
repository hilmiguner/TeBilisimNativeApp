// React Native Temel Paketler
import { Image, StyleSheet, Text, View } from "react-native";

// Statik Değerler
import imageMapping from "../../constants/imageMapping";

function ThreeNewsItem({ itemData, imageStyle }) {
    const image = imageMapping[itemData.imageName];
    const title = itemData.title;

    return(
        <View style={styles.rootContainer}>
            <View>
                <Image style={[imageStyle]} source={image}/>
            </View>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

export default ThreeNewsItem;

const styles = StyleSheet.create({
    rootContainer: {
        margin: 12,
    },
    text: {
        fontSize: 18,
        color: "black",
    },
});