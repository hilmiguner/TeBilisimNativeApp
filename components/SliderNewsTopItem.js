// React Native Temel Paketler
import { Image, Pressable, StyleSheet, Text, View, TouchableOpacity } from "react-native";

// Statik Değerler
import imageMapping from "../constants/imageMapping";
import AppColors from "../constants/colors";

// React Navigation
import { useNavigation } from "@react-navigation/native";

function SliderNewsTopItem({ imageName, newsTitle }) {
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