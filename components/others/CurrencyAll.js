// React Native Temel Paketler
import { StyleSheet, View } from "react-native";

// Oluşturulan Öğeler
import CurrencyItem from "./CurrencyItem";

// Statik Değerler
import AppColors from "../../constants/colors";

// Linear Gradient Paketi
import LinearGradient from "react-native-linear-gradient";

function CurrencyAll() {
    return(
        <LinearGradient colors={["#541B8B", "#14035C"]} style={styles.rootContainer}>
            <View style={styles.subcontainer}>
                <CurrencyItem icon="attach-money" currentValue="26,34" deltaValue="%-3,14" size={24} color={AppColors.yellow} isIncreasing={true} currencyName="DOLAR"/>
                <CurrencyItem icon="euro" currentValue="28,73" deltaValue="%-3,01" size={24} color={AppColors.yellow} isIncreasing={false} currencyName="EURO"/>
                <CurrencyItem icon="diamond" currentValue="970,64" deltaValue="%-99,34" size={24} color={AppColors.yellow} isIncreasing={false} currencyName="ALTIN"/>
            </View>
            <View style={styles.subcontainer}>
                <CurrencyItem icon="currency-bitcoin" currentValue="26,400" deltaValue="%1,54" size={24} color={AppColors.yellow} isIncreasing={true} currencyName="BITCOIN"/>
                <CurrencyItem icon="currency-bitcoin" currentValue="1,672" deltaValue="%1,94" size={24} color={AppColors.yellow} isIncreasing={false} currencyName="ETHEREUM"/>
                <CurrencyItem icon="currency-bitcoin" currentValue="7721,74" deltaValue="%1,57" size={24} color={AppColors.yellow} isIncreasing={false} currencyName="BIST"/>
            </View>
        </LinearGradient>
    );
}

export default CurrencyAll;

const styles = StyleSheet.create({
    rootContainer: {
        padding: 16,
    },
    subcontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 12,
    },
});