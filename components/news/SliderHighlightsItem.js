// React Native Temel Paketler
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

// Statik Değerler
import imageMapping from "../../constants/imageMapping";
import AppColors from "../../constants/colors";

// React Navigation
import { useNavigation } from "@react-navigation/native";

function SliderHighlightsItem({ imageName, newsTitle }) {
    const imagePath = imageMapping[imageName];

    const navigation = useNavigation();

    function newsOnPressHandler() {
        navigation.navigate("NewsDetailsScreen");
    }

    return(
        <View style={styles.rootContainer}>
            <TouchableOpacity onPress={newsOnPressHandler}>
                <Image style={styles.image} source={imagePath}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={newsOnPressHandler}>
                <Text style={styles.text}>{newsTitle}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SliderHighlightsItem;

const styles = StyleSheet.create({
    rootContainer: {
        width: 220,
        marginHorizontal: 6,
    },
    image: {
        width: "100%",
        height: 250,
        borderRadius: 8,
        resizeMode: "cover",
    },
    text: {
        color: "white",
        fontSize: 20,
        flex: 1,
        flexWrap: "wrap",
    },
});