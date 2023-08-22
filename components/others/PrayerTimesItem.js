// React Native Temel Paketler
import { Image, StyleSheet, Text, View } from "react-native";

// Statik Değerler
import AppColors from "../../constants/colors";

function PrayerTimesItem({ timePeriodText, time, isCurrentTime }) {
    return(
        <View style={styles.rootContainer}>
            <Image style={styles.image} source={require("../../assets/images/camii.png")}/>
            <View style={styles.textContainer}>
                <Text style={[styles.timePeriodText, isCurrentTime && { color: AppColors.yellow }]}>{timePeriodText}</Text>
                <Text style={[styles.timeText, isCurrentTime && { color: AppColors.yellow, fontWeight: "bold" }]}>{time}</Text>
            </View>
        </View>
    );
}

export default PrayerTimesItem;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
    },
    image: {
        width: 110,
        height: 110,
        zIndex: 0,
        alignSelf: "center",
    },
    textContainer: {
        flex: 1,
        zIndex: 1,
        position: "absolute",
        alignSelf: "center",
        top: 50
    },
    timePeriodText: {
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    timeText: {
        color: "white",
        textAlign: "center",
    },
});