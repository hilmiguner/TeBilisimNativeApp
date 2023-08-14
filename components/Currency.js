// React Native Temel Paketler
import { StyleSheet, View } from "react-native";

// Oluşturulan Öğeler
import CurrencyItem from "./CurrencyItem";

// Statik Değerler
import AppColors from "../constants/colors";

function Currency() {
    return(
        <View style={styles.rootContainer}>
            <CurrencyItem icon="attach-money" currentValue="17,29" deltaValue="+0,34" size={24} color={AppColors.yellow} isIncreasing={true} currencyName="DOLAR"/>
            <CurrencyItem icon="euro" currentValue="18,64" deltaValue="-0,34" size={24} color={AppColors.yellow} isIncreasing={false} currencyName="EURO"/>
            <CurrencyItem icon="diamond" currentValue="970,64" deltaValue="-99,34" size={24} color={AppColors.yellow} isIncreasing={false} currencyName="ALTIN"/>
        </View>
    );
}

export default Currency;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: "purple",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
    },
    currencyContainer: {

    },
});