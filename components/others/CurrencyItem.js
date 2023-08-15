// React Native Temel Paketler
import { StyleSheet, View, Text } from "react-native";

// MaterialIcons
import Icon from "react-native-vector-icons/MaterialIcons";

function CurrencyItem({ currentValue, deltaValue, currencyName, icon, color, size, isIncreasing }) {
    const currencyArrowIcon = isIncreasing ? "arrow-drop-up" : "arrow-drop-down";
    const currencyDeltaColor = isIncreasing ? "green" : "orange";

    return(
        <View style={styles.rootContainer}>
            <View style={styles.iconContainer}>
                <Icon name={icon} color={color} size={size}/>
                <Text style={styles.currencyNameText}>{currencyName}</Text>
                <Icon name={currencyArrowIcon} color={currencyDeltaColor} size={24}/>
            </View>
            <View style={styles.currencyValuesContainer}>
                <Text style={styles.currentValueText}>{currentValue}</Text>
                <Text style={[styles.deltaValueText, isIncreasing ? { color: "green" } : { color: "orange" }]}>{deltaValue}</Text>
            </View>
        </View>
    );
}

export default CurrencyItem;

const styles = StyleSheet.create({
    rootContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
    },
    currencyNameText: {
        fontWeight: "bold",
        color: "white",
    },
    currencyValuesContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    currentValueText: {
        fontSize: 24,
        textAlign: "center",
        color: "white",
    },
    deltaValueText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
    },
});