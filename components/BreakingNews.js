// React Native Temel Paketler
import { StyleSheet, Text, View } from "react-native";

// Statik Değerler
import AppColors from "../constants/colors";

function BreakingNews() {
    return(
        <View style={styles.rootContainer}>
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
        backgroundColor: AppColors.red300,
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