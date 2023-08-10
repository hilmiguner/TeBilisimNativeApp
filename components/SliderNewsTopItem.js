// React Native Temel Paketler
import { Image, StyleSheet, Text, View } from "react-native";

// Statik Değerler
import imageMapping from "../constants/imageMapping";
import AppColors from "../constants/colors";

function SliderNewsTopItem({ imageName, newsTitle }) {
    const imagePath = imageMapping[imageName];
    return(
        <View style={styles.rootContainer}>
            <Image style={styles.image} source={imagePath}/>
            <Text style={styles.text}>{newsTitle}</Text>
        </View>
    );
}

export default SliderNewsTopItem;

const styles = StyleSheet.create({
    rootContainer: {
        maxWidth: 250,
        marginHorizontal: 12,
    },
    image: {
        width: 242,
        height: 150,
        borderRadius: 8,
        resizeMode: "stretch",
    },
    text: {
        color: AppColors.gray500,
        fontSize: 24,
        flex: 1,
        flexWrap: "wrap",
    },
});