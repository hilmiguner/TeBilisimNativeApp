// React Native Temel Paketler
import { StyleSheet, Text, Image, Dimensions, View } from "react-native";

// Linear Gradient Paketi
import LinearGradient from "react-native-linear-gradient";
import { rgbaColor } from "react-native-reanimated";

// Gesture Handler
import { TapGestureHandler } from "react-native-gesture-handler";

// React Native Navigation
import { useNavigation } from "@react-navigation/native";

// Context
import { Context } from "../../store/context";

// React Native Hooks
import { useContext } from "react";

function CarouselGalleryItem({ itemData }) {
    const image = itemData.kapak;

    const newsTitle = itemData.baslik;

    const screenWidth = Dimensions.get('window').width;

    const imageStyle = {
        width: screenWidth, 
        height: screenWidth * (1080/1920),
        zIndex: 0,
    };

    const navigation = useNavigation();

    const ctx = useContext(Context);

    return(
        // <TapGestureHandler onActivated={ctx.navigateNewsDetailScreen.bind(this, navigation, itemData.id)}>
        <TapGestureHandler onActivated={null}>
            <View>
                <Image style={imageStyle} source={{ uri: image }}/>
                <LinearGradient 
                    style={styles.textContainer}
                    colors={[rgbaColor(0, 0, 0, 0), "black"]}
                    locations={[0, 0.6]}
                >
                    { ctx.panelSettings.mainCuffTitles && <Text style={styles.newsTitle}>{newsTitle}</Text> }
                </LinearGradient>
            </View>
        </TapGestureHandler>
    );
}

export default CarouselGalleryItem;

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