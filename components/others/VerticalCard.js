// React Native Temel Paketler
import { Image, StyleSheet, Text, View } from "react-native";

// Statik Değerler
import imageMapping from "../../constants/imageMapping";
import AppColors from "../../constants/colors";

// Uygulama Ayarları(API)
import PanelSettings from "../../util/panelSettings";

function VerticalCard({ cardData }) {
    const image = imageMapping[cardData.imageName];
    const cityName = cardData.cityName;
    const newsTitle = cardData.newsTitle;

    return(
        <View style={styles.rootContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={image}/>
            </View>
            <View style={styles.cityContainer}>
                <Text style={styles.cityText}>{cityName}</Text>
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
        borderBottomColor: PanelSettings.themePrimaryColor,
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
        color: PanelSettings.themePrimaryColor,
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