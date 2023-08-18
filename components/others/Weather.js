// React Native Temel Paketler
import { StyleSheet, Text, View } from "react-native";

// Oluşturulan Öğeler
import IconButton from "../IconButton";

// Linear Gradient Paketi
import LinearGradient from "react-native-linear-gradient";

// Vector Icons Paketleri
import Ionicons from "react-native-vector-icons/Ionicons";

// Statik Değerler
import AppColors from "../../constants/colors";

function Weather({ weatherData }) {
    return(
        <LinearGradient style={styles.rootContainer} colors={["#4593BC", "#2A6B8D"]}>
            <View style={styles.headBar}>
                <Text style={styles.title}>Hava Durumu</Text>
                <IconButton icon="location" color={AppColors.yellow} size={24}/>
            </View>
            <View style={styles.statusContainer}>
                <View style={styles.cityNameContainer}>
                    <Text style={styles.cityName}>{weatherData.cityName}</Text>
                </View>
                <Ionicons name={ weatherData.currentIcon } color={AppColors.yellow} size={32} style={styles.currentIcon}/>
                <Text style={styles.currentStatusText}>{weatherData.status}</Text>
                <Text style={styles.currentDegreeText}>{weatherData.degree + " C°"}</Text>
            </View>
            <View style={styles.otherDayStatusContainer}>
                <View>
                    <Text style={styles.otherDayNameText}>{weatherData.oneDayAfterName}</Text>
                    <Text style={styles.otherDayStatusText}>{weatherData.oneDayAfterStatus}</Text>
                </View>
                <View style={styles.otherDayIconTextContainer}>
                    <Text style={styles.otherDayDegreeText}>{weatherData.oneDayAfterDegree + " C°"}</Text>
                    <Ionicons name={ weatherData.oneDayAfterIcon } color={AppColors.yellow} size={28} style={styles.currentIcon}/>
                </View>
            </View>
            <View style={styles.otherDayStatusContainer}>
                <View>
                    <Text style={styles.otherDayNameText}>{weatherData.twoDayAfterName}</Text>
                    <Text style={styles.otherDayStatusText}>{weatherData.twoDayAfterStatus}</Text>
                </View>
                <View style={styles.otherDayIconTextContainer}>
                    <Text style={styles.otherDayDegreeText}>{weatherData.twoDayAfterDegree + " C°"}</Text>
                    <Ionicons name={ weatherData.twoDayAfterIcon } color={AppColors.yellow} size={28} style={styles.currentIcon}/>
                </View>
            </View>
            <View style={styles.otherDayStatusContainer}>
                <View>
                    <Text style={styles.otherDayNameText}>{weatherData.threeDayAfterName}</Text>
                    <Text style={styles.otherDayStatusText}>{weatherData.threeDayAfterStatus}</Text>
                </View>
                <View style={styles.otherDayIconTextContainer}>
                    <Text style={styles.otherDayDegreeText}>{weatherData.threeDayAfterDegree + " C°"}</Text>
                    <Ionicons name={ weatherData.threeDayAfterIcon } color={AppColors.yellow} size={28} style={styles.currentIcon}/>
                </View>
            </View>
        </LinearGradient>
    );
}

export default Weather;

const styles = StyleSheet.create({
    rootContainer: {
        borderRadius: 8,
        margin: 16,
    },
    headBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
    statusContainer: {
        margin: 12,
        alignSelf: "center",
    },
    cityNameContainer: {
        padding: 12,
        paddingHorizontal: 32,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 32,
        margin: 8,
    },
    cityName: {
        color: "white",
        fontSize: 24,
    },
    currentIcon: {
        alignSelf: "center",
        margin: 8,
    },
    currentStatusText: {
        fontSize: 20,
        color: "white",
        textAlign: "center",  
        margin: 8,
    },
    currentDegreeText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "white",
        textAlign: "center", 
        margin: 8,
    },
    otherDayStatusContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#4B88A8",
        margin: 8,
        marginHorizontal: 16,
        padding: 12,
        paddingHorizontal: 18,
        borderRadius: 32,
    },
    otherDayNameText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#E2EDF1",
    },
    otherDayStatusText: {
        fontSize: 16,
        color: "#E2EDF1",
    },
    otherDayDegreeText: {
        fontSize: 24,
        color: "#E2EDF1",
    },
    otherDayIconTextContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
});