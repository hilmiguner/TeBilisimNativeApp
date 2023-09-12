// React Native Temel Paketler
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

// Statik Değerler
import AppColors from "../../constants/colors";

// Context
import { Context } from "../../store/context";

// React Native Hooks
import { useContext } from "react";

// React Native Navigation
import { useNavigation } from "@react-navigation/native";

function VerticalCard({ cardData }) {
    const ctx = useContext(Context);
    const navigation = useNavigation();
    return(
        <Pressable style={styles.rootContainer} onPress={ctx.navigateNewsDetailScreen.bind(this, navigation, cardData.reference_id)}>
            <View style={[styles.imageContainer, { borderBottomColor: ctx.panelSettings.themePrimaryColor }]}>
                <Image style={styles.image} source={{ uri: cardData.image }}/>
            </View>
            <View style={styles.cityContainer}>
                <Text style={[styles.cityText, { color: ctx.panelSettings.themePrimaryColor }]}>İSTANBUL(SABİT)</Text>
            </View>
            <Text style={styles.titleText}>{cardData.name}</Text>
        </Pressable>
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