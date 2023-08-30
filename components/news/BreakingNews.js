// React Native Temel Paketler
import { StyleSheet, Text, View } from "react-native";

// Statik Değerler
import AppColors from "../../constants/colors";

// Context
import { Context } from "../../store/context";

// React Native Hooks
import { useContext } from "react";

function BreakingNews() {
    const ctx = useContext(Context);
    return(
        <View style={[styles.rootContainer, { backgroundColor: ctx.panelSettings.themePrimaryColor }]}>
            <View>
                <Text style={[styles.sonDakikaText, styles.sonText]}>SON</Text>
                <Text style={styles.sonDakikaText}>DAKİKA</Text>
            </View>
            <Text style={styles.newsText}>'Sörloth ile anlaşıldı' yazdılar! Yıllık dev maaş...</Text>
        </View>
    );
}

export default BreakingNews;

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 12,
        paddingVertical: 16,
        alignItems: "center",
    },
    sonText: {
        fontSize: 26,
    },
    sonDakikaText: {
        color: AppColors.yellow,
        fontWeight: "bold",
    },
    newsText: {
        marginHorizontal: 16,
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        flex: 1,
        flexWrap: "wrap",
    },
});