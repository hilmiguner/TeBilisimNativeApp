// React Native Temel Paketler
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

// Statik Değerler
import AppColors from "../../constants/colors";

// React Navigation
import { useNavigation } from "@react-navigation/native";

// Context
import { Context } from "../../store/context";

// React Navigation Hooks
import { useContext } from "react";

function SliderDailyNewsItem({ itemData }) {
    const navigation = useNavigation();
    const ctx = useContext(Context);

    return(
        <View style={styles.rootContainer}>
            <Pressable onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, itemData.reference_id)}>
                <Image style={styles.image} source={{ uri: itemData.image }}/>
            </Pressable>
            <Pressable onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, itemData.reference_id)}>
                <Text style={styles.text}>{itemData.name}</Text>
            </Pressable>
        </View>
    );
}

export default SliderDailyNewsItem;

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
        fontSize: 20,
        flex: 1,
        flexWrap: "wrap",
    },
});