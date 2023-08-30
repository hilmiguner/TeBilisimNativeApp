// React Native Temel Paketler
import { Image, StyleSheet, Text, View } from "react-native";

// Statik Değerler
import imageMapping from "../../constants/imageMapping";
import AppColors from "../../constants/colors";

// Context
import { Context } from "../../store/context";

// React Native Hooks
import { useContext } from "react";

function VerticalCard({ cardData }) {
    const image = imageMapping[cardData.imageName];
    const cityName = cardData.cityName;
    const newsTitle = cardData.newsTitle;

    const ctx = useContext(Context);
    return(
        <View style={styles.rootContainer}>
            <View style={[styles.imageContainer, { borderBottomColor: ctx.panelSettings.themePrimaryColor }]}>
                <Image style={styles.image} source={image}/>
            </View>
            <View style={styles.cityContainer}>
                <Text style={[styles.cityText, { color: ctx.panelSettings.themePrimaryColor }]}>{cityName}</Text>
            </View>
            <Text style={styles.titleText}>{newsTitle}</Text>
        </View>
    );
}

export default VerticalCard;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        margin: 12,
    },
    imageContainer: {
        borderBottomWidth: 4,
    },
    image: {
        width: "100%",
        height: 100,
        resizeMode: "cover",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        resizeMode: "cover"
    },
    cityContainer: {
        marginTop: 8,
        borderBottomWidth: 2,
        borderBottomColor: AppColors.gray200,
    },
    cityText: {
        fontWeight: "bold"
    },
    titleText: {
        marginTop: 6,
        flex: 1,
        flexWrap: "wrap",
        color: "black",
        fontSize: 18,
    },
});