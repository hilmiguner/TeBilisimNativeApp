// React Native Temel Paketler
import { StyleSheet, Text, Image, Dimensions, Pressable } from "react-native";

// Statik Değerler
import imageMapping from "../../constants/imageMapping";

// Linear Gradient Paketi
import LinearGradient from "react-native-linear-gradient";
import { rgbaColor } from "react-native-reanimated";

function SliderDotsNewsItem({ itemData }) {
    const imageSource = itemData.imageSource;
    const image = imageMapping[imageSource];
    const imageWidth = Image.resolveAssetSource(image).width;
    const imageHeight = Image.resolveAssetSource(image).height;

    const newsTitle = itemData.newsTitle;

    const screenWidth = Dimensions.get('window').width;

    const imageStyle = {
        width: screenWidth, 
        height: (imageHeight*screenWidth)/imageWidth,
        zIndex: 0,
    };

    return(
        <Pressable style={styles.rootContainer}>
            <Image style={imageStyle} source={image}/>
            <LinearGradient 
                style={styles.textContainer}
                colors={[rgbaColor(0, 0, 0, 0), "black"]}
                locations={[0, 0.6]}
            >
                <Text style={styles.newsTitle}>{newsTitle}</Text>
            </LinearGradient>
        </Pressable>
    );
}

export default SliderDotsNewsItem;

const styles = StyleSheet.create({
    rootContainer: { 
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
    },
    textContainer: {
        zIndex: 1,
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingTop: 52,
    },
    newsTitle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
    },
});