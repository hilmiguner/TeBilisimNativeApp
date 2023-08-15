// React Native Temel Paketler
import { StyleSheet } from "react-native";

// Oluşturulan Öğeler
import CurrencyItem from "./CurrencyItem";

// Statik Değerler
import AppColors from "../../constants/colors";

// Linear Gradient Paketi
import LinearGradient from "react-native-linear-gradient";

function Currency() {
    return(
        <LinearGradient colors={["#541B8B", "#14035C"]} style={styles.rootContainer}>
            <CurrencyItem icon="attach-money" currentValue="17,29" deltaValue="+0,34" size={24} color={AppColors.yellow} isIncreasing={true} currencyName="DOLAR"/>
            <CurrencyItem icon="euro" currentValue="18,64" deltaValue="-0,34" size={24} color={AppColors.yellow} isIncreasing={false} currencyName="EURO"/>
            <CurrencyItem icon="diamond" currentValue="970,64" deltaValue="-99,34" size={24} color={AppColors.yellow} isIncreasing={false} currencyName="ALTIN"/>
        </LinearGradient>
    );
}

export default Currency;

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
    },
    currencyContainer: {

    },
});